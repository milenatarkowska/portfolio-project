import { createRouter, createWebHistory } from 'vue-router'
import HeroPageView from '../views/HeroPageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'hero',
      component: HeroPageView,
    },
  ],
})

export default router
