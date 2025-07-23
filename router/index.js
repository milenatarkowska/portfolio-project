import { createRouter, createWebHistory } from 'vue-router'
import HeroPageView from '../views/HeroPageView.vue'
import AboutMeView from '../views/AboutMeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'hero',
      component: HeroPageView,
    },
    {
      path: '/about_me',
      name: 'about_me',
      component: AboutMeView,
    }
  ],
})

export default router
