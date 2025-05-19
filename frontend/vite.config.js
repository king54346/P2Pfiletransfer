import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from "unplugin-vue-components/resolvers";
import wasm from "vite-plugin-wasm";
import topLevelAwait from 'vite-plugin-top-level-await'; // 可能需要此插件处理顶层await
export default defineConfig({
  plugins: [
      vue(),
      wasm(),
      topLevelAwait(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
  ],
    worker: {
        format: 'es',
        plugins: [
            wasm(),
            topLevelAwait()
        ]
    },
    // 确保 build 配置正确
    build: {
        target: 'esnext', // 支持顶级 await
        // 如果是 worker 相关，可能需要下面的配置
        worker: {
            format: 'es' // 确保 worker 使用 ES 模块格式
        }
    }
})
