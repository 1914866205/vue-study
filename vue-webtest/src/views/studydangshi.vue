<template>
  <div style="margin-top: -60px">
    <div class="top"><img src="../assets/image/renminwang.png" /></div>
    <div><img src="../assets/image/ph_top.jpg" width="100%" /></div>
    <div class="nav">
      <div class="sub">
        <div class="nav-sub">重要论述</div>
        <div class="nav-sub">要闻要论</div>
        <div class="nav-sub">动态进展</div>
        <div class="nav-sub">媒体集萃</div>
        <div class="nav-sub">为民办事</div>
        <div class="nav-sub">党史资料</div>
      </div>
    </div>
    <div>
      <div>
        <h3 class="title">
          习近平：关于《中共中央关于党的百年奋斗重大成就和历史经验的决议》的说明
        </h3>
      </div>
      <div class="content">
        <div class="lunbo">
          <Carousel autoplay v-model="value2" loop>
            <CarouselItem>
              <div class="demo-carousel">
                <img
                  class="d-block img-fluid w-100"
                  width="280"
                  height="280"
                  src="http://dangshi.people.com.cn/NMediaFile/2021/1115/MAIN202111151426310363486496193.jpg"
                  alt="image slot"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class="demo-carousel">
                <img
                  class="d-block img-fluid w-100"
                  width="280"
                  height="280"
                  src="http://dangshi.people.com.cn/NMediaFile/2021/1116/MAIN202111160926253221742818172.jpg"
                  alt="image slot"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class="demo-carousel">
                <img
                  class="d-block img-fluid w-100"
                  width="280"
                  height="280"
                  src="http://dangshi.people.com.cn/NMediaFile/2021/1112/MAIN202111120915068086961515968.jpg"
                  alt="image slot"
                />
              </div>
            </CarouselItem>
          </Carousel>
        </div>
        <div class="content-right">
          <div class="content-right-body">
            <div class="content-right-title">
              《中共中央关于党的百年奋斗重大成就和历史经验的决议》
            </div>
            <li class="content-right-item">
              尤权向党外人士通报中共十九届六中全会精神
            </li>
            <li class="content-right-item">
              百年大党的成功密码：强化理论武装 坚持实事求是
            </li>
            <li class="content-right-item">
              弘扬塞罕坝精神 推进生态文明建设 评论员文章
            </li>
            <li class="content-right-item">
              深化对新时代党的创新理论的理解和掌握
            </li>
            <!-- <li class="content-right-item">“七一”重要讲话</li> -->
          </div>
          <div class="content-right-body">
            <div class="content-right-title">
              各地基层党员干部群众热议党的十九届六中全会精神
            </div>
            <li class="content-right-item">
              书映百年伟业｜好书荐读（11月书单）
            </li>
            <!-- <li class="content-right-item">中华民族伟大复兴</li> -->

            <li class="content-right-item">
              解码六中全会精神 |“两个确立”是历史和时代的选择
            </li>
            <li class="content-right-item">
              全景展现中国共产党治国理政的实践与成效
            </li>
            <li class="content-right-item">
              北京石景山区：线上线下合力 化解矛盾纠纷
            </li>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "studydangshi",
  data() {
    return {
      value1: 0,
    };
  },
  methods: {
    mouseOver() {},
  },
};
</script>
<style>
.top {
  position: relative;
  margin-left: -62%;
  margin-top: 70px;
  margin-bottom: 10px;
}
.nav {
  background-color: #ba261a;
  width: 100%;
  height: 80px;
  color: #f6b785;
  font-family: "Courier New", Courier, monospace;
  font-size: x-large;
  font-weight: 600;
}
.sub {
  width: 70%;
  margin-left: 14%;
  margin-top: 21px;
}
.nav-sub {
  width: 12%;
  display: inline-block;
  cursor: pointer;
}
.title {
  color: #8b0000;
  font-family: "Courier New", Courier, monospace;
  font-size: x-large;
  font-weight: 900;
  margin-top: 20px;
  cursor: pointer;
}

.content {
  width: 100%;
  height: 390px;
}
.lunbo {
  display: inline-block;
  margin-left: 14%;
  margin-top: 20px;
  width: 35%;
  height: 100%;
}
.content-right {
  display: inline-block;
  margin-left: 1%;
  text-align: left;
  width: 45%;
}
.content-right-body {
  position: relative;
  display: inline-block;
  margin-top: 1%;
}
.content-right-title {
  font-weight: 700;
  font-size: large;
  margin-bottom: 20px;
  cursor: pointer;
}
.content-right-item {
  font-size: 15px;
  margin-bottom: 12px;
  margin-left: 20px;
  cursor: pointer;
}
</style>
