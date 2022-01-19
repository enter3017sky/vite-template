import { createRouter, createWebHistory } from 'vue-router'

import Home from '/src/components/Home.vue'
import About from '/src/components/About.vue'

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
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
