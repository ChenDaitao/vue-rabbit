/*
 * @Date: 2023-06-11 15:15:58
 * @LastEditTime: 2023-06-11 17:32:32
 * @Description: 基本请求
 */
import axios from '@/utils/http'
import type { AxiosRequestConfig } from 'axios'
import { randomString } from '@/hooks/randomString'

const baseURL = '/api' //便于proxy转发

type RequestParams = object | undefined

// 基本请求类
class Api {
  baseUrl: string
  constructor() {
    this.baseUrl = baseURL
  }

  get<T = any>(url: string, param?: RequestParams, config?: AxiosRequestConfig): Promise<T> {
    const _ts: string = randomString(8)
    const params = Object.assign({}, param, { _ts }) //保证请求的唯一性，可用于控制缓存
    const configs = Object.assign({}, config as object, { params })
    return axios.get(url, configs)
  }

  post<T = any>(
    url: string,
    params?: RequestParams | string,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const configs = { ...config }
    const hearderConfig = {
      headers: {
        'content-type': 'text/plain'
      }
    }
    return axios.post(url, params, config ? configs : hearderConfig)
  }

  delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return axios.delete(url, config)
  }

  put<T = any>(url: string, params?: RequestParams, config?: AxiosRequestConfig): Promise<T> {
    return axios.put(url, params, config)
  }
}

export default Api
