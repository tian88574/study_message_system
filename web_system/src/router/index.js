import { createRouter, createWebHistory } from 'vue-router'
import login from '../view/login'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: login
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
