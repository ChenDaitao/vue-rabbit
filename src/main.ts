import '@/assets/style/common.scss' //初始化样式

import 'element-plus/dist/index.css' //elementPlus 按需引入 使用组件式APi需要手动引入样式

import { createApp } from 'vue'
import { store } from '@/stores/index'
import App from './App.vue'
import router from './router'
import { lazyPlugin } from '@/directives/lazy-image'
import { componentPlugin } from '@/components/index'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate' // 导入 Pinia 持久化插件

store.use(piniaPluginPersistedstate) // pinia 激活持久化插件

const app = createApp(App)

app.use(store)
app.use(router)

app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')
