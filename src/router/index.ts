import { createRouter, createWebHistory } from 'vue-router'
import HomeHeader from '@/components/HomeHeader.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeHeader
    }
  ]
})

export default router
