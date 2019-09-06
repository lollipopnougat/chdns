<template>
  <div class="viewbox">
    <el-tabs :tab-position="tabPosition"
             v-model="activeName">
      <el-tab-pane label="秘书处"
                   name="first"
                   id="first">
        <el-card class="box-card">
          <div slot="header"
               class="clearfix">
            <span>秘书处资料卡</span>
          </div>
          <div v-for="item in saDesc"
               :key="item">
            {{ item }}
          </div>
        </el-card>
      </el-tab-pane>
      <el-tab-pane label="竞赛部"
                   name="second"
                   id="second">
        <el-card class="box-card">
          <div slot="header"
               class="clearfix">
            <span>竞赛部资料卡</span>
          </div>
          <div v-for="item in coDesc"
               :key="item">
            {{ item }}
          </div>
        </el-card>
      </el-tab-pane>
      <el-tab-pane label="宣传部"
                   name="third">
        <el-card class="box-card">
          <div slot="header"
               class="clearfix">
            <span>宣传部资料卡</span>
          </div>
          <div v-for="item in puDesc"
               :key="item">
            {{ item }}
          </div>
        </el-card>
      </el-tab-pane>
      <el-tab-pane label="组织部"
                   name="fouth">
        <el-card class="box-card">
          <div slot="header"
               class="clearfix">
            <span>组织部资料卡</span>
          </div>
          <div v-for="item in orDesc"
               :key="item">
            {{ item }}
          </div>
        </el-card>
      </el-tab-pane>
    </el-tabs>
    <br><br><br><br><br><br>
    <el-footer>
      <el-tooltip class="item"
                  effect="dark"
                  content="作者是lnp"
                  placement="top-start">
        <span class="copyright"> 2019 &copy; 长安大学网络安全协会 Powered by <a href="https://vuejs.org/">Vue.js</a> & <a href="https://element.eleme.io/">Element UI</a></span>

      </el-tooltip>
    </el-footer>
  </div>
</template>
<script>

export default {
  data () {
    return {
      tabPosition: 'left',
      activeName: this.$route.query.d,
      saDesc: ['秘书处是负责制定协会的各项规章制度，', '协助主席团开展工作并根据部门的意见负责起草有关规章制度、', '做有关工作报告、各项决议及各种文件和会议记录。', '负责各种会议活动的签到和拍照并撰写新闻稿。', '负责起草、印发所组织活动的相关文件及通知。', '监督各部门工作，向主席团汇报并提出意见和建议，', '负责管理组织财务。'],
      coDesc: ['竞赛部主要负责组织协会内部成员', '以及全校师生参与各类网络安全竞赛活动。', '进行网络安全相关的培训，', '鼓励同学们积极参加与网络安全相关的竞赛，', '提高全校师生的网络安全意识和能力。'],
      puDesc: ['是展示协会风采的窗口和平台。', '主要通过各种海报,喷绘的设计, ', '利用线上线下各种渠道,', '不断探寻更有创意的宣传方式,', '为协会设计出更多新颖的宣传品,', '为协会打响知名度,扩大影响力,', '增加同学们对协会的了解。'],
      orDesc: ['组织部主要负责组织内部培训，', '面向全校选拔出具有浓厚参赛兴趣的同学；', '建立协会网络安全资料共享库，', '不断对其进行补充和更新；', '定期组织网络安全交流活动，', '了解学生最新动态，', '并根据情况调整工作安排。']
    };
  },
  methods: {
    handleBtnClick () {
      this.activeName = this.$route.query.d;
    }
  }
};
</script>

<style>
.el-main {
  height: auto;
}
.viewbox {
  margin-top: 5px;
  width: 100%;
  display: block;
  height: 100%;
  background: url('../assets/chdns-logo-cyan.png');
  background-repeat: no-repeat;
  background-position: center center;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.el-tabs__item {
  height: 60px;
  line-height: 60px;
}
.el-tabs__active-bar {
  height: 60px !important;
}
.el-card__header {
  /* background-color: #ecf5ff; */
  border-radius: 10px 10px 0 0;
  /* box-shadow: 0 2px 5px 0 rgba(0,0,0,.1); */
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}
.clearfix span {
  color: #409eff;
  font-weight: 800;
  font-size: 25px;
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: auto;
  margin: 20px;
  border-radius: 11px 11px 5px 5px;
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
</style>
