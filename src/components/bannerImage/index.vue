<!--
 * @Date: 2023-06-13 20:57:57
 * @LastEditTime: 2023-06-24 18:56:37
 * @Description:右侧轮播图
-->
<script setup lang="ts">
import { useBanner } from '@/hooks/banner'

const props = defineProps({
  searchType: {
    type: String,
    default: '1'
  }
})

const { bannerList } = useBanner(props.searchType)
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
