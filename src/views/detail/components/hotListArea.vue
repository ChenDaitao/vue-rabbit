<!--
 * @Date: 2023-06-25 20:35:10
 * @LastEditTime: 2023-06-25 22:23:37
 * @Description: 热榜区域
-->
<script setup lang="ts">
import detailApi from '@/api/server/detail'
import type { goodsObj } from '@/api/server/type'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

const props = defineProps({
  type: {
    type: Number,
    default: 1 //1代表24小时热销榜 2代表周热销榜 3代表总热销榜
  }
})
const TITLEMAP: any = {
  1: '24小时热榜',
  2: '周热榜'
}
const title = computed(() => TITLEMAP[props.type])
// 获取热榜数据
const hotListAreaList = ref<goodsObj>()
const params = {
  id: route.params.id as unknown as string,
  type: props.type
}
const getHotListArea = async () => {
  const { result } = await detailApi.getHotListArea(params)
  hotListAreaList.value = result
}
getHotListArea()
</script>
<template>
  <div class="goods-hot">
    <h3>{{ title }}</h3>
    <!-- 商品区块 -->
    <RouterLink to="/" class="goods-item" v-for="item in hotListAreaList" :key="item.id">
      <img :src="item.picture" alt="" />
      <p class="name ellipsis">{{ item.name }}</p>
      <p class="desc ellipsis">{{ item.desc }}</p>
      <p class="price">&yen;{{ item.price }}</p>
    </RouterLink>
  </div>
</template>

<style scoped lang="scss">
.goods-hot {
  h3 {
    height: 70px;
    background: $helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }
  .goods-item {
    display: block;
    padding: 20px 30px;
    text-align: center;
    background: #fff;
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
}
</style>
