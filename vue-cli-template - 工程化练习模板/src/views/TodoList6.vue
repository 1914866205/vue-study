<template>
  <div style="border:solid 2px blue">
    <h1>我是TodoList6组件</h1>

    <!-- <div
      v-for="(item, index) in list"
      @click="delDataFromList(index)"
      :key="index"
    >{{ item }}</div> -->
    <div
      v-for="(item, index) in list"
      @click="delData(index)"
      :key="index"
    >{{ item }}</div>
  </div>
</template>

<script>
export default {
  /**
   * 
子组件调用父组件方法
利用 Vue 的 $parent

利用 Vue 的 $parent，实际是 Vue 的父子组件关系。
    Vue 拥有 vm.$parent API。因为本项目子组件只有一个父组件，
    所以可以直接调用父组件方法。
    如果一个子组件有多个父组件不能直接调用父组件方法，
    要确定父组件存在这个方法。并且并不推荐这种方式调用父组件方法。
    日常开发中，如果一个组件，有多个子组件，
    可以通过给子组件加 ref 属性的方式，父组件调用子组件的方法。
   */
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    },
    delDataFromList: {
      type: Function,
      delfault: () => {}
    }
  },
  name: 'List',
  data() {
    return {}
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    /**
     * 通过 this.$parent 调用父组件方法。
    通过 props 调用父组件方法
    props 可以传递各种类型数据。包括 Function 类型。
     */
    // delDataFromList(index) {
    //   this.$parent.delDataFromList(index)
    // }
    delData(index) {
      this.delDataFromList(index)
    }
  },
  computed: {}
}
</script>

<style scoped lang="scss">
</style>
