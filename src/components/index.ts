/*
 * @Date: 2023-06-26 22:37:46
 * @LastEditTime: 2023-06-26 22:42:44
 * @Description: 全局组件注册
 */
import SKU from '@/components/XtxSku/index.vue'
import imagePreview from '@/views/detail/components/imagePreview.vue'

import type { App } from 'vue/dist/vue.js'

export const componentPlugin = {
  install(app: App) {
    app.component('XtxSku', SKU)
    app.component('imagePreview', imagePreview)
  }
}
