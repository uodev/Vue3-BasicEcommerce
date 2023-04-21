import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/AllProductsPage.vue')
  },
  {
    path: '/products/:id',
    name: 'product',
    component: () => import('../views/ProductDetailPage.vue')
  },
  {
    path: '/add-product',
    name: 'add-product',
    component: () => import('../views/AddProductPage.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
