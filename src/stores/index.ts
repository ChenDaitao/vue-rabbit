/*
 * @Date: 2023-06-12 22:17:47
 * @LastEditTime: 2023-06-12 22:40:22
 * @Description: 注册pinia
 */
import { createPinia } from 'pinia'
// import type { App } from 'vue'

const store = createPinia()

// export function setupStore(app: App<Element>) {
//   app.use(store)
// }

export { store }
