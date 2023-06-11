/// <reference types="vite/client" />

// 导入声明：所有vue文件导入需要加.vue后缀
declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const vueComponent: DefineComponent<{}, {}, any>

  export default vueComponent
}
