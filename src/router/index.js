import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/pages/landingpages/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
  ]
})

export default router
