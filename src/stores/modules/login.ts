import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { userInfoObj } from '@/api/server/type'

export const useUserStore = defineStore(
  'user',
  () => {
    // 1. 定义管理用户数据的state
    const userInfo = ref<userInfoObj | null>()

    const getInfoClear = () => {
      userInfo.value = null
    }
    // 3. 以对象的格式把state和action return
    return {
      userInfo,
      getInfoClear
    }
  },
  {
    persist: true //pinia 持久化插件--piniaPluginPersistedstate
  }
)
