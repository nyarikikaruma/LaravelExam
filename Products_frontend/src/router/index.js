import { createRouter, createWebHistory } from 'vue-router'
import ProductsList from '../components/ProductsList.vue'
import Product from '../components/Product.vue'
import Edit from '../components/EditProduct.vue'
import Create from '../components/CreateProducts.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: ProductsList
    },
    {
      path: '/product/:id',
      name: 'product',
      component: Product
    },

    {
      path: '/edit/:id',
      name: 'edit',
      component: Edit
    },

    {
      path: '/create',
      name: 'create',
      component: Create
    }
  ]
})

export default router
