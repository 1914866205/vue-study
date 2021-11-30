import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Vant from 'vant';
import 'vant/lib/index.css';


/**轮播图  bootstrap框架 */
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//引入全局统一的数据库，使用vue状态管理
import store from './store'
Vue.prototype.$store=store;


Vue.use(Vant);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(ViewUI);
Vue.config.productionTip = false
Vue.use(Vuex)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
