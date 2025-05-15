import { createZipStream } from '../zip-stream';


// 仅支持 chrome 和 edge
/**
 * 表示可下载的文件流及其元数据
 */
type DownloadFileStream = {
  name: string                               // 文件名
  size: number                               // 文件大小
  stream: () => ReadableStream<Uint8Array>   // 返回文件内容可读流的函数
}

/**
 * 下载单个文件流到用户文件系统
 * @param file 文件流对象
 * @param filename 建议的文件名
 * @returns Promise，表示下载操作的完成
 */
export async function streamDownloadSingleFile(
    file: DownloadFileStream,
    filename: string,
): Promise<void> {
  try {
    // 确定文件类型，基于文件名推断
    const fileType = getMimeType(file.name) || 'application/octet-stream';

    // 获取文件扩展名
    const fileExt = getFileExtension(file.name) || getFileExtension(filename) || '';

    // 通过文件选择器API获取文件保存句柄
    const fileHandle = await window.showSaveFilePicker({
      suggestedName: filename,
      types: [
        {
          description: 'File',
          accept: {
            [fileType]: [fileExt ? `.${fileExt}` : '']
          }
        },
      ],
    });

    // 创建可写流
    const writable = await fileHandle.createWritable({
      keepExistingData: false // 覆盖任何现有文件
    });

    // 获取流并将其传输到文件
    const stream = file.stream();
    await stream.pipeTo(writable);

    console.log(`文件 ${filename} 已成功保存`);
  } catch (error) {
    console.error('保存文件时出错:', error);
    throw new Error(`保存文件 ${filename} 失败: ${error.message}`);
  }
}

/**
 * 将多个文件流下载为ZIP文件
 * @param files 文件流对象数组
 * @param filename 建议的ZIP文件名
 * @returns Promise，表示下载操作的完成
 */
export async function streamDownloadMultipleFiles(
    files: Array<DownloadFileStream>,
    filename: string,
): Promise<void> {
  try {
    if (files.length === 0) {
      throw new Error('没有可下载的文件');
    }

    // 如果只有一个文件，直接下载它
    if (files.length === 1) {
      return streamDownloadSingleFile(files[0], filename);
    }

    // 确保文件名有.zip扩展名
    if (!filename.toLowerCase().endsWith('.zip')) {
      filename += '.zip';
    }

    // 获取文件保存句柄
    const fileHandle = await window.showSaveFilePicker({
      suggestedName: filename,
      types: [
        {
          description: 'ZIP Archive',
          accept: {
            'application/zip': ['.zip']
          }
        },
      ],
    });

    // 创建可写流
    const writable = await fileHandle.createWritable();

    // 使用导入的createZipStream函数创建ZIP流
    const zipStream = await createZipStream(files);

    // 将ZIP流写入文件
    await zipStream.pipeTo(writable);

    console.log(`ZIP文件 ${filename} 已成功保存`);
  } catch (error) {
    console.error('保存ZIP文件时出错:', error);
    throw new Error(`保存ZIP文件 ${filename} 失败: ${error.message}`);
  }
}

/**
 * 从文件名中获取扩展名（不含点）
 */
function getFileExtension(filename: string): string | null {
  if (!filename) return null;
  const match = filename.match(/\.([^.]+)$/);
  return match ? match[1].toLowerCase() : null;
}

/**
 * 根据文件名推断MIME类型
 */
function getMimeType(filename: string): string | null {
  const ext = getFileExtension(filename);
  if (!ext) return null;

  const mimeTypes: Record<string, string> = {
    'txt': 'text/plain',
    'html': 'text/html',
    'css': 'text/css',
    'js': 'text/javascript',
    'json': 'application/json',
    'pdf': 'application/pdf',
    'jpg': 'image/jpeg',
    'jpeg': 'image/jpeg',
    'png': 'image/png',
    'gif': 'image/gif',
    'svg': 'image/svg+xml',
    'mp3': 'audio/mpeg',
    'mp4': 'video/mp4',
    'zip': 'application/zip',
    'doc': 'application/msword',
    'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'xls': 'application/vnd.ms-excel',
    'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'ppt': 'application/vnd.ms-powerpoint',
    'pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
  };

  return mimeTypes[ext] || null;
}
