/*
 * @Date: 2023-06-11 15:08:35
 * @LastEditTime: 2023-06-28 21:13:51
 * @Description: axios基础封装
 */
import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import { useUserStore } from '@/stores/modules/login'
import { ElMessage } from 'element-plus'
import router from '@/router'
// 创建axios实例
const httpInstance: AxiosInstance = axios.create({
  // baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000 //设置超时时间
})

// 请求拦截
httpInstance.interceptors.request.use(
  (config /* : AxiosRequestConfig */) => {
    const userStore = useUserStore()
    const token = userStore.userInfo?.token
    if (token) {
      config.headers.Authorization = 'Bearer${token}'
    }
    return config
  },
  (e: AxiosError) => Promise.reject(e)
)

// 响应拦截
httpInstance.interceptors.response.use(
  (res: AxiosResponse) => res.data,
  (e: AxiosError) => {
    const { msg } = e.response?.data as any
    // 全局提示
    ElMessage({
      type: 'warning',
      message: msg
    })

    // 401 token失效
    if (e.response?.status === 401) {
      const userStore = useUserStore()
      userStore.getInfoClear()
      router.push('/login')
    }
    return Promise.reject(e)
  }
)

export default httpInstance
