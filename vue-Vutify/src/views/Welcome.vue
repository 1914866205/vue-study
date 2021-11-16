<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">进入主页</router-link>
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

<style scoped lang="scss"></style>
