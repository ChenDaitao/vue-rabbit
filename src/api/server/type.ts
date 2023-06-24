//  请求返回类型
type ResultType<T> = {
  code: string // '1'成功
  msg: string
  result: T
}

interface childrenObj {
  children: null | any
  goods: null | any
  id: string
  name: string
  picture: string
  brands?: null | any
  categories?: null | any
  saleProperties?: null | any
  parentId?: null | any
  parentName?: null | any
}
export interface goodsObj {
  desc: string
  id: string
  name: string
  orderNum: null | number
  picture: string
  price: string
}
export interface baseObj {
  id: string
  name: string
  children?: childrenObj[]
  goods?: goodsObj[]
  picture?: string | null
}
// NOTE: 分类列表
export type categoryList = ResultType<baseObj[]>

// NOTE: 轮播图列表
export interface banner {
  id: string //轮播图id
  imgUrl: string //轮播图地址
  hrefUrl: string //轮播图跳转链接
  type: string //轮播图跳转类型
}
export type bannerList = ResultType<banner[]>

// NOTE: 新鲜好物列表
export type newGoodList = ResultType<goodsObj[]>

// NOTE: 人气推荐列表
export interface hotObj {
  alt: string
  id: string
  picture: string
  title: string
}
export type hotList = ResultType<hotObj[]>

// NOTE: 产品列表
export type productObj = {
  id: string
  name: string
  children: childrenObj[]
  goods: goodsObj[]
  picture: string
  saleInfo: string
}
export type productList = ResultType<productObj[]>

// NOTE: 分类相关
export type categoryData = ResultType<baseObj>
