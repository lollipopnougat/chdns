<template>
  <div class="hello">
    <h2>长安大学</h2>
    <h1 class="topmargin">网络安全协会</h1>
    <img src="../assets/nmap.png"
         class="nmap" />
    <div class="pblock">
      <div class="block">
        <span class="demonstration">默认 Hover 指示器触发</span>
        <el-carousel height="150px"
                     interval="3000"
                     type="card">
          <el-carousel-item v-for="item in 4"
                            :key="item">
            <h3 class="small">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>

    <p> </p>
    <div class="pblock">
      <el-popover placement="top-start"
                  title="QQ迎新群   微信公众号"
                  width="520"
                  trigger="hover">
        <div class="iblock">
          <img src="../assets/QQR.png"
               class="QR" />
          <img src="../assets/WQR.png"
               class="QR" /></div>
        <el-button slot="reference">点击加群或关注微信公众号</el-button>
      </el-popover>
    </div>
    <p>长 </p>
    <p>大 </p>
    <p>网 </p>
    <p>络 </p>
    <p>安 </p>
    <p>全 </p>
    <p>协 </p>
    <p>会 </p>
    <footer>2019 &copy; 长安大学网络安全协会 </footer>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
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
  height: 100%;
  zoom: 1;
  background-color: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
}
.iblock {
  display: inline-block;
  text-align: center;
}
.nmap {
  width: 50%;
  height: auto;
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
  background-color: #99a9bf;
  opacity: 0.75;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
  opacity: 0.75;
}

.pblock {
  text-align: center;
  display: inline-block;
  width: 80%;
}
</style>
