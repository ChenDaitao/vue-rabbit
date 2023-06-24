/*
 * @Date: 2023-06-23 11:37:01
 * @LastEditTime: 2023-06-24 20:35:36
 * @Description:分类相关接口
 */
import Api from '../index'
import type { categoryData, subGoods, subCategoryList } from './type'

interface subCategoryGoods {
  categoryId: string
  page: number
  pageSize: number
  sortField: string
}
class categoryApi extends Api {
  /* 获取分类数据 */
  getCategoryList(id: string) {
    return this.get<categoryData>(`${this.baseUrl}/category`, { id })
  }
  /* 二级分类列表数据 */
  getSubCategoryList(id: string) {
    return this.get<subCategoryList>(`${this.baseUrl}/category/sub/filter`, { id })
  }
  /* 获取二级商品列表 */
  getSubCategoryGoods(data: subCategoryGoods) {
    return this.post<subGoods>(`${this.baseUrl}/category/goods/temporary`, data)
  }
}

export default new categoryApi()
