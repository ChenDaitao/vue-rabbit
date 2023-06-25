import Api from '../index'
import type { detailGoodsList, hotListAreaRes } from './type'

interface hotListArea {
  id: string
  type: number
  limit?: number
}
class detailApi extends Api {
  /* 商品详情 */
  getDetailGoodsList(id: string) {
    return this.get<detailGoodsList>(`${this.baseUrl}/goods`, { id })
  }
  /* 热榜区域 */
  getHotListArea(data: hotListArea) {
    return this.get<hotListAreaRes>(`${this.baseUrl}/goods/hot`, data)
  }
}

export default new detailApi()
