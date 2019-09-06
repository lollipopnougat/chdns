<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-container class="headerd">
          <a class="headlink">
            <img src="./assets/chdns-logo.png"
                 class="logo" />
            <img src="./assets/chdns-logos.png"
                 class="logos" />
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
          <el-menu :default-active="this.$route.fullPath"
                   router-mode="horizontal"
                   class="el-menu-demo"
                   mode="horizontal"
                   :router="true"
                   @select="handleSelect">
            <el-menu-item index="/Home">首页</el-menu-item>
            <el-submenu index>
              <template slot="title">各部门</template>
              <el-menu-item index="/Department?d=first"
                            route="/Department?d=first"
                            :hidden="isHid">秘书处</el-menu-item>
              <el-menu-item index="/Department?d=first"
                            route="/Department?d=second"
                            :hidden="isHid">竞赛部</el-menu-item>
              <el-menu-item index="/Department?d=first"
                            route="/Department?d=third"
                            :hidden="isHid">宣传部</el-menu-item>
              <el-menu-item index="/Department?d=first"
                            route="/Department?d=fouth"
                            :hidden="isHid">组织部</el-menu-item>
            </el-submenu>
            <el-menu-item index="/"
                          @click="openGithub">
              <a href="javascript:void(0);">
                <svg aria-labelledby="simpleicons-github-dark-icon"
                     lang=""
                     role="img"
                     viewBox="0 0 24 24"
                     class="github"
                     xmlns="http://www.w3.org/2000/svg">
                  <title id="simpleicons-github-icon"
                         lang="en">
                    GitHub Dark icon
                  </title>
                  <path fill="#7F8C8D"
                        d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                </svg>Github</a>
            </el-menu-item>
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
      isHid: false
    };
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath);
    },
    openGithub () {
      const h = this.$createElement;
      this.$confirm('即将打开Github, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '打开成功!'
        });
        window.open('https://github.com/lollipopnougat/chdns');
      }).catch(() => {
        this.$notify({
          title: '已取消',
          message: h('i', { style: 'color: teal' }, '似乎您对Github不感兴趣呢')
        });
      });
    }
  },
  watch: {
    $route: {
      handler: function (val, oldVal) {
        console.log(val);
        if (val.path === '/Department') {
          this.isHid = true;
        } else {
          this.isHid = false;
        }
      }
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
  margin: 0;
}

@media screen and (min-width: 635px) {
  .logo {
    height: 100%;
    width: auto;
  }
  .logos {
    display: none;
  }
}

@media screen and (max-width: 635px) and (min-width: 433px) {
  .logo {
    display: none;
  }
  .logos {
    height: 100%;
    width: auto;
  }
}
@media screen and (max-width: 433px) {
  .logo {
    display: none;
  }
  .logos {
    display: none;
  }
  .github {
    display: none;
  }
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

.github {
  width: 30px;
  height: auto;
  margin-right: 5px;
}
.el-main {
  padding: 0 !important;
}

a:hover {
  color: #409eff;
  text-decoration: underline;
}
a:link {
  color: #909399;
  text-decoration: none;
}
a:visited {
  color: #909399;
}
.el-message-box {
  width: auto !important;
}
</style>
