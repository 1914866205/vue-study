<template>
  <div
    id="app"
    style="border:solid 2px black"
  >
    <div id="nav">
      <router-link to="/home">进入主页</router-link>
      <!-- <h1>parent父组件</h1>
      在父组件中的子标签中监听该自定义事件并添加一个响应该事件的处理方法
      <child v-on:listenToChildEvent="showMsgFromChild"></child> -->
      <!-- <div style="border:solid 2px blue">
        <h1>我是TodoList2的父组件</h1>
        <input
          v-model="inputValue"
          type="text"
        />
        <button @click="addDataToList">添加</button>
        显示子组件的结果
        <list-item :list="list"></list-item>
      </div> -->
      <!-- <div>
        <h1>我是TodoList3的父组件</h1>
        <input
          v-model="inputValue"
          type="text"
        />
        <button @click="addDataToList">添加</button>
        显示子组件的结果
        <list-item
          :list="list"
          @delDataFromList='delDataFromList'
        ></list-item>
      </div> -->
      <!-- <div>
        <h1>我是TodoList4的父组件</h1>
        <input
          v-model="inputValue"
          type="text"
        />
        <button @click="addDataToList">添加</button>
        <list-item :list="list"></list-item>
      </div> -->
      <!-- <div>
        <h1>我是TodoList5的父组件</h1>
        <input
          v-model="inputValue"
          type="text"
        />
        <button @click="addDataToList">添加</button>
        组件化触发原生事件,子组件通过 @click.native 给最外层的 DOM 元素绑定事件，利用 $event 获取索引。本质上这利用了 BOM 的事件委托机制
        <list-item
          :list="list"
          @click.native="delDataFromList($event)"
        ></list-item>
      </div> -->
      <!-- <div>
        <h1>我是TodoList6的父组件</h1>
        <input
          v-model="inputValue"
          type="text"
        />
        <button @click="addDataToList">添加</button>
        <list-item :list="list"></list-item>
        <list-item
          :list="list"
          :delDataFromList='delDataFromList'
        ></list-item>
      </div>
      通过 props 调用父组件方法
      props 可以传递各种类型数据。包括 Function 类型。 -->

      <div>
        <h1>我是TodoList7的父组件</h1>
        <input
          v-model="inputValue"
          type="text"
        />
        <button @click="addDataToList">添加</button>
        <list-item :list="vuexList"></list-item>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
// import child from './Card'
// import ListItem from './TodoList2'
// import ListItem from './TodoList3'
// import ListItem from './TodoList4'
// import ListItem from './TodoList5'
// import ListItem from './TodoList6'
import ListItem from './TodoList7'
import { mapState, mapGetters } from 'vuex'
import { types } from '../store/types'
/**
 *1. 父组件引入子组件，父组件修改变量值
 */
export default {
  name: 'Welcome',
  data() {
    return {
      // list: [],
      inputValue: ''
    }
  },
  components: {
    // child
    //显示子组件
    ListItem
  },
  created() {
    /**
     * 事件总线实现
      核心：
      Vue.prototype.$bus = new Vue()
      事件总线是一种发布订阅模式：
      vm.$emit 方法将事件函数广播发布
      vm.$on 接收广播
     */
    // 需要在 created 里面注册 delDataFromList 方法。
    // this.$bus.$on('delDataFromList', (index) => {
    //   this.list.splice(index, 1)
    // })
  },
  mounted() {},
  methods: {
    // showMsgFromChild(msg) {
    //   console.log(msg)
    //   alert(msg)
    // }
    // addDataToList() {
    //   if (this.inputValue.length === 0) {
    //     return '长度为0不添加'
    //   }
    //   this.list.push(this.inputValue)
    //   this.inputValue
    // },
    addDataToList() {
      if (this.inputValue.length === 0) {
        return '长度为0不添加'
      }
      // this.$store.dispatch('addDataToListAction', this.inputValue)
      this.$store.dispatch('types.ADD_DATA_TO_LIST', this.inputValue)
      this.inputValue = ''
    },
    /**
     * @delDataFromList 即为子组件通过 $emit 触发的自定义事件，
     * 触发 delDataFromList 方法。
     */
    // delDataFromList(index) {
    //   this.list.splice(index, 1)
    // }
    delDataFromList(index) {
      this.$store.dispatch('delDataToListAction', index)
    }
    // delDataFromList(event) {
    //   /**
    //    * event.target.propertyName和event.target.getAttribute("propertyName")区别
    //    *本句话转载：https://blog.csdn.net/qq_36824782/article/details/78350092
    //    * getAttribute拿的是html属性的值，而prop是DOM接口，
    //    * 存取如何是由DOM规范定义的，跟html上的值是不一定对应的。
    //    * 比如 input.value 你可以改变，但是 input.getAttribute('value') 你拿到的总是html上的属性的值，
    //    * 是不变的。再如 a.href 得到总是绝对地址，而 a.getAttribute('value') 则是 html上写的地址，原来是什么就是什么。
    //    */
    //   let index = event.target.getAttribute('data-key')
    //   this.list.splice(index, 1)
    // }
  },
  computed: {
    // ...mapGetters(['vuexList'])
    /**
     * mapState 是 Vuex 的辅助函数，
     * 可以将数据仓库中 state 数据映射到计算属性 computed 当中。
     */
    ...mapState({
      list: (state) => state.list
    }),
    ...mapGetters(['vuexList'])
  }
}
</script>

<style scoped lang="scss"></style>
