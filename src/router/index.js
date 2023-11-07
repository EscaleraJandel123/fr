import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import homepage from '../views/home.vue'
import login from '../views/login.vue'
import register from '../views/register.vue'
import chome from '../views/clients/home.vue'
const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  {
    path: '/',
    component: homepage,
  },
  {
    path: '/login',
    component: login,
  },
  {
    path: '/register',
    component: register,
  },
  {
    path: '/chome',
    component: chome,
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
