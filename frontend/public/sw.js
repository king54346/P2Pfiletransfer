// https://github.com/jimmywarting/StreamSaver.js/blob/master/sw.js

/* global self ReadableStream Response */

// 在 Service Worker 安装阶段触发
self.addEventListener('install', () => {
  // 立刻激活
  self.skipWaiting()
})
// 在 Service Worker 激活阶段触发，通常在安装成功后
self.addEventListener('activate', (event) => {
  // 立即让它取得对所有客户端的控制权，不需要刷新
  event.waitUntil(self.clients.claim())
})

const map = new Map()


// 接收来自中间页面的消息,至此打通和前端的消息传输
self.onmessage = (event) => {

  if (event.data === 'ping') {
    return
  }
  console.log('Received event: ', event.data)
  const data = event.data
  const downloadUrl =
    data.url ||
    self.registration.scope +
      Math.random() +
      '/' +
      (typeof data === 'string' ? data : data.filename)
  console.log('registration' + self.registration.scope)
  const port = event.ports[0]
  // 数据结构 [stream, data, port]
  const metadata = new Array(3)

  metadata[1] = data
  metadata[2] = port

  // Note to self:
  // old streamsaver v1.2.0 might still use `readableStream`...
  // but v2.0.0 will always transfer the stream throught MessageChannel #94
  if (event.data.readableStream) {
    metadata[0] = event.data.readableStream
  } else if (event.data.transferringReadable) {
    port.onmessage = (evt) => {
      port.onmessage = null
      metadata[0] = evt.data.readableStream
    }
  } else {
    metadata[0] = createStream(port)
  }

  map.set(downloadUrl, metadata)
  // 将downloadUrl发送回前端.iframe/pop通过设置url触发请求,拦截url响应请求触发下载
  port.postMessage({ download: downloadUrl })
}

// 创建一个 ReadableStream，不断地从port1读取数据并放入流中
function createStream(port) {
  return new ReadableStream({
    start(controller) {
      // 当在消息通道上收到数据时进行处理
      port.onmessage = ({ data }) => {
        // 处理三种类型的消息
        // 关闭流，表示下载完成
        if (data === 'end') {
          return controller.close()
        }
        // 发送错误，中止下载
        if (data === 'abort') {
          controller.error('Aborted the download')
          return
        }

        controller.enqueue(data)
      }
    },
    // cancel 方法在用户中止下载时执行
    cancel() {
      console.log('user aborted')
    },
  })
}


// 拦截所有fetch请求包括ping请求和downloadUrl
self.onfetch = (event) => {
  const url = event.request.url

  // 我们每隔 x 秒发送一个心跳信号，以保持服务工作线程活跃
  if (url.endsWith('/ping')) {
    return event.respondWith(new Response('pong'))
  }
  // 通过 map 对象查找是否有预定义的拦截处理
  const hijacke = map.get(url)

  if (!hijacke) return null
  // 如果找到拦截处理，从中提取流、数据和通信端口
  const [stream, data, port] = hijacke

  map.delete(url)

  // 不希望让任何用户控制所有的头部信息
  // 因此我们只复制长度和内容处置（Content-Disposition）
  // 创建安全的响应头，防止 XSS 和其他安全问题
  const responseHeaders = new Headers({
    'Content-Type': 'application/octet-stream; charset=utf-8',

    // To be on the safe side, The link can be opened in a iframe.
    // but octet-stream should stop it.
    'Content-Security-Policy': "default-src 'none'",
    'X-Content-Security-Policy': "default-src 'none'",
    'X-WebKit-CSP': "default-src 'none'",
    'X-XSS-Protection': '1; mode=block',
  })
  // 从原始请求复制头部信息
  let headers = new Headers(data.headers || {})

  if (headers.has('Content-Length')) {
    responseHeaders.set('Content-Length', headers.get('Content-Length'))
  }

  if (headers.has('Content-Disposition')) {
    responseHeaders.set(
      'Content-Disposition',
      headers.get('Content-Disposition'),
    )
  }

  // data, data.filename and size should not be used anymore
  if (data.size) {
    console.warn('Depricated')
    responseHeaders.set('Content-Length', data.size)
  }

  let fileName = typeof data === 'string' ? data : data.filename
  if (fileName) {
    console.warn('Depricated')
    // 使文件名符合 RFC5987
    fileName = encodeURIComponent(fileName)
      .replace(/['()]/g, escape)
      .replace(/\*/g, '%2A')
    responseHeaders.set(
      'Content-Disposition',
      "attachment; filename*=UTF-8''" + fileName,
    )
  }
  // 用自定义流和头部响应请求,让前端收到流开始下载
  event.respondWith(new Response(stream, { headers: responseHeaders }))
  // 通知下载已开始
  port.postMessage({ debug: 'Download started' })
}
