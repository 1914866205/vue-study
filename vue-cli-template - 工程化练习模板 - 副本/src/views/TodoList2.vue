<template>
  <div style="border:solid 2px blue">
    <h1>我是组件TodoList2</h1>
    <div
      v-for="(item, index) in list"
      :key="index"
      @click="delDataFromList(index)"
      style="cursor:pointer"
    >{{ item }}</div>
  </div>
</template>

<script>
export default {
  name: 'List',
  /**
   *
   * 本页面为子组件
   *
   *
   * 父子组件之间的通信就是 props down,events up，
   * 父组件通过 属性props向下传递数据给子组件，
   * 子组件通过 事件events 给父组件发送消息。
   */

  /**
   * 2.子组件通过props，引用指定的父组件的变量
   */
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      innerList: []
    }
  },
  watch: {
    /**
     *3. watch 是 Vue 侦听器，可以实时监控数据变化，进而响应数据变化。
       子组件通过 watch 监听父组件 props 的 list，将其变化后值赋给子组件数据。
        封装子组件 ListItem
     */
    list(val) {
      this.innerList = val
    }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    delDataFromList(index) {
      this.innerList.splice(index, 1)
    }
  },
  computed: {}
}
</script>

<style scoped lang="scss"></style>
