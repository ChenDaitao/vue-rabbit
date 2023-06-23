<script setup lang="ts">
import leftCategory from './components/leftCategory.vue'
import RightBanner from './components/rightBanner.vue'
import GoodsList from './components/goodsList.vue'
import hotList from './components/hotList.vue'
import ProductList from './components/product.vue'
</script>

<template>
  <div class="head-part"><leftCategory /> <RightBanner /></div>
  <GoodsList />
  <hotList />
  <ProductList />
</template>
<style scoped lang="scss">
.head-part {
  display: flex;
  position: relative;
}
</style>
