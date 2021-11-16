/**
 * 章鱼猫模块
 * 这里也可以引入一些模块需要的包或者接口
 * 比如axios等
 */

// import { resolveConfig } from 'prettier'

//定义类型
const CAT = 'CAT'
//定义state
const catState = {
  name: '章鱼猫',
  age: 10,
  friend: 'GitHub'
}
/**
 * 更改Vuex的store中的状态的唯一方法是提交Mutation。Vuex中的Mutation
非常类似于事件：每个Mutation都有一个字符串的事件类型（type）和一个回调函
数（handler）。
这个回调函数就是我们实际进行状态更改的地方，要唤醒一个Mutation的回调，我
们需要以相应的type调用store.commit方法，第一个参数是state，第二个参数是新
的名字，在Mutations中，我们叫做载荷（Payload）。通常情况下，Payload是一个
对象，这样属性可读性比较好
 */
// 定义mutation
const mutations = {
  /**
   *
   * @param {Object} state 状态管理对象
   * @param {Object} newCat 章鱼猫新对象
   */
  [CAT](state, newCat) {
    state.name = newCat
  }
}

const actions = {
  /**
   * 请求数据更新章鱼猫对象
   * @param {Object} context 上下文对象
   * @param {*} catHttp 请求到的章鱼猫对象数据
   * @return {Promise} return一个Promise实例
   */
  updateCat(context, catHttp = { name: 'actionName cat' }) {
    setTimeout(() => {
      context.commit('CAT', catHttp)
      return Promise.resolve(catHttp)
    }, 2000)
    // return axios.post('/api/testCat', catHttp.id).then((res) => {
    //   context.commit('CAT', res.data)
    //   resolveConfig(res.data)
    // })
  }
}
const getters = {
  //定义一个过滤，返回true或false
  filterCat: (catState) => {
    return catState.name != '猫'
  }
}
//getter过滤 返回的值

//导出
export default {
  state: { ...catState },
  mutations,
  actions,
  getters
}
