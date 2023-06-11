import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
//按需引入ElementPlus
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass'
        })
      ] //1.通知ElementPlus使用 sass编写样式
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)) //实际设置项目内别名
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 2.自动导入样式文件     可进行样式覆盖 实现主题色定制
        additionalData: `@use "@/assets/style/element/index.scss" as *;
        @use "@/assets/style/var.scss" as *;
        `
      }
    }
  },
  server: {
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, '')
        //  (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
