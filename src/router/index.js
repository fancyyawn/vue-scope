import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Layout from '@/components/Layout'
import UserPage from '@/components/user-manage/UserPage'
import PostEditor from '@/components/post-manage/PostEditor'
import ProductCatalog from '@/components/product/ProductCatalog'
import Echarts from '../components/charts/echarts'


Vue.use(Router);

export default new Router({
  mode: 'history',
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
    {
      path: '/product',
      component: Layout,
      name: '商品管理',
      iconCls: 'el-icon-message',
      children: [
        {path: 'catalog', name: '商品列表', component: ProductCatalog},
      ]
    },
    {
      path: '/chart',
      component: Layout,
      name: '图表',
      iconCls: 'el-icon-message',
      children:[
        {path: 'echarts', name: 'Echarts', component: Echarts}
      ]
    }
  ]
})