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
