import { defineStore } from 'pinia'
import type { baseObj } from '@/api/server/type'
import layoutApi from '@/api/server/layout'
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const layoutStore = defineStore('categoryStore', () => {
  // 获取导航栏数据
  const categoryList = ref<baseObj[]>([])
  /**
   * @description: 获取导航栏数据
   */
  async function getCategoryList() {
    const { code, result, msg } = await layoutApi.getCategoryList()
    if (code == '1') {
      categoryList.value = result
    } else
      ElMessage({
        showClose: true,
        message: `${msg},请稍后再试`,
        type: 'error'
      })
  }
  return {
    categoryList,
    getCategoryList
  }
})

export default layoutStore
