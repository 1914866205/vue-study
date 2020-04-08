<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home/card">卡片视图</router-link>|
      <router-link to="/home/list">列表视图</router-link>|
      <router-link to="/welcome">欢迎页面</router-link>
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
