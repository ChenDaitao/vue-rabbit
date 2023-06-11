/*
 * @Date: 2023-06-11 15:08:35
 * @LastEditTime: 2023-06-11 15:15:19
 * @Description: axios基础封装
 */
import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

// 创建axios实例
const httpInstance: AxiosInstance = axios.create({
  // baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000 //设置超时时间
})

// 请求拦截
httpInstance.interceptors.request.use(
  (config /* : AxiosRequestConfig */) => {
    return config
  },
  (e: AxiosError) => Promise.reject(e)
)

// 响应拦截
httpInstance.interceptors.response.use(
  (res: AxiosResponse) => res.data,
  (e: AxiosError) => {
    return Promise.reject(e)
  }
)

export default httpInstance
