import Vue from 'vue'
import vuex from 'vuex'
import { types } from './types'
Vue.use(vuex)
export default new vuex.Store({
  state: {
    list: []
  },
  /**
   *      *  this.$store.dispatch 派发请求，
   * 执行仓库文件 index.js 中 actions 里面对应的函数。
   */
  actions: {
    addDataToListAction({ commit }, item) {
      commit('addDataToList', item)
    },
    delDataToListAction({ commit }, index) {
      commit('delDataToList', index)
    }
  },
  /**
   * actions 的解构参数 commit 可以执行 mutations 内方法。
     main.js 入口文件引入 store 下 index.js 导出对象，并在 Vue 实例中注册
   */
  mutations: {
    [types.ADD_DATA_TO_LIST](state, item) {
      state.list.push(item)
    },
    [types.DEL_DATA_TO_LIST](state, index) {
      state.list.splice(index, 1)
    }
  },
  getters: {
    vuexList(state) {
      return state.list
    }
  }
})
