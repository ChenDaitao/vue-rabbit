import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/layout/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout, //一级路由
      children: [
        {
          path: '', // NOTE: 默认显示home二级菜单 无需填写path
          name: 'home',
          component: () => import('@/views/home/index.vue')
        },
        {
          path: 'category/:id',
          name: 'category',
          component: () => import('@/views/categroy/index.vue')
        },
        {
          path: 'category/sub/:id',
          name: 'subCategory',
          component: () => import('@/views/detail/index.vue')
        }
      ]
    },
    {
      path: '/login',
      component: () => import('@/views/login/index.vue')
    }
  ],
  // 路由滚动行为限制 NOTE: 使每次切换路由使 页面都在顶部显示
  scrollBehavior() {
    return {
      top: 0
    }
  }
})

export default router
