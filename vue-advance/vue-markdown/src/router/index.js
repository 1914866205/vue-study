import Vue from 'vue'
import VueRouter from 'vue-router'
import Markdown from '../views/Markdown.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'markdown',
    component: Markdown
  }
]

const router = new VueRouter({
  routes
})

export default router
