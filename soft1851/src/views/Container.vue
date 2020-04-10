<template>
  <el-tabs type="border-card">
    <el-tab-pane>
      <span slot="label">
        <router-link to="/welcome">欢迎页面</router-link>
      </span>
    </el-tab-pane>
    <el-tab-pane label="卡片视图">
      <span slot="label">
        <router-link to="/home/card">卡片视图</router-link>
      </span>
    </el-tab-pane>
    <el-tab-pane label="列表视图">
      <span slot="label">
        <router-link to="/home/list">列表视图</router-link>
      </span>
    </el-tab-pane>
    <router-view />
  </el-tabs>
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
  methods: {
    // 跳转页面方法
    goHome() {
      alert('ss')
      // this.$router.push('/home/list')
    }
  },
  computed: {}
}
</script>

<style scoped lang="scss">
* {
  border: 0;
  padding: 0;
}
</style>
