/*
 * @Date: 2023-06-24 18:44:09
 * @LastEditTime: 2023-06-24 19:06:46
 * @Description:导航栏相关
 */
import homeApi from '@/api/server/home'
import type { banner } from '@/api/server/type'
import { ElMessage } from 'element-plus'
import { ref } from 'vue'

export function useBanner(type: string) {
  const bannerList = ref<banner[]>() //轮播图列表

  const getBannerImage = (type: string) => {
    homeApi
      .getBanner({
        distributionSite: type
      })
      .then(({ code, msg, result }) => {
        if (code == '1') {
          bannerList.value = result
        } else
          ElMessage({
            type: 'error',
            message: msg
          })
      })
      .catch((err) =>
        ElMessage({
          type: 'error',
          message: err
        })
      )
  }

  getBannerImage(type)

  return {
    bannerList
  }
}
