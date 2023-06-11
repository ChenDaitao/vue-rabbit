/*
 * @Date: 2023-06-11 22:14:29
 * @LastEditTime: 2023-06-11 22:46:51
 * @Description: ElementPlus全局类型声明
 */
import { ElMessage, ElMessageBox, ElNotification, ElLoading } from 'element-plus'

declare module 'element-plus' {
  export const ElMessage: ElMessage
  export const ElMessageBox: ElMessageBox
  export const ElNotification: ElNotification
  export const ElLoading: ElLoading

  // 其他类型声明...
}
