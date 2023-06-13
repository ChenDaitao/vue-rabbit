<script setup lang="ts">
import { RouterView } from 'vue-router'
import Hearder from './components/header.vue'
import Nav from './components/nav.vue'
import Footer from './components/footer.vue'
import useLayoutStore from '@/stores/modules/layout'
const layoutStore = useLayoutStore()
layoutStore.getCategoryList() //获取导航栏数据
</script>

<template>
  <Hearder />
  <Nav />
  <!-- 二级路由入口 -->
  <RouterView />
  <Footer />
</template>
<style scoped lang="scss"></style>
