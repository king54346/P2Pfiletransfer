import {deflate,inflate} from 'fflate';
/**
 * 使用fflate压缩文本
 * @param {Uint8Array} data - 需要压缩的文本
 * @returns {Promise<Uint8Array>} - 压缩后的数据
 */
export function compressTextWithFflate(data) {
    return new Promise((resolve, reject) => {
        try {
            // 首先需要导入fflate
            // 假设已通过npm安装: npm install fflate
            // const { deflate } = require('fflate');

            // 使用fflate的deflate方法压缩数据
            // 第二个参数是配置对象，可以设置压缩级别等
            deflate(data, { level: 9 }, (err, compressedData) => {
                if (err) {
                    reject(new Error(`压缩失败: ${err.message}`));
                } else {
                    resolve(compressedData);
                }
            });
        } catch (error) {
            reject(new Error(`压缩失败: ${error.message}`));
        }
    });
}

/**
 * 使用fflate解压缩数据
 * @param {Uint8Array} compressedData - 压缩后的数据
 * @returns {Promise<Uint8Array>} - 解压缩后的文本
 */
export function decompressDataWithFflate(compressedData) {
    return new Promise((resolve, reject) => {
        try {
            // const { inflate } = require('fflate');

            // 解压缩数据
            inflate(compressedData, (err, decompressedData) => {
                if (err) {
                    reject(new Error(`解压缩失败: ${err.message}`));
                } else {
                    resolve(decompressedData);
                }
            });
        } catch (error) {
            reject(new Error(`解压缩失败: ${error.message}`));
        }
    });
}

// // 使用示例
// const text = "这是一段需要压缩的文本2222222222222222222222222222222222222222222222222222内容，可能很长...";
//
// compressTextWithFflate(text)
//     .then(compressed => {
//         console.log("压缩前大小:", new TextEncoder().encode(text).length);
//         console.log("压缩后大小:", compressed.length);
//
//         return decompressDataWithFflate(compressed);
//     })
//     .then(decompressed => {
//         console.log("解压后文本:", decompressed);
//         console.log("解压后文本与原文本相同:", text === decompressed);
//     })
//     .catch(error => {
//         console.error("处理过程中出错:", error);
//     });