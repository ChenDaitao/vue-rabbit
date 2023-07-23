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
    return this.post<orderPayBack>('/member/order', data)
  }
}

export default new shopCartApi()
