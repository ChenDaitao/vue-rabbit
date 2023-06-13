<!--
 * @Date: 2023-06-13 20:57:57
 * @LastEditTime: 2023-06-13 21:17:17
 * @Description:右侧轮播图
-->
<script setup lang="ts">
import homeApi from '@/api/server/home'
import type { banner } from '@/api/server/type'
import { ElMessage } from 'element-plus'
import { ref } from 'vue'

const bannerList = ref<banner[]>() //轮播图列表
/**
 * @description: 轮播图获取
 */
function getBannerImage() {
  homeApi
    .getBanner()
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
getBannerImage()
</script>
<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="item.imgUrl" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<style lang="scss" scoped>
.home-banner {
  width: 1240px;
  height: 500px;
  // position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>
