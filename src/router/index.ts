import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Products',
    component: () => import('../pages/Products/index.vue')
  },
  {
    path: '/carrinho',
    name: 'Cart',
    component: () => import('../pages/Cart/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router