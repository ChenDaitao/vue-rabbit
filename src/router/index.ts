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
  ]
})

export default router
