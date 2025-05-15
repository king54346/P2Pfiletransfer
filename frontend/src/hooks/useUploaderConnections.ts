import {ref, watchEffect, onUnmounted, onMounted, Ref} from 'vue'
import Peer, { DataConnection } from 'peerjs'
import {
  UploadedFile,
  UploaderConnection,
  UploaderConnectionStatus,
} from '../types'
import {getFileName} from "../fs";
import {
  ChunkMessage,
  decodeMessage,
  InfoMessage,
  MessageType,
  PasswordRequiredMessage
} from "../messages";
import { compressTextWithFflate } from "../utils/compress";

const MAX_CHUNK_SIZE = 512 * 1024 // 256 KB

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
    password: string
) {
  const connections = ref<UploaderConnection[]>([])

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
      let sendChunkTimeout = ref<NodeJS.Timeout | null>(null)
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
        // todo 优化结构通过索引而不是遍历
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
              handleStartTransfer(conn, message, updateConnection, sendChunkTimeout)
              break
            // 暂停传输
            case MessageType.Pause:
              handlePause(updateConnection, sendChunkTimeout)
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
        sendChunkTimeout.value && clearTimeout(sendChunkTimeout.value)
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
  const handleStartTransfer = (conn: DataConnection, message: { fileName: string; offset: number }, update: (updater: (c: UploaderConnection) => UploaderConnection) => void, timeoutRef: { value: NodeJS.Timeout | null }) => {
    // 验证文件和偏移量
    const file = validateOffset(files, message.fileName, message.offset);
    let offset = message.offset;
    // 定义发送下一块的函数 , 递归调用，创建新的定时器
    const sendChunk = async () => {
      // 计算块的大小和结束位置
      const end = Math.min(file.size, offset + MAX_CHUNK_SIZE);
      const chunkSize = end - offset
      const final = chunkSize < MAX_CHUNK_SIZE
      const chunk = await file.slice(offset, end).arrayBuffer();
      const compressedChunk = await compressTextWithFflate(new Uint8Array(chunk));

      conn.send({
        type: MessageType.Chunk,
        fileName: message.fileName,
        offset,
        bytes: compressedChunk,
        final,
      } as ChunkMessage);
      if (final) {
        // 文件传输完成
        update((c:UploaderConnection) => ({
              ...c,
              status: UploaderConnectionStatus.Ready,
              completedFiles: c.completedFiles + 1,
              currentFileProgress: 0,
            })
        );
      }else {
        offset = end
        update((c: UploaderConnection) => ({
          ...c,
          uploadingOffset: offset,
          currentFileProgress: offset / file.size,
        }))
        scheduleNextChunk()
      }
    };

    const scheduleNextChunk = () => {
      timeoutRef.value = setTimeout(sendChunk, 0);
    };
    //更新连接状态
    update((c) => ({
      ...c,
      status: UploaderConnectionStatus.Uploading,
      uploadingFileName: message.fileName,
      uploadingOffset: offset,
      currentFileProgress: offset / file.size,
    }));

    scheduleNextChunk();
  };

  const handlePause = (update: Function, timeoutRef: { value: NodeJS.Timeout | null }) => {
    timeoutRef.value && clearTimeout(timeoutRef.value)
    update((c: UploaderConnection) => ({
      ...c,
      status: UploaderConnectionStatus.Paused
    }))
  }

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

  onUnmounted(stop)
  return connections
}
