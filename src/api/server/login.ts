import Api from '../index'
import type { userInfo } from './type'

export interface loginData {
  account: string
  password: string
}
class loginApi extends Api {
  loginIn(data: loginData) {
    // return this.post<userInfo>(`${this.baseUrl}/login`, data)
    return this.get<userInfo>(`/login.json`)
  }
}

export default new loginApi()
