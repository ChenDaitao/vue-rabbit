<script setup lang="ts">
import { RouterView } from 'vue-router'
import Hearder from './components/header.vue'
import Nav from './components/nav.vue'
import Footer from './components/footer.vue'
</script>

<template>
  <Hearder />
  <Nav />
  <!-- 二级路由入口 -->
  <RouterView />
  <Footer />
</template>
<style scoped lang="scss"></style>
