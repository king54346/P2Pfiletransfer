3种方式编译wasm
1. wasm-pack
    1. 使用 wasm-pack new 命令生成一个新的项目。
    2. 在项目目录中执行 wasm-pack build 进行编译。
    3. 使用generate命令生成项目
    附带了wee_alloc，带预压缩的1kb的wasm分配器
    带有一个panic的hook，可以在浏览器中调试rust的panic
2. wasm-bindgen-cli
    wasm-bindgen 是一个工具集，帮助你将 Rust 生成的 Wasm 文件与 JavaScript 进行绑定
    1. cargo build --target wasm32-unknown-unknown
    2. 使用wasm-bindgen生成js文件 wasm-bindgen target/wasm32-unknown-unknown/debug/hello_world.wasm --out-dir ./pkg
    3. 直接使用npm run serve，webpack中的插件会自动调用wasm-pack build
3. napi-rs
   napi-rs 是一个用于在 Node.js 环境中构建原生插件的框架，它支持将 Rust 编译为 Node.js 原生模块。
   设置 napi-rs 项目，通常需要在 Cargo.toml 中配置 napi 相关依赖。
   使用 cargo napi build 进行编译，生成适用于 Node.js 的模块






直接使用 <a> 标签的方式的缺点：无法实现鉴权，动态生成，受同源策略影响
使用 a 标签的前提条件
1.接口GET 访问
2.同源或已正确配置 CORS
3.Content-Disposition: attachment; filename=xxx.xlsx

一、为什么不能直接通过JavaScript直接下载文件？
    1. 浏览器安全策略限制
        现代浏览器遵循"同源策略"和沙箱机制，禁止网页脚本直接操作本地文件系统。这是为了防止恶意网站静默下载文件到用户设备。
    2.必须通过用户主动触发
        文件下载必须由用户主动行为触发（如点击按钮/链接），这是为了确保用户明确知晓文件下载行为。
二、Mime文件的展示形式：
   A[接收响应头] --> B{MIME类型是否可展示?}
   B -->|是| C[检查Content-Disposition]
   B -->|否| D[直接触发下载]
   C --> E{存在attachment指令?}
   E -->|是|作为附件下载，而不是直接预览
   E -->|否| F[尝试渲染内容]
   F --> G[内容嗅探结果是否危险?]
   G -->|是| H[终止渲染并下载]
   G -->|否| I[正常展示内容]

Content-Type 不影响的内容，只会影响浏览器渲染方式

使用场景： 
    如果只是下载服务器上可公开访问的静态文件，直接用 <a> 即可
    如果需要前端生成内容、携带鉴权、处理二进制流或 POST 请求等使用以下方式
1.内存中Blob 生成临时 URL，创建隐藏的 <a> 标签模拟点击下载
2.File System Access API：最现代，但并非所有浏览器都支持 Chrome/Edge
3.FileSaver.js
4.StreamSaver.js
    serive worker 需要https或者localhost才能加载
    判断浏览器环境是否支持 ServiceWorker，如果不支持，会降级成非流式保存文件方式1，通过iframe/popup(window.open，isSecureContext 判断)打开中间页面，中间页面去创建sw
    中间页面，注册sw和保持sw活跃和传递downloadurl和transferable

	原理： 
		1. StreamSaver.js 会注册并启动一个 Service Worker(通过隐藏 iframe/popup（https下使用iframe，http下使用popup）启动一个中间页面)
		2. 绑定 MessageChannel（（不同上下文如主线程、Web Worker、iframe 等传递消息）  port1指代浏览器端的  port2 指代 iframe/popup 打开的 mitm.html（用于主页面和 ServiceWorker 之间的通信)通过messgechannel 先发送readable流给中间页面

		3.  iframe/popup( 前端通过 onReady 函数接收到消息后，标记 popup.loaded = true 并触发 load 事件)加载完毕后，前端把message(随机pathname,headers,supportsTransferable(是否支持转换流))发送到 iframe/popup, iframe/popup 合并之前的两个message再发送message+port2(打通sw和前端的消息传输,不再需要通过中间页面)+readable+生成的downloadUrl(self.registration.scope (http://localhost:3000)+origin移除协议部分+ Math.random() + '/' + 文件名 例如:http://localhost:3000/localhost:3000/294675/%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C%E4%B8%8E%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0%20%28%E9%82%B1%E9%94%A1%E9%B9%8F%29%20.pdf)) 到 ServiceWorker

        4. sw.js 收到message事件后：保存downloadUrl(由中间页面生成)和ReadableStream, 向 port1(StreamSaver.js) 发送message事件，参数是downloadUrl

        5.  StreamSaver接收downloadurl绑定iframe/pop，iframe/pop设置url就会自动触发请求,拦截url请求响应readableStream流触发下载。StreamSaver和前端通过messagechannel传输数据，并放入到响应的readableStream流中。




