<template>
  <el-container>
    <el-main>
      <div id="btn"
           class="btn">
        <h2>404</h2>
        <h1>啊呀，这个页面可能在火星呢...</h1>
        <el-button @click="backHome"
                   type="primary"
                   plain>返回主页</el-button>
      </div>

    </el-main>

  </el-container>

</template>

<script>
export default {
  name: 'HelloWorld2',
  el: '#btn',
  methods: {
    backHome () {
      location.href = '/';
    }
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
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
.btn {
  font-size: 40px;
  margin-top: 20px;
  color: #409eff;
}
.btn h1 {
  color: #909399;
}
</style>
