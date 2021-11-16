<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/home/card">卡片视图</router-link>|
      <router-link to="/home/list">列表视图</router-link>|
      <router-link to="/welcome">欢迎页面</router-link> -->
      <router-link to="/home/card">用户页</router-link>|
      <router-link to="/home/list">会员页</router-link>|
      <router-link to="/welcome">登录页</router-link>
      <br />
      <br />
      <hr />
      <br />
      <router-link to="/home/todolist1">TotoList1</router-link>|
      <router-link to="/home/todolist2">TotoList2</router-link>|
      <router-link to="/home/todolist3">TotoList3</router-link>|
      <router-link to="/home/todolist4">TotoList4</router-link>|
      <router-link to="/home/todolist5">TotoList5</router-link>|
      <router-link to="/home/todolist6">TotoList6</router-link>|
      <router-link to="/home/todolist7">TotoList7</router-link>|
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data() {
    return {}
  },
  components: {},
  created() {},
  mounted() {},
  methods: {},
  computed: {}
}
</script>

<style scoped lang="scss">
</style>
