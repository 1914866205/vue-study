import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
Vue.use(VueRouter);

const routes=[
    {
        path:'/',
        name:'HelloWorld',
        component:HelloWorld
    },{
        path:'/carousel',
        name:'carousel',
        component:()=>import('../views/carousel.vue')
    },{
        path:'/studydangshi',
        name:'studydangshi',
        component:()=>import('../views/studydangshi.vue')
    },{
        path:'/register',
        name:'register',
        component:()=>import('../views/register.vue')
    },{
        path:'/login',
        name:'login',
        component:()=>import('../views/login.vue')
    }
]

const router=new VueRouter({
    routes,
    mode:'history'
})


export default router