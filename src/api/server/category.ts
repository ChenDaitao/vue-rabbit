/*
 * @Date: 2023-06-23 11:37:01
 * @LastEditTime: 2023-06-23 11:57:23
 * @Description:分类相关接口
 */
import Api from '../index'
import type { categoryData } from './type'

class categoryApi extends Api {
  /* 获取分类数据 */
  getCategoryList(id: number) {
    return this.get<categoryData>(`${this.baseUrl}/category`, { id })
  }
}

export default new categoryApi()
