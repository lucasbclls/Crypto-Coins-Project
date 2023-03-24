import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import consultChain from '@/views/consultChain.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/consultChain',
    name: 'consultChain',
    component: () => import('../views/consultChain.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
