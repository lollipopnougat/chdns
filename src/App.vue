<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-container class="headerd">
          <a class="headlink">
            <img src="./assets/chdns-logo.png"
                 class="logo" />

          </a>
          <!--<span class="logo-headline">网络安全协会</span>

          <el-dropdown>
            <i class="el-icon-setting"
               style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown> -->
          <el-menu :default-active="activeIndex"
                   class="el-menu-demo"
                   mode="horizontal"
                   @select="handleSelect">
            <el-menu-item index="1">首页</el-menu-item>
            <el-submenu index="2">
              <template slot="title">各部门</template>
              <el-menu-item index="2-1">秘书处</el-menu-item>
              <el-menu-item index="2-2">竞赛部</el-menu-item>
              <el-menu-item index="2-3">宣传部</el-menu-item>
              <el-menu-item index="2-4">组织部</el-menu-item>
            </el-submenu>
            <el-menu-item index="3"><a href="https://github.com"
                 target="_blank">Github</a></el-menu-item>
          </el-menu>
          <div class="line"></div>
        </el-container>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      activeIndex: '1'
    };
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.logo {
  height: 100%;
  width: auto;
}
.headerd {
  height: 64px;
  display: block;
  text-align: left;
  border-bottom: solid 1px #e6e6e6;
}
.logo-headline {
  font-size: 40px;
  color: #409eff;
}
.headlink {
  font-size: 58px;
}
.el-menu-demo {
  float: right;
  height: 100%;
}
</style>
