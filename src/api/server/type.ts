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
  categories?: null | any //分类集合
  brands?: null | any //推荐品牌
  saleProperties?: null | any //销售属性
}
export interface baseObj {
  id: string
  name: string
  children?: childrenObj[]
  goods?: goodsObj[]
  picture?: string | null
  parentName?: string | null
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

// NOTE: 二级分类菜单
export type subCategoryList = ResultType<baseObj>

// NOTE: 二级分类菜单
interface subGood {
  counts: number
  page: number
  pageSize: number
  pages: number
  items: subItem[]
}
export interface subItem {
  id: string
  name: string
  desc: string
  price: string //TODO:文档不完整
}
export type subGoods = ResultType<subGood>

// NOTE: 商品详情
export interface detailGoodsObj {
  id: string //商品id
  name: string //商品名字
  spuCode: string //商品spu编码
  desc: string //商品描述
  price: string //商品价格
  oldPrice: string //商品原价
  discount: number //商品折扣
  inventory: number //商品库存数
  brand: brandObj //商品品牌
  salesCount: number
  commentCount: number //商品评论总数
  collectCount: number //商品收藏总数
  mainVideos: string[] //商品主图视频合集
  videoScale: number //商品主图视频比例
  mainPictures: string[] //商品主图集合
  specs: specsObj[] // 商品可选规格集合备注：规格集合一定要和skus集合下的specs 顺序保持一致
  skus: skuType // 商品sku集合
  categories: any // 商品所属分类
  details: any // 商品详情
  isPreSale: boolean // 商品是否为预售商品
  isCollect: null // 商品是否收藏 用户未登录无值
  recommends: null // 商品推荐集合 仅APP有此数据
  userAddresses: null // 商品用户地址列表 用户未登录时该字段为空
  similarProducts: any // 商品同类商品集合
  hotByDay: any // 商品24小时热销列表
  evaluationInfo: any // 商品评价信息
}
interface specsObj {
  name: string // 规格名字
  id: string // 规格id
  values: valuesObj[]
}
interface valuesObj {
  name: string // 可选值名称
  picture: string | null // 可选值图片地址
  desc: string // 可选值备注
}
export interface skuType {
  id: string
  inventory: number
  oldPrice: string
  picture: string
  price: string
  skuCode: string
}
interface brandObj {
  id: string // 品牌id
  name: string // 品牌名字
  nameEn: string // 品牌英文名字
  logo: string // 品牌logo图片地址
  picture: string // 品牌图片地址
  type: null | any // 品牌类型
  desc: null | any // 品牌描述
  place: null | any // 品牌产地
}
export type detailGoodsList = ResultType<detailGoodsObj>

// NOTE:热榜商品 返回类型
export type hotListAreaRes = ResultType<goodsObj>
