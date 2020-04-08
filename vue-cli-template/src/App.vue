<template>
  <div id="app">
    <!-- <div id="nav"> -->
    <!-- <router-link to="/card">卡片视图</router-link>|
      <router-link to="/list">列表视图</router-link> -->
    <!-- <router-link to="/welcome">点击进入欢迎页</router-link> -->
    <!-- </div> -->
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>