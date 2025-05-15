import {ref, watchEffect, computed, onUnmounted} from 'vue'
import {decodeMessage, Message, MessageType, ChunkMessage} from '../messages'
// 使用条件导入:
import {
    streamDownloadSingleFile,
    streamDownloadMultipleFiles
} from '../utils/downloadManager'
import {decompressDataWithFflate} from '../utils/compress'

import {DataConnection} from "peerjs";
import {useWebRTCPeer} from "../components/useWebRTC";
import devices from 'vue3-device-detector'
import {FileInfo} from "../types";

const cleanErrorMessage = (errorMessage: string): string =>
    errorMessage.startsWith('Could not connect to peer')
        ? 'Could not connect to the uploader. Did they close their browser?'
        : errorMessage

const getZipFilename = (): string => `download-${Date.now()}.zip`


export function useDownloader(uploaderPeerID: string) {
    const { peer } = useWebRTCPeer()

    // Reactive states
    const dataConnection = ref<DataConnection | null>(null)
    const filesInfo = ref<Array<FileInfo> | null>(null)
    const isConnected = ref(false)
    const isPasswordRequired = ref(false)
    // 是否正在下载
    const isDownloading = ref(false)
    //  是否下载完成
    const isDone = ref(false)
    //  下载完成的字节数
    const bytesDownloaded = ref(0)
    const errorMessage = ref<string | null>(null)

    // 文件处理相关
    const fileStreams = new Map<string, ReadableStreamDefaultController<Uint8Array>>()

    // Computed
    const totalSize = computed(() =>
        filesInfo.value?.reduce((acc, info) => acc + info.size, 0) ?? 0
    )

    // 处理接收到的文件块
    const handleFileChunk = async (message: ChunkMessage) => {
        const controller = fileStreams.get(message.fileName)
        if (!controller) {
            console.error(`[Downloader] No stream controller found for file: ${message.fileName}`)
            return false
        }

        try {
            // 解压数据
            const uint8Array = new Uint8Array(message.bytes as ArrayBuffer)
            const decompressedData = await decompressDataWithFflate(uint8Array)

            // 更新下载进度
            bytesDownloaded.value += decompressedData.byteLength

            // 将解压后的数据添加到流中
            controller.enqueue(decompressedData)

            // 如果是文件的最后一块，关闭流并请求下一个文件
            if (message.final) {
                controller.close()
                requestNextFile()
                console.log(`[Downloader] File completed: ${message.fileName}`)
            }

            return true
        } catch (err) {
            console.error(`[Downloader] Error processing chunk for ${message.fileName}:`, err)
            errorMessage.value = `处理文件块时出错: ${err.message || '未知错误'}`
            return false
        }
    }

    // 处理接收到的消息
    const handleMessage = (data: unknown) => {
        try {
            const message = decodeMessage(data)
            console.log('[Downloader] received message', message.type)

            switch (message.type) {
                case MessageType.PasswordRequired:
                    isPasswordRequired.value = true
                    // 密码通过了才会发送文件信息
                    if (message.errorMessage) errorMessage.value = message.errorMessage
                    break

                case MessageType.Info:
                    filesInfo.value = message.files
                    isPasswordRequired.value = false
                    break

                case MessageType.Chunk:
                    handleFileChunk(message)
                        .then(success => {
                            if (!success) {
                                console.error('[Downloader] Failed to process chunk')
                            }
                        })
                    break

                case MessageType.Error:
                    console.error('[Downloader] Server error:', message.error)
                    errorMessage.value = message.error
                    closeConnection()
                    break

                case MessageType.Report:
                    window.location.href = '/reported'
                    break

                default:
                    console.warn('[Downloader] Unknown message type:', message.type)
            }
        } catch (err) {
            console.error('[Downloader] Error handling message:', err)
            errorMessage.value = `消息处理错误: ${err.message || '未知错误'}`
        }
    }

    // 建立连接
    const setupConnection = () => {
        if (!peer) return

        const conn = peer.connect(uploaderPeerID, { reliable: true })
        dataConnection.value = conn

        // 处理连接打开事件
        const handleOpen = () => {
            console.log('[Downloader] Connection opened')
            isConnected.value = true
            sendDeviceInfo(conn)
        }

        // 发送设备信息
        const sendDeviceInfo = (connection: DataConnection) => {
            const detector = devices()
            connection.send({
                type: MessageType.RequestInfo,
                browserName: detector.browser_name,
                browserVersion: detector.browser_version,
                osName: detector.os_name,
                osVersion: detector.os_version,
                mobileVendor: detector.brand,
                mobileModel: detector.model
            })
        }

        // 清理状态
        const cleanup = () => {
            isConnected.value = false
            isDownloading.value = false
        }

        // 处理连接关闭事件
        const handleClose = () => {
            console.log('[Downloader] Connection closed')
            cleanup()
        }

        // 处理错误事件
        const handleError = (err: Error) => {
            console.error('[Downloader] Connection error:', err)
            errorMessage.value = cleanErrorMessage(err.message)
            conn.open ? conn.close() : cleanup()
        }

        // 添加事件监听器
        conn.on('open', handleOpen)
        conn.on('data', handleMessage)
        conn.on('error', handleError)
        conn.on('close', handleClose)
        peer.on('error', handleError)

        // 组件卸载时移除事件监听器
        onUnmounted(() => {
            conn.off('open', handleOpen)
            conn.off('data', handleMessage)
            conn.off('error', handleError)
            conn.off('close', handleClose)
            peer?.off('error', handleError)
            conn.close()
        })
    }

    // 监听conn变化，重新建立连接
    watchEffect((onCleanup) => {
        // 设置连接
        setupConnection()
        // 下次回调执行前被调用，关闭旧的连接
        onCleanup(() => closeConnection())
    })

    // 关闭连接
    const closeConnection = () => {
        if (dataConnection.value) {
            dataConnection.value.close()
            dataConnection.value = null
        }
    }

    // 提交密码
    const submitPassword = (pass: string) => {
        if (!dataConnection.value) return

        dataConnection.value.send({
            type: MessageType.UsePassword,
            password: pass
        })

        // 清除之前的错误消息
        errorMessage.value = null
    }

    // 文件下载相关变量
    let nextFileIndex = 0

    // 请求下载下一个文件
    const requestNextFile = () => {
        if (!filesInfo.value || !dataConnection.value || nextFileIndex >= filesInfo.value.length) {
            if (filesInfo.value && nextFileIndex >= filesInfo.value.length) {
                // 所有文件都已经请求完成
                isDone.value = true
                dataConnection.value?.send({ type: MessageType.Done })
            }
            return
        }

        // 发送请求下载下一个文件的消息
        dataConnection.value.send({
            type: MessageType.Start,
            fileName: filesInfo.value[nextFileIndex].name,
            offset: 0
        })

        nextFileIndex++
    }

    // 开始下载
    const startDownload = () => {
        if (!filesInfo.value || !dataConnection.value) {
            console.error('[Downloader] Cannot start download: missing file info or connection')
            return
        }
        // 为每个fileinfo 创建一个流
        // 然后接收chunk数据
        // 放入到对应流中(建立文件名和流的映射)，遍历文件的时候去取对应的流
        isDownloading.value = true
        bytesDownloaded.value = 0
        nextFileIndex = 0
        fileStreams.clear()

        // 为每个文件创建一个流
        const downloads = filesInfo.value.map(info => {
            // 标准化文件名
            const normalizedName = info.name.replace(/^\//, '')

            // 创建流
            const stream = new ReadableStream<Uint8Array>({
                start(controller) {
                    fileStreams.set(info.name, controller)
                }
            })

            return {
                name: normalizedName,
                size: info.size,
                stream: () => stream
            }
        })

        // 根据文件数量选择下载方法
        const downloadPromise = downloads.length > 1
            ? streamDownloadMultipleFiles(downloads, getZipFilename())
            : streamDownloadSingleFile(downloads[0], downloads[0].name)

        // 下载完成或出错的处理
        downloadPromise
            .then(() => {
                console.log('[Downloader] Download completed successfully')
            })
            .catch(err => {
                console.error('[Downloader] Download error:', err)
                errorMessage.value = `下载错误: ${err.message || '未知错误'}`
            })

        // 开始请求第一个文件
        requestNextFile()
    }

    // 停止下载
    const stopDownload = () => {
        if (dataConnection.value) {
            dataConnection.value.send({ type: MessageType.Pause })
            closeConnection()
        }

        // 清理所有文件流
        for (const controller of fileStreams.values()) {
            try {
                controller.close()
            } catch (err) {
                console.error('[Downloader] Error closing stream:', err)
            }
        }
        fileStreams.clear()

        // 重置状态
        isDownloading.value = false
        isDone.value = false
        bytesDownloaded.value = 0
        errorMessage.value = null
    }

    return {
        filesInfo,
        isConnected,
        isPasswordRequired,
        isDownloading,
        isDone,
        errorMessage,
        submitPassword,
        startDownload,
        stopDownload,
        totalSize,
        bytesDownloaded
    }
}
