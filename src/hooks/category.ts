/*
 * @Date: 2023-06-24 18:32:25
 * @LastEditTime: 2023-06-24 20:27:02
 * @Description: 获取分类数据相关hook 解决路由缓存问题
 */
import categoryApi from '@/api/server/category'
import type { baseObj } from '@/api/server/type'
import { ElMessage } from 'element-plus'
import { ref } from 'vue'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'

export function useCategory() {
  const categoryData = ref<baseObj>() //分类数据
  const route = useRoute()

  const getCategoryData = (id: string) => {
    categoryApi
      .getCategoryList(id)
      .then(({ code, result, msg }) => {
        if (code == '1') categoryData.value = result
        else
          ElMessage({
            type: 'warning',
            message: msg
          })
      })
      .catch((err) =>
        ElMessage({
          type: 'warning',
          message: err
        })
      )
  }
  getCategoryData(route.params.id as any)

  /**
   * @description: 当路由参数变化时，使用最新的路由参数 请求最新的分类数据
   * NOTE: 路由缓存问题：当路由path一样，参数不同时，会直接复用路由对应的组件
   * NOTE: 解决方案：1.给router-view添加key属性，破坏缓存
   *                2.使用onBeforeRouteUpdate钩子，做精确的数据更新
   */
  onBeforeRouteUpdate((to) => {
    getCategoryData(to.params.id as any)
  })

  return {
    categoryData
  }
}
