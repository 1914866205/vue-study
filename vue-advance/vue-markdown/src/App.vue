<template>
  <div class="nav">
    <img
      class="nav-icon"
      src="https://dss1.bdstatic.com/6OF1bjeh1BF3odCf/it/u=1347704814,3463690847&fm=74&app=80&f=PNG&size=f121,121?sec=1880279984&t=cff855b060e9fcc1cc2bbb16203faff2"
    >
    <p class="notebookName">我的第一个笔记本-事在人为。 -印象笔记</p>
    <div class="tool">
      <div class="tool-btn">文件</div>
      <div class="tool-btn">编辑</div>
      <div class="tool-btn">查看</div>
      <div class="tool-btn">笔记</div>
      <div class="tool-btn">格式</div>
      <div class="tool-btn">工具</div>
      <div class="tool-btn">帮助</div>
    </div>
    <hr>
    <div class="tool">
      <div class="tool-btn">
        <img
          class="tool-img"
          src="../src/assets/img/flush.png"
        />
        同步
      </div>
      <div class="tool-btn">
        <img
          class="tool-img"
          src="..//src/assets//img//secuity.png"
        />
        密码锁</div>
      <div class="tool-btn">
        <img
          class="tool-img"
          src="..//src/assets//img//st.png"
        />查看印象识堂</div>
      <div class="tool-btn">
        <img
          class="tool-img"
          src="..//src/assets//img//user.png"
        />个人主页</div>
      <div class="tool-btn">
        <img
          class="tool-img"
          src="..//src/assets//img//message.png"
        />我的消息</div>
    </div>
    <hr>
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.nav {
  width: 100%;
}
.nav-icon {
  margin-left: 10px;
  margin-top: 4px;
  width: 17px;
  height: 17px;
}

.notebookName {
  color: black;
  margin-top: 3px;
  font-weight: 18px;
  display: inline-block;
}
.tool {
  margin-top: 10px;
  margin-left: 10px;
}
.tool-img {
  width: 17px;
  height: 17px;
}
.tool-btn {
  display: inline-block;
  margin-right: 10px;
  cursor: pointer;
  font-weight: 24px;
}

.tool-btn:hover {
  background-color: #00bcd4;
}
</style>
