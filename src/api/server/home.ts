import Api from '../index'
import type { bannerList, newGoodList, hotList, productList } from './type'

interface bannerParam {
  distributionSite?: string //  1首页  2分类
}

class homeApi extends Api {
  /* 轮播图获取 */
  getBanner(data: bannerParam) {
    return this.get<bannerList>(`${this.baseUrl}/home/banner`, data)
  }
  /* 新鲜好物获取 */
  getNewGoods() {
    return this.get<newGoodList>(`${this.baseUrl}/home/new`)
  }
  /* 人气推荐 */
  getHotList() {
    return this.get<hotList>(`${this.baseUrl}/home/hot`)
  }
  /* 产品列表 */
  getProductList() {
    return this.get<productList>(`${this.baseUrl}/home/goods`)
  }
}

export default new homeApi()
