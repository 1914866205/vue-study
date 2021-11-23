<template>
  <div style="margin-top: -60px">
    <div class="top"><img src="../assets/image/renminwang.png" /></div>
    <div><img src="../assets/image/ph_top.jpg" width="100%" /></div>
    <div class="nav">
      <div class="sub">
        <div class="nav-sub">重要论述</div>
        <div
          class="nav-sub"
          @mouseover="
            (ifShowSubMenu1 = true),
              (ifShowSubMenu2 = false),
              (ifShowSubMenu3 = false),
              (ifShowSubMenu4 = false),
              (ifShowSubMenu5 = false)
          "
        >
          要闻要论
        </div>
        <div
          class="nav-sub"
          @mouseover="
            (ifShowSubMenu2 = true),
              (ifShowSubMenu1 = false),
              (ifShowSubMenu3 = false),
              (ifShowSubMenu4 = false),
              (ifShowSubMenu5 = false)
          "
        >
          动态进展
        </div>
        <div
          class="nav-sub"
          @mouseover="
            (ifShowSubMenu3 = true),
              (ifShowSubMenu1 = false),
              (ifShowSubMenu2 = false),
              (ifShowSubMenu4 = false),
              (ifShowSubMenu5 = false)
          "
        >
          媒体集萃
        </div>
        <div
          class="nav-sub"
          @mouseover="
            (ifShowSubMenu4 = true),
              (ifShowSubMenu1 = false),
              (ifShowSubMenu2 = false),
              (ifShowSubMenu3 = false),
              (ifShowSubMenu5 = false)
          "
        >
          为民办事
        </div>
        <div
          class="nav-sub"
          @mouseover="
            (ifShowSubMenu5 = true),
              (ifShowSubMenu1 = false),
              (ifShowSubMenu2 = false),
              (ifShowSubMenu3 = false),
              (ifShowSubMenu4 = false)
          "
        >
          党史资料
        </div>
      </div>
    </div>
    <div
      @mouseleave="
        (ifShowSubMenu1 = false),
          (ifShowSubMenu2 = false),
          (ifShowSubMenu3 = false),
          (ifShowSubMenu4 = false),
          (ifShowSubMenu5 = false)
      "
    >
      <div class="sub-menu" v-if="ifShowSubMenu1">
        <div class="sub-menu-item">高层动态</div>
        <div class="sub-menu-item">权威发布</div>
        <div class="sub-menu-item">中央宣讲团</div>
        <div class="sub-menu-item">要闻</div>
        <div class="sub-menu-item">要论</div>
      </div>

      <div class="sub-menu" v-if="ifShowSubMenu2">
        <div class="sub-menu-item">地方</div>
        <div class="sub-menu-item">部委</div>
        <div class="sub-menu-item">企业</div>
        <div class="sub-menu-item">高校</div>
        <div class="sub-menu-item">体会</div>
        <div class="sub-menu-item">感悟</div>
        <div class="sub-menu-item">学习实践</div>
      </div>
      <div class="sub-menu" v-if="ifShowSubMenu3">
        <div class="sub-menu-item">特别推荐</div>
        <div class="sub-menu-item">党史百年</div>
        <div class="sub-menu-item">理论·经验</div>
      </div>

      <div class="sub-menu" v-if="ifShowSubMenu4">
        <div class="sub-menu-item">我为群众办实事</div>
        <div class="sub-menu-item">经验做法征集</div>
        <div class="sub-menu-item">领导留言板</div>
        <div class="sub-menu-item">榜样在身边</div>
        <div class="sub-menu-item">互动交流</div>
      </div>
      <div class="sub-menu" v-if="ifShowSubMenu5">
        <div class="sub-menu-item">党的基本知识</div>
        <div class="sub-menu-item">党史百科</div>
        <div class="sub-menu-item">百年影像</div>
        <div class="sub-menu-item">红色展馆</div>
      </div>
    </div>

    <div>
      <div class="title-position">
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
            <li class="content-right-item">“七一”重要讲话</li>
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
      <div class="content-mid">
        <div class="content-mid-body-item">
          <div class="content-mid-title">
            <img
              src="../assets/image/content-title-icon.png"
              width="30px"
              height="30px"
            />
            部署要求
          </div>
          <div class="content-mid-items">
            <div class="content-mid-item">
              <li>
                党史学习教育领导小组印发《关于充分发挥基层党组织战斗堡垒...
              </li>
            </div>
            <div class="content-mid-item">
              <li>
                党史学习教育领导小组印发《关于深入推进“我为群众办实事”实...
              </li>
            </div>
            <div class="content-mid-item">
              <li>中办印发通知：要深入领会“七一”重要讲话的重大意义</li>
            </div>
            <div class="content-mid-item">
              <li>中办印发通知：在全社会开展“四史”宣传教育</li>
            </div>
          </div>
        </div>
        <div class="content-mid-body-item">
          <div class="content-mid-title">
            <img
              src="../assets/image/content-title-icon.png"
              width="30px"
              height="30px"
            />
            要闻要论
          </div>
          <div class="content-mid-items">
            <div class="content-mid-item">
              <li>深化对新时代党的创新理论的理解和掌握...</li>
            </div>
            <div class="content-mid-item">
              <li>牢记中国共产党是什么、要干什么...</li>
            </div>
            <div class="content-mid-item">
              <li>高扬新时代中国共产党人的思想旗帜</li>
            </div>
            <div class="content-mid-item">
              <li>马克思主义中国化新的飞跃</li>
            </div>
          </div>
        </div>
      </div>
      <div class="content-mid-2-all">
        <div class="content-mid-2-left">
          <div class="content-mid-2-left-title">
            <img src="../assets/image/content-mid-2-title.png"  width="500px"/>
          </div>
          <div class="content-mid-2-left-content">
            <div class="content-mid-2-left-content-item">
              <li>习近平：努力成为可堪大用能担重任的栋梁之才</li>
            </div>
            <div class="content-mid-2-left-content-item">
              <li>习近平：党的伟大精神永远是党和国家的宝贵精神财富</li>
            </div>
            <div class="content-mid-2-left-content-item">
              <li>习近平：总结党的历史经验 加强党的政治建设</li>
            </div>
            <div class="content-mid-2-left-content-item">
              <li>习近平：加强党史军史教育 确保官兵听党话 跟党走</li>
            </div>
            <div class="content-mid-2-left-content-item">
              <li>习近平考察西藏：学史力行是党史学习教育的落脚点</li>
            </div>
          </div>
        </div>
        <div class="content-mid-2-right">
          <div class="content-mid-2-right-title">
            <img src="../assets/image/content-mid-2-right.png" width="250px"/>
          </div>
          <div class="content-mid-2-right-down">
            <div class="content-mid-2-right-down-left-video"></div>
            <div class="content-mid-2-right-down-right-title">
              习近平在中央党校（国家行政学院）中青年干部培训班开班式上发表重要讲话
            </div>
            <div class="content-mid-2-right-down-right-content">
              年轻干部生逢伟大时代，是党和国家事业发展的生力军，必须练好内功、提升修养，做到信念坚定、对党忠诚，注重实际、实事求是。
            </div>
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
      ifShowSubMenu1: false,
      ifShowSubMenu2: false,
      ifShowSubMenu3: false,
      ifShowSubMenu4: false,
      ifShowSubMenu5: false,
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
  height: 80px;
  margin-left: 14%;
}
.nav-sub {
  width: 12%;
  height: 80px;
  line-height: 80px;
  display: inline-block;
  cursor: pointer;
}

