import { createRouter, createWebHistory } from 'vue-router'

import Home from '~/pages/Home.vue'
import About from '~/pages/About.vue'

// File system based route generator for ⚡️Vite
// https://github.com/hannoeru/vite-plugin-pages

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/pinia',
    name: 'Pinia',
    component: () => import ('~/pages/Pinia.vue'),
  },

  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import ('~/layout/404.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
