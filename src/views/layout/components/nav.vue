<script setup lang="ts">
import { ref } from 'vue'
import layoutApi from '@/api/server/layout'
import type { baseObj } from '@/api/server/type'
import { useScroll } from '@vueuse/core'
import { ElMessage } from 'element-plus'

type categoryListType = baseObj

const categoryList = ref<categoryListType[]>([])
const { y } = useScroll(window) //单位px

async function getCategoryList() {
  const { code, result, msg } = await layoutApi.getCategoryList()
  if (code == '1') {
    categoryList.value = result
    console.log(categoryList.value)
  } else
    ElMessage({
      showClose: true,
      message: `${msg},请稍后再试`,
      type: 'error'
    })
}
getCategoryList() //获取导航栏信息
</script>

<template>
  <header :class="[y > 78 ? 'app-header-sticky' : 'app-header', y > 78 ? 'show' : '']">
    <div class="container">
      <RouterLink class="logo" to="/" v-if="y > 78" />
      <h1 class="logo" v-else>
        <RouterLink to="/">小兔鲜</RouterLink>
      </h1>

      <ul class="app-header-nav">
        <li class="home" v-for="item in categoryList" :key="item.id">
          <RouterLink to="/">{{ item.name }}</RouterLink>
        </li>
      </ul>

      <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜一搜" />
      </div>
      <!-- 头部购物车 -->
    </div>
  </header>
</template>

<style scoped lang="scss">
// 吸附时样式
.app-header-sticky {
  width: 100%;
  height: 80px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
  // NOTE:关键样式：状态一：往上平移自身高度 + 完全透明
  transform: translateY(-100%);
  opacity: 0;
  // 状态二：移除平移 + 完全不透明
  &.show {
    transition: all 0.3s linear;
    transform: none;
    opacity: 1;
  }
  .logo {
    width: 200px;
    height: 80px;
    background: url('@/assets/images/logo.png') no-repeat right 2px;
    background-size: 160px auto;
  }
  .right {
    width: 220px;
    display: flex;
    text-align: center;
    padding-left: 40px;
    border-left: 2px solid $xtxColor;
    a {
      width: 38px;
      margin-right: 40px;
      font-size: 16px;
      line-height: 1;
      &:hover {
        color: $xtxColor;
      }
    }
  }
}

// 首页正常固定样式
.app-header {
  background: #fff;
  .logo {
    width: 200px;
    a {
      display: block;
      height: 132px;
      width: 100%;
      text-indent: -9999px;
      background: url('@/assets/images/logo.png') no-repeat center 18px / contain;
    }
  }
}
.container {
  display: flex;
  align-items: center;
}
// 导航栏 BEGIN
.app-header-nav {
  width: 820px;
  display: flex;
  padding-left: 40px;
  position: relative;
  z-index: 998;
  li {
    margin-right: 40px;
    width: 38px;
    text-align: center;
    a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;
      &:hover {
        color: $xtxColor;
        border-bottom: 1px solid $xtxColor;
      }
    }
    .active {
      color: $xtxColor;
      border-bottom: 1px solid $xtxColor;
    }
  }
}
// 导航栏 END

// 搜索框 BEGIN
.search {
  width: 170px;
  height: 32px;
  position: relative;
  border-bottom: 1px solid #e7e7e7;
  line-height: 32px;
  .icon-search {
    font-size: 18px;
    margin-left: 5px;
  }
  input {
    width: 140px;
    padding-left: 5px;
    color: #666;
  }
}
.cart {
  width: 50px;
  .curr {
    height: 32px;
    line-height: 32px;
    text-align: center;
    position: relative;
    display: block;
    .icon-cart {
      font-size: 22px;
    }
    em {
      font-style: normal;
      position: absolute;
      right: 0;
      top: 0;
      padding: 1px 6px;
      line-height: 1;
      background: $helpColor;
      color: #fff;
      font-size: 12px;
      border-radius: 10px;
      font-family: Arial;
    }
  }
}
// 搜索框 END
</style>
