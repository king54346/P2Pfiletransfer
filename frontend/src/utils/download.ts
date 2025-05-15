import { createZipStream } from '../zip-stream'
import "web-streams-polyfill/polyfill";
// 尝试整体导入
import streamSaver from 'streamsaver';
streamSaver.mitm = `${window.location.protocol}//${window.location.host}/stream.html`;

// if (typeof window !== 'undefined') {
//   // 立即执行的异步函数
//   (async () => {
//     try {
//       // 动态导入 web-streams-polyfill
//       // require('web-streams-polyfill/polyfill');
//
//       // 动态导入 StreamSaver
//       streamSaver = await .then(module => module.default || module);
//
//       // 设置 MITM URL（如果需要）
//       // if (streamSaver) {
//       //   streamSaver.mitm = `${window.location.protocol}//${window.location.host}/stream.html`;
//       // }
//     } catch (error) {
//       console.error('Error loading modules:', error);
//     }
//   })();
// }

type DownloadFileStream = {
  name: string
  size: number
  stream: () => ReadableStream<Uint8Array>
}

export async function streamDownloadSingleFile(
  file: DownloadFileStream,
  filename: string,
): Promise<void> {

  if (!streamSaver) {
    throw new Error('StreamSaver is not available in this environment');
  }

  // 创建文件写入流
  const fileStream = streamSaver.createWriteStream(filename, {
    size: file.size,
  })
  try {
    // 获取写入器和读取器
    const writer = fileStream.getWriter();
    const reader = file.stream().getReader();

    // 通过 reader.read() 逐步读取数据块
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      await writer.write(value);
    }

    await writer.close();
  } catch (error) {
    console.error('下载文件时发生错误:', error);
    throw error;
  }
}

export async function streamDownloadMultipleFiles(
  files: Array<DownloadFileStream>,
  filename: string,
): Promise<void> {

  if (!streamSaver) {
    throw new Error('StreamSaver is not available in this environment');
  }

  const totalSize = files.reduce((acc, file) => acc + file.size, 0)
  //  创建文件写入流
  const fileStream = streamSaver.createWriteStream(filename, {
    size: totalSize,
  })
  // 创建 ZIP 文件流
  const readableZipStream = createZipStream({
    start(ctrl) {
      // 在流开始时，将 files 中的每个文件加入到 ZIP 流中
      for (const file of files) {
        ctrl.enqueue(file as unknown as ArrayBufferView);
      }
      ctrl.close()
    },
    async pull(_ctrl) {
      // Gets executed everytime zip-stream asks for more data
    },
  })
  try {
    // 将 ZIP 流写入文件流
    return await readableZipStream.pipeTo(fileStream);
  } catch (error) {
    console.error('下载多个文件时发生错误:', error);
    throw error;
  }
}
