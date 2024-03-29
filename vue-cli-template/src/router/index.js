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
// router.beforeEach((to, from, next) => {
//   if (to.path === '/home/list') {
//     alert('beforeEach说：不可以进入会员页，你没充钱')
//     next({ path: '/welcome' })
//   }
//   next()
// })
// router.beforeResolve((to, from, next) => {
//   next()
// })
// router.afterEach((to, from) => {
//   console.log(from)
//   if (to.path === '/welcome') {
//     alert('afterEach说：没充钱还来玩，走你。')
//   }
// })
export default router
