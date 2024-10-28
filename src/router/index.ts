import { createRouter, createWebHistory } from 'vue-router'
import HomeHeader from '@/components/HomeHeader.vue'
import ArticleDetail from '@/components/ArticleDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeHeader
    },
    {
      path: '/articleDetail/:id',
      name: 'ArticleDetail',
      component: ArticleDetail
    }
  ]
})

export default router
