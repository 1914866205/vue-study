<template>

  <ul
    class="infinite-list list"
    v-infinite-scroll="load"
    style="overflow:auto"
  >
    <li
      class="infinite-list-item"
      v-for="item in students"
      :key="item"
      style=" border-radius: 100px;"
    >
      <img
        class="img"
        :src="item.avatarUrl"
      />
      <div class="info">
        <p class="name">姓名： {{ item.fullName }}</p>
        <p class="phone">手机号：{{ item.phoneNumber }}</p>
        <p class="studentNo">学号：{{ item.studentNo }}</p>
        <p class="score">成绩：{{ item.score }} 分</p>
        <p class="roles">权限：{{ item.roles.length == 6 ? '助教' : '成员' }}</p>
        <!-- <div class="rank"> -->

        <p class="discuss">
          {{
            item.ranking > 30
              ? '要加油哦！'
              : item.ranking > 10
              ? '再接再厉！'
              : item.ranking > 5
              ? '前十！'
              : item.ranking > 3
              ? '前五！'
              : item.ranking > 2
              ? '前三！'
              : item.ranking > 1
              ? '第二！'
              : '第一！'
          }}

        </p>
        <p class="ranking">班课排名： {{ item.ranking }}</p>

      </div>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'List',
  data() {
    return {
      students: []
    }
  },
  components: {},
  created() {
    this.axios
      .get('http://120.26.177.51:8080/api/user/all')
      .then((response) => (this.students = response.data))
    console.log(this.students)
  },
  mounted() {},
  methods: {},
  computed: {}
}
</script>

<style scoped lang="scss">
.list {
  height: auto;
  font-size: 20px;
  font-weight: 600;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
    Verdana, sans-serif;
}
li {
  line-height: 10%;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  height: 500px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.img {
  position: relative;
  margin-left: -40%;
  margin-top: 10%;
  width: 40%;
  border-radius: 10%;
  border: solid 3px black;
}
.info {
  position: relative;
  margin-top: -35%;
  margin-left: 47%;
}
.name {
  font-size: 30px;
}
.phone {
}
.studentNo {
}
.score {
}
.roles {
}
.rank {
  display: inline;
  width: 50%;
  line-height: 100%;
}
.ranking {
  margin-top: 13%;
}

.discuss {
  margin-left: 2%;
}
</style>
