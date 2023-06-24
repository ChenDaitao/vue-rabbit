<script setup lang="ts">
import categoryApi from '@/api/server/category'
import { ElMessage } from 'element-plus'
import type { baseObj } from '@/api/server/type'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import GoodsItem from '@/components/goodsItem/index.vue'

const route = useRoute()

// 获取二级分类面包屑导航
const subCategoryList = ref<baseObj>()
const getSubCategoryList = (id: string) => {
  categoryApi
    .getSubCategoryList(id)
    .then(({ code, result, msg }) => {
      if (code == '1') subCategoryList.value = result
      else
        ElMessage({
          type: 'warning',
          message: msg
        })
    })
    .catch((err) =>
      ElMessage({
        type: 'warning',
        message: err
      })
    )
}
getSubCategoryList(route.params.id as any)

// 获取二级分类商品数据
const subGoodsList = ref()
const reqData = ref({
  categoryId: route.params.id as unknown as string,
  page: 1,
  pageSize: 20,
  sortField: 'publishTime'
})
const getSubCategoryGoods = () => {
  categoryApi
    .getSubCategoryGoods(reqData.value)
    .then(({ code, result, msg }) => {
      if (code == '1') subGoodsList.value = result.items
      else
        ElMessage({
          type: 'warning',
          message: msg
        })
    })
    .catch((err) =>
      ElMessage({
        type: 'warning',
        message: err
      })
    )
}
getSubCategoryGoods()

// tab页切换时
const tabChange = () => {
  reqData.value.page = 1
  getSubCategoryGoods()
}

// 滚动页面加载
const disabled = ref(false)
const goodsload = () => {
  reqData.value.page++ // 获取下一页
  categoryApi
    .getSubCategoryGoods(reqData.value)
    .then(({ code, result, msg }) => {
      if (code == '1') subGoodsList.value = [...subGoodsList.value, ...result.items] //向后加载数据
      if (result.items.length === 0) {
        disabled.value = true
      } else
        ElMessage({
          type: 'warning',
          message: msg
        })
    })
    .catch((err) =>
      ElMessage({
        type: 'warning',
        message: err
      })
    )
}
</script>

<template>
  <div class="container">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{ subCategoryList?.parentName }}</el-breadcrumb-item>
        <el-breadcrumb-item>{{ subCategoryList?.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="reqData.sortField" @tab-change="tabChange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body" v-infinite-scroll="goodsload" :infinite-scroll-disabled="disabled">
        <!-- 商品列表 限制无限滚动-->
        <GoodsItem v-for="goods in subGoodsList" :goods="goods" :key="goods.id" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}
.sub-container {
  padding: 20px 10px;
  background-color: #fff;
  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }
  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;
    img {
      width: 160px;
      height: 160px;
    }
    p {
      padding-top: 10px;
    }
    .name {
      font-size: 16px;
    }
    .desc {
      color: #999;
      height: 29px;
    }
    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }
  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
}
</style>