/**二级导航栏 */
.sub-menu {
  background-color: #f5f5f7;
  color: black;
  width: 100%;
  height: 80px;
  font-family: "Courier New", Courier, monospace;
  font-size: x-large;
  font-weight: 600;
}
.sub-menu-item {
  width: 12%;
  height: 80px;
  line-height: 80px;
  display: inline-block;
  cursor: pointer;
}
.title-position {
  margin-top: 1%;
}
.title {
  color: #8b0000;
  font-family: "Courier New", Courier, monospace;
  font-size: x-large;
  font-weight: 900;
  cursor: pointer;
}
.title:hover {
  color: #cc0000;
  text-decoration: underline;
}
.content {
  width: 100%;
  height: 390px;
}
.lunbo {
  display: inline-block;
  margin-left: 14%;
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
.sub-menu-item:hover {
  color: #910007;
  border-bottom-style: solid;
}

.content-right-item:hover {
  color: #cc0000;
  text-decoration: underline;
}
.content-right-title:hover {
  color: #cc0000;
  text-decoration: underline;
}
.content-mid {
  position: relative;
  width: 100%;
  height: 250px;
}
.content-mid-body-item {
  position: relative;
  display: inline-block;
  width: 34%;
  margin-left: 50px;
}
.content-mid-title {
  font-family: "Courier New", Courier, monospace;
  font-size: 30px;
  font-weight: 999;
  text-align: left;
  width: 50%;
  margin-left: 2%;
  margin-top: 7%;
}
.content-mid-items {
  text-align: left;
  margin-top: 10px;
}
.content-mid-item {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  margin-top: 10px;
}
.content-mid-item:hover {
  color: #cc0000;
  text-decoration: underline;
  cursor: pointer;
}
.content-mid-2-all{
  background-color: #f5f5f7;
  width: 100%;
  height: 400px;
}
.content-mid-2-left{

}
.content-mid-2-left-title{}
.content-mid-2-left-content{}
.content-mid-2-left-content-item{}
.content-mid-2-right{}
.content-mid-2-right-title{}
.content-mid-2-right-down{}
.content-mid-2-right-down-left-video{}
.content-mid-2-right-down-right-title{}
.content-mid-2-right-down-right-content{}


</style>
