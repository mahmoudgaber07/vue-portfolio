import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../layout/DefaultLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'public',
      component: DefaultLayout,
      redirect:'/',
      children:[
        {
          path:'/',
          name: 'about',
          component: () => import('../views/AboutView.vue'),
        },
        {
          path:'/counter',
          name: 'counter',
          component: () => import('../views/CounterView.vue'),
        },
        {
          path:'/ecommerce',
          name: 'ecommerce',
          component: () => import('../views/EcommerceView.vue'),
        },
        {
          path: 'ecommerce/:id',
          name: 'ProductDetail',
          component: () => import('../views/ProductDetailView.vue'),
          props: true 
        },
        {
          path:'/cart',
          name: 'cart',
          component: () => import('../views/CartView.vue'),
        },
        {
          path:'/todo',
          name: 'todo',
          component: () => import('../views/TodoView.vue'),
        },
        {
          path:'/:pathMatch(.*)*',
          name: 'notfound',
          component: () => import('../views/NotFoundView.vue'),
        },

      ],

    },
  ]
})

export default router
