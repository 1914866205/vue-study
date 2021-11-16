<template>
  <div>
    <!-- <h3>卡片视图页面</h3> -->
    <h3>主页</h3>
    <!-- <h1>child子组件</h1>
    <button @click="sendMsgToParent">向父组件传值</button> -->
  </div>
</template>

<script>
export default {
  name: 'Card',
  data() {
    return {}
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    // sendMsgToParent() {
    //   //在响应 该点击事件的函数中使用  $emit 来触发一个自定义事件，并传递参数
    //   this.$emit('listenToChildEvent', 'this message is from child,我是子组件传来的值')
    // }
  },
  computed: {}
}
</script>

<style scoped lang="scss">
</style>
