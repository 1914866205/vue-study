import Vue from 'vue'
import VueRouter from 'vue-router'
import Container from '../views/Container.vue'
import Card from '../views/Card.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'home'
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: () => import('@/views/Welcome.vue')
  },
  {
    path: '/home',
    name: 'Container',
    component: Container,
    children: [
      {
        path: '/',
        redirect: 'card'
      },
      {
        path: 'card',
        name: 'Card',
        component: Card
      },
      {
        path: 'list',
        name: 'List',
        component: () => import('@/views/List.vue')
      }
    ]
  },
  {
    name: '404',
    path: '*',
    component: () => import('@/views/NoFind.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
