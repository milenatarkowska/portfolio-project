import { createRouter, createWebHistory } from 'vue-router'
import HeroPageView from '../views/HeroPageView.vue'
import AboutMeView from '../views/AboutMeView.vue'
import CVPageView from '../views/CVPageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HeroPageView,
    },
    {
      path: '/about_me',
      name: 'about_me',
      component: AboutMeView,
    },
    {
      path: '/CV',
      name: 'CV',
      component: CVPageView,
    }
  ],
})

export default router
