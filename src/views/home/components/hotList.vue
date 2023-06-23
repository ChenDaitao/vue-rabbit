<!--
 * @Date: 2023-06-13 21:41:52
 * @LastEditTime: 2023-06-13 22:45:02
 * @Description: 人气推荐
-->

<script setup lang="ts">
import HomePanel from '@/components/homePanel/index.vue'
import homeApi from '@/api/server/home'
import type { hotObj } from '@/api/server/type'
import { ElMessage } from 'element-plus'
import { ref } from 'vue'

const hotList = ref<hotObj[]>([])

/**
 * @description: 获取人气推荐列表
 */
const getHotList = async () => {
  const { code, msg, result } = await homeApi.getHotList()
  if (code == '1') hotList.value = result
  else ElMessage({ type: 'error', message: msg })
}
getHotList()
</script>
<template>
  <HomePanel title="人气推荐" sub-title="人气爆款 不容错过">
    <template #main>
      <ul class="goods-list">
        <li v-for="item in hotList" :key="item.id">
          <RouterLink to="/">
            <img v-img-lazy="item.picture" alt="" />
            <p class="name">{{ item.title }}</p>
            <p class="desc">{{ item.alt }}</p>
          </RouterLink>
        </li>
      </ul>
    </template>
  </HomePanel>
</template>

<style scoped lang="scss">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 426px;
  li {
    width: 306px;
    height: 406px;
    transition: all 0.5s;
    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
    }
    .desc {
      color: #999;
      font-size: 18px;
    }
  }
}
</style>
