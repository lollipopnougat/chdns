<template>
  <el-container>
    <el-main>
      <div id="btn">
        <el-button @click="visible = true">Button</el-button>
        <el-dialog :visible.sync="visible"
                   title="Hello world">
          <p>Try Element</p>
        </el-dialog>
      </div>
    </el-main>
  </el-container>

</template>

<script>
export default {
  name: 'HelloWorld2',
  el: '#btn',
  data () {
    return {
      visible: false
    };
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
</style>
