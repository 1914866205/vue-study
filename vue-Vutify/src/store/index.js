import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//将状态从根组件注入到每一个子组件中，然后new一个store推出去
Vue.use(Vuex)
//引入章鱼猫模块
import octocat from './modules/octocat'

const store = new Vuex.Store({
  modules: {
    octocat
  }
})
export default store
// export default new Vuex.Store({
//   state: {},
//   mutations: {},
//   actions: {},
//   modules: {}
// })
