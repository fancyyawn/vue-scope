<template>
  <el-row class="panel">
    <el-col :span="24" class="panel-top">
      <el-col :span="20" style="font-size:26px;">
        <a href="#/"><img src="../assets/logo.png" class="logo"> </a>
      </el-col>
      <el-col :span="4" class="rightbar">
        <el-dropdown trigger="click"  @command="handleMenuCommand">
          <span class="el-dropdown-link" style="color:#c0ccda;cursor: pointer;">
              <img src="../assets/user1.png" class="head"> zhacker
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>我的消息</el-dropdown-item>
            <el-dropdown-item command="/account/user-info">设置</el-dropdown-item>
            <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
            <el-dropdown-item>
              <el-input-number size="small" v-model="siderMenuSpan" :min="0" :max="5"></el-input-number>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-button type="text" size="small" style="margin-left: 10px; color:#c0ccda;" icon="menu" @click.native="toggleSiderMenu"></el-button>
      </el-col>
    </el-col>
    <el-col :span="24" class="panel-center">
      <el-col :span="siderMenuSpan">
        <!--<aside>-->
        <el-menu v-show="siderMenuSpan!= '0'" :default-active="currentPath" class="el-menu-vertical-demo"
                 @open="handleopen" @close="handleclose" @select="handleselect"
                 theme="dark" unique-opened router>
          <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
            <el-submenu v-if="!item.leaf" :index="index+''">
              <template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
              <el-menu-item v-for="child in item.children" :key="child.name" :index="item.path+'/'+child.path">{{child.name}}</el-menu-item>
            </el-submenu>
            <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path">
              <i :class="item.iconCls"></i>{{item.children[0].name}}
            </el-menu-item>
          </template>
        </el-menu>
        <!--</aside>-->
      </el-col>
      <el-col :span="24 - siderMenuSpan" class="panel-c-c">
        <!--<section class="panel-c-c">-->
        <div class="grid-content bg-purple-light">
          <el-col :span="24" style="margin-bottom:15px;" v-if="currentPath!=='/'" >
            <strong style="width:200px;float:left;color: #475669;">{{currentPathName}}</strong>
            <el-breadcrumb separator="/" style="float:right;">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item :to="{path: parentPath}" v-if="currentPathNameParent!=''">{{currentPathNameParent}}</el-breadcrumb-item>
              <el-breadcrumb-item v-if="currentPathName!=''">{{currentPathName}}</el-breadcrumb-item>
            </el-breadcrumb>
          </el-col>
          <el-col :span="24" style="background-color:#fff;box-sizing: border-box;">
            <router-view></router-view>
          </el-col>
        </div>
        <!--</section>-->
      </el-col>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: 'Layout',
    data() {
      return {
        siderMenuSpan: 4,
        currentPath: '',
        parentPath: '/',
        currentPathName: '',
        currentPathNameParent: '',
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    watch: {
      '$route'(to, from) {//监听路由改变
        this.currentPath = to.path;
        this.parentPath=to.matched[0].path;
        this.currentPathName = to.name;
        this.currentPathNameParent = to.matched[0].name;
      }
    },
    methods: {
      toggleSiderMenu(){
        if(this.siderMenuSpan != 0){
          this.siderMenuSpan=0;
        }else{
          this.siderMenuSpan=4;
        }
      },
      onSubmit() {
        console.log('submit!');
      },
      handleopen() {
        console.log('handleopen');
      },
      handleclose() {
        console.log('handleclose');
      },
      handleselect: function (a, b) {
      },
      //退出登录
      logout: function () {
        var _this = this;
        this.$confirm('确认退出吗?', '提示', {
          type: 'warning'
        }).then(() => {
          _this.$router.replace('/login');
        }).catch(() => {

        });
      },
      handleMenuCommand(command) {
        this.$router.push(command);
      }
    },
    created(){
      console.log(this.$route);
      this.currentPath=this.$route.path,
          this.parentPath=this.$route.matched[0].path
      this.currentPathName = this.$route.name;
      this.currentPathNameParent = this.$route.matched[0].name;
    }
  }
</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }

  .panel {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
  }

  .panel-top {
    height: 60px;
    line-height: 60px;
    background: #1F2D3D;
    /*background: lightgrey;*/
    color: #c0ccda;
  }

  .panel-top .rightbar{
    text-align: right;
    padding-right: 35px;
  }

  .panel-top .rightbar .head{
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin: 10px 0px 10px 10px;
    float: right;
  }

  .panel-center {
    background: #324057;
    /*background: lightgrey;*/
    position: absolute;
    top: 60px;
    bottom: 0px;
    overflow: hidden;
  }

  .panel-c-c {
    background: #f1f2f7;
    /*position: absolute;*/
    right: 0px;
    top: 0px;
    bottom: 0px;
    /*left: 230px;*/
    overflow-y: scroll;
    padding: 20px;
  }

  .logout {
    background: url(../assets/logout_36.png);
    background-size: contain;
    width: 20px;
    height: 20px;
    float: left;
  }

  .logo {
    width: 40px;
    float: left;
    margin: 10px 10px 10px 18px;
  }

  .tip-logout {
    float: right;
    margin-right: 20px;
    padding-top: 5px;
  }

  .tip-logout i {
    cursor: pointer;
  }

  .admin {
    color: #c0ccda;
    text-align: center;
  }
</style>