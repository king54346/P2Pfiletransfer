// downloadManager.ts
import { ref, shallowRef } from 'vue'

// 定义接口确保两个模块导出相同的函数签名
interface DownloadFunctions {
    streamDownloadSingleFile: (file: any, fileName: string) => Promise<void>;
    streamDownloadMultipleFiles: (files: any[], zipName: string) => Promise<void>;
}

// 创建响应式引用存储导入的函数
const streamDownloadSingleFile = shallowRef<DownloadFunctions['streamDownloadSingleFile']>();
const streamDownloadMultipleFiles = shallowRef<DownloadFunctions['streamDownloadMultipleFiles']>();

// 初始化标志，避免重复导入
let initialized = false;

// 初始化函数，根据浏览器支持选择模块
const initializeDownloadFunctions = async () => {
    if (initialized) return;

    try {
        // 检查浏览器是否支持 showSaveFilePicker API
        const isFileSystemAccessSupported = 'showSaveFilePicker' in window;

        let module: DownloadFunctions;

        if (isFileSystemAccessSupported) {
            console.log('Using modern File System Access API (download2)');
            module = await import('../utils/download2');
        } else {
            console.log('Using fallback download method');
            module = await import('../utils/download');
        }

        // 分配导入的函数到响应式引用
        streamDownloadSingleFile.value = module.streamDownloadSingleFile;
        streamDownloadMultipleFiles.value = module.streamDownloadMultipleFiles;

        initialized = true;
    } catch (error) {
        console.error('Error initializing download functions:', error);
        // 出错时使用默认实现
        const fallbackModule = await import('../utils/download');
        streamDownloadSingleFile.value = fallbackModule.streamDownloadSingleFile;
        streamDownloadMultipleFiles.value = fallbackModule.streamDownloadMultipleFiles;
        initialized = true;
    }
};

// 立即初始化
initializeDownloadFunctions();

// 包装函数确保调用时函数已加载
const safeStreamDownloadSingleFile = async (...args: Parameters<DownloadFunctions['streamDownloadSingleFile']>) => {
    if (!initialized) {
        await initializeDownloadFunctions();
    }
    if (!streamDownloadSingleFile.value) {
        throw new Error('Download function not initialized');
    }
    return streamDownloadSingleFile.value(...args);
};

const safeStreamDownloadMultipleFiles = async (...args: Parameters<DownloadFunctions['streamDownloadMultipleFiles']>) => {
    if (!initialized) {
        await initializeDownloadFunctions();
    }
    if (!streamDownloadMultipleFiles.value) {
        throw new Error('Download function not initialized');
    }
    return streamDownloadMultipleFiles.value(...args);
};

// 导出包装后的函数
export {
    safeStreamDownloadSingleFile as streamDownloadSingleFile,
    safeStreamDownloadMultipleFiles as streamDownloadMultipleFiles
};