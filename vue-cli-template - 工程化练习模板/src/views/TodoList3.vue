<template>
  <div style="border:solid 2px red">
    <h1>我是TodoList3组件</h1>
    <div
      v-for="(item,index) in list"
      :key="index"
      @click="delDataFromList(index)"
    >{{item}}</div>
  </div>
</template>

<script>
/**
 * emit 触发父组件方法
  emit 触发父组件方法，进而修改父组件的 list，是通常所说的单项数据流。单项数据流体现了软件工程封闭开放原则，类似 Java 的 Get 和 Set，只有通过类的内部方法才能修改类内变量。
  Vue 的 emit 方法可以触发绑定在组件上的自定义事件。
 */

/**
 * 最新体会，props，是和父组件的公共数据
 */
export default {
  name: 'List',
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {}
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    delDataFromList(index) {
      //调用父组件的方法
      this.$emit('delDataFromList', index)
    }
  },
  computed: {}
}
</script>

<style scoped lang="scss">
</style>
