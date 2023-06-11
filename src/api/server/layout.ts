import Api from '../index'
import type { categoryList } from './type'

class layoutApi extends Api {
  getCategoryList() {
    return this.get<categoryList>(`${this.baseUrl}/home/category/head`)
  }
}

export default new layoutApi()
