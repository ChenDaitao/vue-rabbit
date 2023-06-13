/*
 * @Date: 2023-06-13 22:47:24
 * @LastEditTime: 2023-06-13 23:00:10
 * @Description: 图片懒加载
 */
import { useIntersectionObserver } from '@vueuse/core'
import type { App } from 'vue'

export const lazyPlugin = {
  install(app: App) {
    app.directive('img-lazy', {
      mounted(el, binding) {
        // el: 指令绑定的元素 img
        // binding: binding.value  指令等于号后面绑定的表达式的值  图片url
        const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
          if (isIntersecting) {
            // 进入视口区域
            el.src = binding.value
            stop()
          }
        })
      }
    })
  }
}
