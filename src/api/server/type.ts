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
  picture?: string
}
// NOTE: 分类列表
export type categoryList = ResultType<baseObj[]>

// NOTE: 轮播图列表
export interface banner {
  hrefUrl: string
  id: string
  imgUrl: string
  type: string
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
