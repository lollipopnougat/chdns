<template>
  <div class="hello">

    <h2>长安大学</h2>
    <h1 class="topmargin">网络安全协会</h1>
    <img src="../assets/nmap.png"
         class="nmap" />

    <h3 class="demonstration">协会职能</h3>
    <div class="Desctext">
      <p v-for="item in Desc"
         :key="item">{{item}}</p>
    </div>
    <h3 class="demonstration">协会特色活动</h3>
    <div class="Desctext">
      <p v-for="item in acDesc"
         :key="item">{{item}}</p>
    </div>
    <div class="pblock">
      <div class="block">
        <span class="demonstration">协会培训资料</span><br>
        <el-carousel height="30vw"
                     :interval="5000"
                     type="card"
                     arrow="never"
                     class="lb">
          <el-carousel-item>
            <iframe src="//player.bilibili.com/player.html?aid=68628881&cid=118940535&page=1"
                    crolling="no"
                    border="0"
                    frameborder="no"
                    framespacing="0"
                    allowfullscreen="true"
                    class="bili">
            </iframe>
          </el-carousel-item>
          <el-carousel-item>
            <iframe src="//player.bilibili.com/player.html?aid=68637885&cid=118954416&page=1"
                    scrolling="no"
                    border="0"
                    frameborder="no"
                    framespacing="0"
                    allowfullscreen="true"
                    class="bili">
            </iframe>
          </el-carousel-item>
          <el-carousel-item>
            <iframe src="//player.bilibili.com/player.html?aid=71714798&cid=124272737&page=1"
                    scrolling="no"
                    border="0"
                    frameborder="no"
                    framespacing="0"
                    allowfullscreen="true"
                    class="bili">
            </iframe>
          </el-carousel-item>

          <el-carousel-item>
            <iframe src="//player.bilibili.com/player.html?aid=71721428&cid=124280053&page=1"
                    scrolling="no"
                    border="0"
                    frameborder="no"
                    framespacing="0"
                    allowfullscreen="true"
                    class="bili">
            </iframe>
          </el-carousel-item>
          <el-carousel-item>
            <iframe src="//player.bilibili.com/player.html?aid=71922013&cid=124620885&page=1"
                    scrolling="no"
                    border="0"
                    frameborder="no"
                    framespacing="0"
                    allowfullscreen="true"
                    class="bili"> </iframe>
          </el-carousel-item>
          <el-carousel-item>
            <iframe src="//player.bilibili.com/player.html?aid=73264847&cid=125321163&page=1"
                    scrolling="no"
                    border="0"
                    frameborder="no"
                    framespacing="0"
                    allowfullscreen="true"
                    class="bili"> </iframe>
          </el-carousel-item>
          <el-carousel-item>
            <div class="vbox">
              <h2>正在筹备中</h2>
              <p>敬请期待</p>
              <p>...</p>
            </div>
          </el-carousel-item>
          <!--<el-carousel-item v-for="item in 4"
                            :key="item">
            <h3 class="small">{{ item }}</h3>
          </el-carousel-item>-->
        </el-carousel>
      </div>
    </div>
    <div class="pblock">
      <el-popover placement="top-start"
                  title="QQ交流群"
                  trigger="click">
        <div class="iblock">
          <img src="../assets/QQR.png"
               class="QR" />
        </div>
        <el-button slot="reference"
                   type="primary"
                   plain>QQ交流群</el-button>
      </el-popover>
      <el-popover placement="top-start"
                  title="微信公众号"
                  trigger="click">
        <div class="iblock">
          <img src="../assets/WQR.png"
               class="QR" />
        </div>
        <el-button slot="reference"
                   type="primary"
                   plain>微信公众号</el-button>
      </el-popover>
      <el-button @click="BiliHome"
                 type="primary"
                 plain>B站主页</el-button>
    </div>
    <footer>
      <el-tooltip class="item"
                  effect="dark"
                  content="页面作者: lnp"
                  placement="top-start">
        <span class="copyright"> 2019 &copy; 长安大学网络安全协会 Powered by <a href="https://vuejs.org/">Vue.js</a> & <a href="https://element.eleme.io/">Element UI</a></span>

      </el-tooltip>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      Desc: ['宣传网络安全知识，促进学习网络安全技术', '同大家交流分享知识经验', '与校内社团、校级组织、学院合作', '与校外各大平台合作，培养优秀人才', '活跃校园文化，为加强校园文化建设贡献力量'],
      acDesc: ['网络安全基础知识培训', '网页设计大赛', '网络技术人才的专项培训', '网络安全攻防大赛', '更多活动敬请期待...']
    };
  },
  methods: {
    BiliHome () {
      window.open('https://space.bilibili.com/388857752/');
    },
    openHtml () {
      window.open('https://lollipopnougat.github.io/website-calculator/html/HTML1.html');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cloud {
  width: 100%;
  height: auto;
}
h1 {
  font-size: 45px;
}
h2 {
  font-size: 30px;
  color: #909399;
  margin-bottom: 10px;
  margin-top: 4px;
  padding-top: 20px;
}
.topmargin {
  margin-top: 10px;
}
.hello {
  background-image: url('../assets/bg2.png');
  background-size: cover;
  left: 0;
  width: 100%;
  zoom: 1;
  background-color: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -ms-overflow-style: hidden;
  -o-background-size: cover;
  background-position: center 0;
}
.iblock {
  display: inline-block;
  text-align: center;
}

@media screen and (max-width: 650px) {
  .nmap {
    width: 90%;
    height: auto;
  }
  .nmap-text {
    font-size: 20px;
    color: #606266;
  }
  .pblock {
    text-align: center;
    display: inline-block;
    width: 100%;
  }
}

@media screen and (min-width: 650px) {
  .nmap {
    width: 60%;
    height: auto;
    position: relative;
  }
  .nmap-text {
    top: -20vw;
    left: 0;
    font-size: 3vw;
    color: #606266;
    position: relative;
  }
  .br1 {
    display: none;
  }
  .pblock {
    text-align: center;
    display: inline-block;
    width: 100%;
    margin-top: 30px;
  }
}
@media screen and (min-width: 524px) {
  .QR {
    width: 200px;
    height: auto;
  }
}

@media screen and (max-width: 523px) {
  .QR {
    width: 50%;
    height: auto;
    display: inline;
  }
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #475669;
  opacity: 0.75;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #475669;
  opacity: 0.75;
}

.copyright {
  color: #475669;
  font-size: 12px;
}

a {
  color: #606266;
}
a:hover {
  color: #409eff;
}
.bili {
  height: 100%;
  width: 100%;
}
.demonstration {
  color: #475669;
  font-size: 30px;
  font-weight: 600;
}
.lb {
  margin-top: 20px;
}
.vbox {
  display: block;
  width: 100%;
  height: 100%;
  /* background: #99a9bf; */
}
.vbox h2 {
  color: #d3dce6;
}
.vbox p {
  color: #99a9bf;
}

.Desctext {
  text-align: center;
  font-size: 20px;
}
</style>
