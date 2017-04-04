import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Layout from '@/components/Layout'
import UserPage from '@/components/user-manage/UserPage'
import PostEditor from '@/components/post-manage/PostEditor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      hidden: true,
      component: Login
    },
    {
      path:'/',
      component: Layout,
      name: '',
      hidden: true,
      children: [
        {path: '', name: '', component: Home}
      ]
    },
    {
      path: '/users',
      component: Layout,
      name: '用户管理',
      iconCls: 'el-icon-message',
      children: [
        {path: 'page', name:'用户分页', component: UserPage},
      ]
    },
    {
      path: '/posts',
      component: Layout,
      name: '博客管理',
      iconCls: 'el-icon-message',
      children: [
        {path: 'edit', iconCls: 'el-icon-edit', name:'博客编辑', component: PostEditor},
      ]
    },
  ]
})