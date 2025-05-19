import {onUnmounted, ref, watchEffect,onBeforeUnmount,onMounted} from 'vue'
import Peer, {DataConnection} from 'peerjs'
import {UploadedFile, UploaderConnection, UploaderConnectionStatus,} from '../types'
import {getFileName} from "../fs";
import {ChunkMessage, decodeMessage, InfoMessage, MessageType, PasswordRequiredMessage} from "../messages";
// import {compress, CompressionAlgorithm} from "../../pkg";
const MAX_CHUNK_SIZE = 512 * 1024 // 256 KB
import * as Comlink from "comlink";
//@ts-ignore
import WorkerConstructor from './worker.ts?worker'
function validateOffset(files: UploadedFile[], fileName: string, offset: number): UploadedFile {
  const validFile = files.find(
      (file) => getFileName(file) === fileName && offset <= file.size
  )
  if (!validFile) throw new Error('Invalid file offset')
  return validFile
}

//  返回UploaderConnection[]
export function useUploaderConnections(
    peer: Peer,
    files: UploadedFile[],
    password: string,
    algorithm: Number,
) {
  const connections = ref<UploaderConnection[]>([])

  // 指示connectid和api的映射
  const ApiMap = new Map();
  // 指示connectid和worker的映射
  const workerMap = new Map();

  const terminateAll= () =>{
    workerMap.forEach((value, key) => {
      value.cancelTransfer().catch(console.error);
      value[Comlink.releaseProxy]();
      workerMap[key].terminate();
    });
    workerMap.clear();
    ApiMap.clear();
  }

  const terminateWorker = (connectionId:string) => {
    const workerApi = ApiMap.get(connectionId);
    if (workerApi) {
      // 先取消可能正在进行的传输
      workerApi.cancelTransfer().catch(console.error);
      // 释放Comlink代理
      workerApi[Comlink.releaseProxy]();
      ApiMap.delete(connectionId);
    }

    const worker = workerMap.get(connectionId);
    if (worker) {
      worker.terminate();
      workerMap.delete(connectionId);
    }
  }
  const createWorker = (connectionId:string) => {
    const worker = new WorkerConstructor();
    const workerApi = Comlink.wrap(worker);
    // 将worker和api存储在映射中
    workerMap.set(connectionId, worker);
    ApiMap.set(connectionId, workerApi);
  }
  // todo 在组件卸载时清理Worker
  // const cleanupWorker=()=> {
  //   if (workerApi) {
  //     // 先取消可能正在进行的传输
  //     workerApi.cancelTransfer().catch(console.error);
  //
  //     // 释放Comlink代理
  //     workerApi[Comlink.releaseProxy]();
  //   }
  //
  //   if (worker) {
  //     worker.terminate();
  //     worker = null;
  //   }
  //
  //   console.log('文件传输Worker已清理');
  // }

  const setupConnections = () => {
    const cleanupHandlers: (() => void)[] = []
    // 连接建立与处理
    const handleNewConnection = (conn: DataConnection) => {
      // 如果连接是报告类型，处理不当内容报告
      // connect中设置metadata的type，当某位下载者认为内容不适当时，他们可以发起举报连接,
      // 通知所有连接的下载者内容已被举报
      // 关闭所有连接，阻止进一步传输
      // 重定向上传者，阻止他们继续使用平台分享该内容
      if (conn.metadata?.type === 'report') {
        // 广播举报消息
        connections.value.forEach(c => {
          c.dataConnection.send({ type: MessageType.Report })
          c.dataConnection.close()
        })
        // 重定向上传者到被报告页面
        window.location.href = '/reported'
        return
      }
      // 新连接初始化
      // let sendChunkTimeout = ref<NodeJS.Timeout | null>(null)
      // 创建新的连接对象
      // 初始状态为"待处理"(Pending)
      const newConn: UploaderConnection = {
        status: UploaderConnectionStatus.Pending,
        dataConnection: conn,
        completedFiles: 0,
        totalFiles: files.length,
        currentFileProgress: 0
      }

      connections.value = [newConn, ...connections.value]

      // 更新连接状态辅助函数
      const updateConnection = (updater: (c: UploaderConnection) => UploaderConnection) => {
        connections.value = connections.value.map(c =>
            c.dataConnection.connectionId === conn.connectionId ? updater(c as UploaderConnection)  : c
        );
      };
      // 消息处理系统
      const handleData = (data: unknown) => {
        try {
          const message = decodeMessage(data)
          switch (message.type) {
            case MessageType.RequestInfo:
              handleRequestInfo(conn, message, updateConnection)
              break
            case MessageType.UsePassword:
              handlePassword(message, conn, updateConnection)
              break
            case MessageType.Start:
              // handleStartTransfer(conn, message, updateConnection, sendChunkTimeout)
              handleStartTransferWithWorker(conn, message, updateConnection)
              break
            // 暂停传输
            case MessageType.Pause:
              // handlePause(updateConnection, sendChunkTimeout)
              handlePauseWithWorker(updateConnection,conn)
              break
            // 传输完成
            case MessageType.Done:
              handleDone(conn, updateConnection)
              break
          }
        } catch (err) {
          console.error('Error handling message:', err)
        }
      }
      // 连接关闭处理
      const handleClose = () => {
        terminateWorker(conn.connectionId)
        updateConnection(c => ({
          ...c,
          status: UploaderConnectionStatus.Closed
        }))
      }

      // 当从对等方(peer)接收到任何数据时，handleData函数就会被调用
      conn.on('data', handleData)
      // 连接被任何一方关闭时，onClose函数会被调用
      conn.on('close', handleClose)
      // 资源清理
      cleanupHandlers.push(() => {
        conn.off('data', handleData)
        conn.off('close', handleClose)
        conn.close()
      })
    }
    // 每当有新的对等体连接时就会触发调用listener(一个listener就创建一个定时器去发送数据)
    peer.on('connection', handleNewConnection)
    return () => {
      peer.off('connection', handleNewConnection)
      cleanupHandlers.forEach(cleanup => cleanup())
    }
  }

  // 处理不同消息类型的函数
  const handleRequestInfo = (conn: DataConnection, message: any, update: Function) => {
    const connectionState = {
      browserName: message.browserName,
      browserVersion: message.browserVersion,
      osName: message.osName,
      osVersion: message.osVersion,
      mobileVendor: message.mobileVendor,
      mobileModel: message.mobileModel
    }

    if (password) {
      conn.send({ type: MessageType.PasswordRequired } as PasswordRequiredMessage)
      update((c: UploaderConnection) => ({
        ...c,
        ...connectionState,
        status: UploaderConnectionStatus.Authenticating
      }))
      return
    }
    createWorker(conn.connectionId)
    sendFileInfo(conn, update, connectionState)
  }
  //发送文件详情
  const sendFileInfo = (conn: DataConnection, update: Function, state: any) => {
    const fileInfo = files.map(f => ({
      name: getFileName(f),
      size: f.size,
      type: f.type,
    }))

    conn.send({
      type: MessageType.Info,
      files: fileInfo
    } as InfoMessage)

    update((c: UploaderConnection) => ({
      ...c,
      ...state,
      status: UploaderConnectionStatus.Ready
    }))
  }

  const handlePassword = (message: any, conn: DataConnection, update: Function) => {
    // password验证
    if (message.password === password) {
      createWorker(conn.connectionId)
      sendFileInfo(conn, update, {})
    } else {
      conn.send({
        type: MessageType.PasswordRequired,
        errorMessage: 'Invalid password'
      } as PasswordRequiredMessage)
      update((c: UploaderConnection) => ({
        ...c,
        status: UploaderConnectionStatus.InvalidPassword
      }))
    }
  }

  // 开始文件传输
  // const handleStartTransfer = (conn: DataConnection, message: { fileName: string; offset: number }, update: (updater: (c: UploaderConnection) => UploaderConnection) => void, timeoutRef: { value: NodeJS.Timeout | null }) => {
  //   // 验证文件和偏移量
  //   const file = validateOffset(files, message.fileName, message.offset);
  //   let offset = message.offset;
  //   // 定义发送下一块的函数 , 递归调用，创建新的定时器
  //   const sendChunk = async () => {
  //     // 计算块的大小和结束位置
  //     const end = Math.min(file.size, offset + MAX_CHUNK_SIZE);
  //     const chunkSize = end - offset
  //     const final = chunkSize < MAX_CHUNK_SIZE
  //     const chunk = await file.slice(offset, end).arrayBuffer();
  //     let compressedChunk = compress(new Uint8Array(chunk),algorithm as CompressionAlgorithm);
  //     conn.send({
  //       type: MessageType.Chunk,
  //       fileName: message.fileName,
  //       offset,
  //       bytes: compressedChunk,
  //       final,
  //     } as ChunkMessage);
  //     if (final) {
  //       // 文件传输完成
  //       update((c:UploaderConnection) => ({
  //             ...c,
  //             status: UploaderConnectionStatus.Ready,
  //             completedFiles: c.completedFiles + 1,
  //             currentFileProgress: 0,
  //           })
  //       );
  //     }else {
  //       offset = end
  //       update((c: UploaderConnection) => ({
  //         ...c,
  //         uploadingOffset: offset,
  //         currentFileProgress: offset / file.size,
  //       }))
  //       scheduleNextChunk()
  //     }
  //   };
  //
  //   const scheduleNextChunk = () => {
  //     timeoutRef.value = setTimeout(sendChunk, 0);
  //   };
  //   //更新连接状态
  //   update((c) => ({
  //     ...c,
  //     status: UploaderConnectionStatus.Uploading,
  //     uploadingFileName: message.fileName,
  //     uploadingOffset: offset,
  //     currentFileProgress: offset / file.size,
  //   }));
  //
  //   scheduleNextChunk();
  // };


  // 使用Worker开始文件传输
  const handleStartTransferWithWorker =(conn: DataConnection, message: {
    fileName: string;
    offset: number
  }, update: (updater: (c: UploaderConnection) => UploaderConnection) => void) => {
    try {
      // 验证文件和偏移量
      const file = validateOffset(files, message.fileName, message.offset);
      const offset = message.offset;
      // 更新连接状态
      update((c) => ({
        ...c,
        status: UploaderConnectionStatus.Uploading,
        uploadingFileName: message.fileName,
        uploadingOffset: offset,
        currentFileProgress: offset / file.size,
      }));
      // 初始化Worker的文件传输
      ApiMap.get(conn.connectionId).initTransfer(file, message.fileName, offset, algorithm);
      const processChunks = async () => {
        try {
          while (true) {
            // 请求Worker处理下一个块
            const workerApi = ApiMap.get(conn.connectionId);
            if (!workerApi) {
              console.error('找不到连接对应的worker API:', conn.connectionId);
              return;
            }
            const result = await workerApi.processNextChunk();
            if (!result.success) {
              console.error('处理块失败:', result.error);
              return;
            }
            console.log('处理块结果:', result);
            // 发送块数据
            conn.send({
              type: MessageType.Chunk,
              fileName: result.fileName,
              offset: result.offset,
              bytes: result.bytes,
              final: result.final,
            } as ChunkMessage);

            // 更新状态
            if (result.final) {
              // 文件传输完成
              update((c: UploaderConnection) => ({
                ...c,
                status: UploaderConnectionStatus.Ready,
                completedFiles: c.completedFiles + 1,
                currentFileProgress: 0,
              }));
              terminateWorker(conn.connectionId)
              break;
            } else {
              // 更新进度
              update((c: UploaderConnection) => ({
                ...c,
                uploadingOffset: result.newOffset,
                currentFileProgress: result.progress,
              }));
              // 等待下一帧，防止阻塞UI
              await new Promise(requestAnimationFrame);
            }
          }
        } catch (error) {
          console.error('处理块时出错:', error);
          // 处理错误...
        }
      };

      // 开始处理块
      processChunks();

    } catch (error) {
      console.error('启动文件传输时出错:', error);
      // 处理错误...
    }
  };
  const handlePauseWithWorker = (update: Function,conn:DataConnection) => {
    terminateWorker(conn.connectionId)
    update((c: UploaderConnection) => ({
      ...c,
      status: UploaderConnectionStatus.Paused
    }))
  }

  // const handlePause = (update: Function, timeoutRef: { value: NodeJS.Timeout | null }) => {
  //   timeoutRef.value && clearTimeout(timeoutRef.value)
  //   update((c: UploaderConnection) => ({
  //     ...c,
  //     status: UploaderConnectionStatus.Paused
  //   }))
  // }

  const handleDone = (conn: DataConnection, update: Function) => {
    conn.close()
    update((c: UploaderConnection) => ({
      ...c,
      status: UploaderConnectionStatus.Done
    }))
  }

  const stop = watchEffect((onCleanup) => {
    const cleanup = setupConnections()
    onCleanup(cleanup)
  })

  // 生命周期钩子
  onMounted(() => {

  });

  onBeforeUnmount(() => {
    terminateAll()
  });

  onUnmounted(stop)
  return connections
}

