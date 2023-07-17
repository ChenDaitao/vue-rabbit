import Api from '../index'

interface insertShopCart {
  skuId: string
  count: number
}

type deleteShopCart = Array<string>

class shopCartApi extends Api {
  /* 商品加入购物车 */
  insertShopCart(data: insertShopCart) {
    return this.post(`${this.baseUrl}/member/cart`, data)
  }
  /* 删除购物车 */
  deleteShopCart(data: deleteShopCart) {
    return this.delete(`${this.baseUrl}/member/cart`, data)
  }
}

export default new shopCartApi()
