<!--
 * @Date: 2023-06-13 21:18:10
 * @LastEditTime: 2023-06-13 21:19:52
 * @Description: 面板组件
-->
<script setup lang="ts">
defineProps(['title', 'subTitle'])
</script>
<template>
  <div class="home-panel">
    <div class="container">
      <div class="head">
        <!-- 主标题和副标题 -->
        <h3>
          {{ title }}<small>{{ subTitle }}</small>
        </h3>
      </div>
      <!-- 主体内容区域 -->
      <slot name="main"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-panel {
  background-color: #fff;
  .head {
    padding: 40px 0;
    display: flex;
    align-items: flex-end;
    h3 {
      flex: 1;
      font-size: 32px;
      font-weight: normal;
      margin-left: 6px;
      height: 35px;
      line-height: 35px;
      small {
        font-size: 16px;
        color: #999;
        margin-left: 20px;
      }
    }
  }
}
</style>
