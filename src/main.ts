import '@/assets/style/common.scss' //初始化样式

import { createApp } from 'vue'
import { store } from '@/stores/index'
import App from './App.vue'
import router from './router'
import { lazyPlugin } from '@/directives/lazy-image'
import { componentPlugin } from '@/components/index'

const app = createApp(App)

app.use(store)
app.use(router)

app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')
