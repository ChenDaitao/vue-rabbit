/*
 * @Date: 2023-07-08 11:08:12
 * @LastEditTime: 2023-07-23 21:23:11
 * @Description: 购物车相关
 */
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import shopCartApi from '@/api/server/shopCart'
import { useUserStore } from './login'
import { ElMessage } from 'element-plus'

export interface shopCartGoods {
  id: string
  name: string
  picture: string
  price: number
  count: number
  skuId: string
  attrsText: string
  selected: boolean
}

export const useShopCartStore = defineStore('SHOP_CART', () => {
  const userStore = useUserStore()

  const cartList = ref<any>([]) //购物车商品列表
  const isLogin = computed(() => userStore.userInfo?.token)

  // 添加商品到购物车
  const addShopCart = async (goods: shopCartGoods) => {
    const { skuId, count } = goods
    if (isLogin.value) {
      await shopCartApi.insertShopCart({ skuId, count })
    } else {
      const item: shopCartGoods = cartList.value.find(
        (item: shopCartGoods) => goods.skuId === item.skuId
      )
      if (item) {
        item.count++
      } else cartList.value.push(goods)
    }
    ElMessage({
      type: 'success',
      message: '加入购物车成功'
    })
  }

  // 删除购物车
  const delCart = async (skuId: string) => {
    if (isLogin.value) {
      await shopCartApi.deleteShopCart([skuId])
    } else {
      const idIndex: number = cartList.value.findIndex(
        (item: shopCartGoods) => skuId === item.skuId
      )
      cartList.value.splice(idIndex, 1)
    }
  }

  // 购物车商品单选
  const singleCheck = (skuId: string, selected: boolean) => {
    const item: shopCartGoods = cartList.value.find((item: shopCartGoods) => skuId === item.skuId)
    item.selected = selected
  }

  // 购物车商品全选
  const checkAll = (select: boolean) => {
    cartList.value.forEach((item: shopCartGoods) => {
      item.selected = select
    })
  }

  // 全选
  const isCheckAll = computed(() => cartList.value.every((item: shopCartGoods) => item.selected))
  // 计算购物车商品总数
  const allCount = computed(() => {
    return cartList.value.reduce((pre: number, item: shopCartGoods) => pre + item.count, 0)
  })
  // 计算购物车商品总价
  const allPrice = computed(() => {
    return cartList.value.reduce(
      (pre: number, item: shopCartGoods) => pre + item.count * Number(item.price),
      0
    )
  })
  // 已选择商品数量
  const selectGoods = computed(() =>
    cartList.value
      .filter((item: shopCartGoods) => item.selected)
      .reduce((a: number, c: shopCartGoods) => a + c.count, 0)
  )
  // 已选择商品价格总价
  const selectedPrice = computed(() =>
    cartList.value
      .filter((item: shopCartGoods) => item.selected)
      .reduce((a: number, c: shopCartGoods) => a + c.count * c.price, 0)
  )

  return {
    cartList,
    addShopCart,
    delCart,
    allCount,
    allPrice,
    singleCheck,
    checkAll,
    isCheckAll,
    selectGoods,
    selectedPrice
  }
})
