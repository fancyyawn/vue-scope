<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    created: function () {
      this.$router.replace('/login')
    }
  }
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }


  body {
    /*background-color: #324057;*/
    margin: 0px;
    padding: 0px;
    /*background: url(assets/bg1.jpg) center !important;
    background-size: cover;*/
    background: #1F2D3D;
    /*background: lightgrey;*/
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
    /*font-weight: 400;*/
    font-size:16px;
    -webkit-font-smoothing: antialiased;
  }

  #app {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
  }

  .el-submenu [class^=fa] {
    vertical-align: baseline;
    margin-right: 10px;
  }
  /*.el-submenu__title{
    background: white;
  }
  */
  .el-menu-item [class^=fa] {
    vertical-align: baseline;
    margin-right: 10px;
  }
  /*.el-menu-item{
    background: white;
  }*/

  .toolbar .el-form-item {
    margin-bottom: 10px;
  }

  .toolbar {
    background: #fff;
    padding: 10px 10px 0px 10px;
  }
</style>
