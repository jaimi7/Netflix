import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/MainHome.vue'),
      meta: { auth: true },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LogIn.vue'),
      meta: { auth: false },
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/NewRegistration.vue'),
      meta: { auth: false },
    },
  ],
})

export default router
