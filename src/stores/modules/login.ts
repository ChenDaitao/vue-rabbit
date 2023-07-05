import { defineStore } from 'pinia'
import { ref } from 'vue'
import loginApi, { type loginData } from '@/api/server/login'
import type { userInfoObj } from '@/api/server/type'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'

const router = useRouter()
export const useUserStore = defineStore(
  'user',
  () => {
    // 1. 定义管理用户数据的state
    const userInfo = ref<userInfoObj | null>()
    // 2. 定义获取接口数据的action函数
    const getUserInfo = ({ account, password }: loginData) => {
      loginApi
        .loginIn({ account, password })
        .then(({ code, msg, result }) => {
          if (code == '1') {
            userInfo.value = result
            router.push('/')
            ElMessage({
              type: 'sucess',
              message: msg
            })
          } else
            ElMessage({
              type: 'error',
              message: msg
            })
        })
        .catch((err) => {
          ElMessage.error(err)
        })
    }
    const getInfoClear = () => {
      userInfo.value = null
    }
    // 3. 以对象的格式把state和action return
    return {
      getUserInfo,
      userInfo,
      getInfoClear
    }
  }
  // {
  //   persist: true
  // }
)
