<template>
  <el-form :model="loginForm" :rules="loginRule" ref="loginForm" label-position="left" label-width="0px" class="demo-ruleForm card-box loginform">
    <h3 class="title">系统登录</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="loginForm.account" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="loginForm.checkPass"  auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" checked style="margin:0px 0px 35px 0px;">记住密码</el-checkbox>
    <el-form-item style="width:100%;">
      <el-button type="primary" @click.native.prevent="handleSubmit2" :loading="logining">登录</el-button>
      <el-button @click.native.prevent="handleReset2">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  /* eslint-disable */
  import UsersApi from '../api/users';
  export default {
    data() {
      return {
        logining: false,
        loginForm: {
          account: 'admin',
          checkPass: '123456'
        },
        loginRule: {
          account: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            //{ validator: validaePass }
          ],
          checkPass: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            //{ validator: validaePass2 }
          ]
        },
        checked: true
      };
    },
    methods: {
      handleReset2() {
        this.$refs.loginForm.resetFields();
      },
      handleSubmit2(ev) {
        var _this = this;
        this.$refs.loginForm.validate((valid) => {
          if (valid) {
            //_this.$router.replace('/table');
            this.logining = true;
            var loginParams = { username: this.loginForm.account, password: this.loginForm.checkPass };
            UsersApi.requestLogin(loginParams).then(data => {
              this.logining = false;
              let { msg, code, user } = data;
              if (code !== 200) {
                this.$notify({
                  title: '错误',
                  message: msg,
                  type: 'error'
                });
              } else {
                localStorage.setItem('user', JSON.stringify(user));
                if (this.$route.query.redirect) {
                  this.$router.push({ path: this.$route.query.redirect });
                } else {
                  this.$router.push({ path: '/' });
                }
              }
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        })
      }
    }
  }
</script>

<style scoped>
  .card-box {
    padding: 20px;
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin-bottom: 20px;
    background-color: #F9FAFC;
    margin: 180px auto;
    width: 400px;
    border: 2px solid #8492A6;
  }

  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }

  .loginform {
    width: 350px;
    padding: 35px 35px 15px 35px;
  }
</style>
