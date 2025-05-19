import * as Comlink from 'comlink';
import {CompressionAlgorithm,compress} from "../../pkg";

// 常量
const MAX_CHUNK_SIZE = 1024 * 1024; // 64KB

// Worker API
const fileTransferWorker = {
    // 存储当前文件状态
    currentFile: null,
    fileName: '',
    currentOffset: 0,
    algorithm: CompressionAlgorithm.Gzip,
    isProcessing: false,
    isPaused: false, // 新增：暂停状态标志
    // 初始化传输
    initTransfer(file: File, fileName: string, offset: number, algorithm: CompressionAlgorithm) {
        this.currentFile = file;
        this.fileName = fileName;
        this.currentOffset = offset;
        this.algorithm = algorithm;
        console.log(`Worker: 初始化传输 ${fileName}，偏移量: ${offset}`);
        return { success: true };
    },

    // 处理下一个块
    async processNextChunk() {
        if (!this.currentFile || this.isProcessing) {
            return { success: false, error: '没有可用文件或已在处理中' };
        }
        // 检查暂停状态
        if (this.isPaused) {
            return { success: true, paused: true };
        }
        try {
            this.isProcessing = true;

            // 计算块的大小和结束位置
            const offset = this.currentOffset;
            const end = Math.min(this.currentFile.size, offset + MAX_CHUNK_SIZE);
            const chunkSize = end - offset;
            const final = chunkSize < MAX_CHUNK_SIZE || end >= this.currentFile.size;

            // 读取和压缩块
            const chunk = await this.currentFile.slice(offset, end).arrayBuffer();

            const compressedChunk = compress(new Uint8Array(chunk), this.algorithm);

            // 更新偏移量
            this.currentOffset = end;

            // 返回处理后的块数据
            const result = {
                success: true,
                fileName: this.fileName,
                offset,
                bytes: compressedChunk,
                final,
                newOffset: end,
                progress: end / this.currentFile.size
            };

            // 如果是最后一块，重置状态
            if (final) {
                this.resetState();
            }

            this.isProcessing = false;
            return result;
        } catch (error) {
            this.isProcessing = false;
            return {
                success: false,
                error: `处理块时出错: ${error.message}`
            };
        }
    },

    // 重置Worker状态
    resetState() {
        this.currentFile = null;
        this.fileName = '';
        this.currentOffset = 0;
        this.isProcessing = false;
        this.isPaused = false;  // 重置暂停状态
        console.log('Worker: 重置状态');
    },

    // 取消传输
    cancelTransfer() {
        this.resetState();
        return { success: true };
    },
    // 新增：恢复传输
    resumeTransfer() {
        if (!this.currentFile) {
            return { success: false, error: '没有活动的传输' };
        }

        this.isPaused = false;
        console.log(`Worker: 文件 ${this.fileName} 传输已恢复，从位置: ${this.currentOffset} 继续`);
        return {
            success: true,
            resumed: true,
            fileName: this.fileName,
            offset: this.currentOffset
        };
    },
    // 新增：暂停传输
    pauseTransfer() {
        if (!this.currentFile) {
            return { success: false, error: '没有活动的传输' };
        }

        this.isPaused = true;
        console.log(`Worker: 文件 ${this.fileName} 传输已暂停，当前位置: ${this.currentOffset}`);
        return {
            success: true,
            paused: true,
            fileName: this.fileName,
            offset: this.currentOffset
        };
    },
};

// 使用Comlink暴露Worker API
Comlink.expose(fileTransferWorker);