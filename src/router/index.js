import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import UsersView from '../views/UsersView.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: IndexView
  },
  {
    path: '/users',
    name: 'users',
    component: UsersView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
