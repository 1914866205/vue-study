import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
import 'element-ui/lib/theme-chalk/index.css'

// // 完整引入 Element
// import ElementUI from 'element-ui '
// import locale from 'element-ui/lib/locale/lang/en'
// Vue.use(ElementUI, { locale })

//按需引入Element
import {
  Button,
  Card,
  Select,
  Container,
  Header,
  Main,
  Tabs,
  TabPane,
  Carousel,
  CarouselItem
} from 'element-ui'
// 引入组件
Vue.use(Button)
Vue.use(Card)
Vue.use(Select)
Vue.use(Container)
Vue.use(Main)
Vue.use(Header)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Carousel)
Vue.use(CarouselItem)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
