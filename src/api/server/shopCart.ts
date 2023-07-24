import Api from '../index'
import type { orderInfo, orderPayBack } from './type'

export interface insertShopCart {
  skuId: string
  count: number
}

interface orderPay {
  deliveryTimeType: number
  payType: number
  payChannel: number
  buyerMessage: string
  goods: insertShopCart[]
  addressId: string
}
type deleteShopCart = Array<string>

interface GuessLike {
  limit: number
}

interface MyOrderParmas {
  orderState: number
  page: number
  pageSize: number
}

class shopCartApi extends Api {
  /* 商品加入购物车 */
  insertShopCart(data: insertShopCart) {
    return this.post(`${this.baseUrl}/member/cart`, data)
  }
  /* 删除购物车 */
  deleteShopCart(data: deleteShopCart) {
    return this.delete(`${this.baseUrl}/member/cart`, data)
  }
  /* 获取订单结算信息 */
  getCheckoutInfo() {
    return this.get<orderInfo>(`${this.baseUrl}/member/order/pre`)
  }
  /* 创建订单 */
  getOrderCreate(data: orderPay) {
    return this.post<orderPayBack>('${this.baseUrl}/member/order', data)
  }
  /* 创建订单 */
  getPayInfo(id: string) {
    return this.get(`${this.baseUrl}/member/order/${id}`)
  }
  /* 猜你喜欢 */
  guessLike(data: GuessLike) {
    return this.post<orderPayBack>(`${this.baseUrl}/goods/relevant`, data)
  }
  /* 获取我的订单 */
  getMyOrder(data: MyOrderParmas) {
    return this.get(`${this.baseUrl}/member/order`, data)
  }
}

export default new shopCartApi()
