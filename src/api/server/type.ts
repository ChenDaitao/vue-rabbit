//  请求返回类型
type ResultType<T> = {
  code: string // '1'成功
  msg: string
  result: T
}

export interface baseObj {
  id: string
  name: string
  children?: []
  goods?: []
  picture?: string
}
// NOTE: 分类列表
export type categoryList = ResultType<baseObj[]>
