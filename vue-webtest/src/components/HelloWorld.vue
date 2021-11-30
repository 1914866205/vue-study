<template>
  <div class="hello">
    <h1>涛涛的Web作业</h1>
    <!-- <h1>{{ name }}</h1> -->
    <h3>CSS常用属性与动画特效</h3>
    <br />
    <ul>
      <li><a href="" target="_blank" rel="noopener">旋转动画墙</a></li>
      <li><a href="" target="_blank" rel="noopener">关键帧动画</a></li>
      <li><router-link to="carousel">轮播图特效</router-link></li>
    </ul>
    <br />
    <h3>JavaScript 操作DOM元素</h3>
    <br />
    <ul>
      <li><router-link to="register">注册</router-link></li>
      <li><router-link to="login">登录</router-link></li>
    </ul>
    <br />
    <h3>Web页面布局应用</h3>
    <br />
    <ul>
      <li><a href="" target="_blank" rel="noopener">抗击疫情</a></li>
      <li><a href="" target="_blank" rel="noopener">美丽家乡</a></li>
      <li><a href="" target="_blank" rel="noopener">中国梦</a></li>
      <li><router-link to="studydangshi">学习党史</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      // name: this.$store.state.user.username,
    };
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
