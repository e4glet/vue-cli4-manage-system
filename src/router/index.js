/*
 * @Author: e4glet
 * @Date: 2020-07-09 00:46:22
 * @LastEditTime: 2020-07-09 22:23:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-cli4-framwork\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
/**
 * 引入后台模版(常用的可以预加载，不常用的可以使用懒加载)
 */
import TopNav from '@/components/nav/topNav.vue'
import LeftNav from '@/components/nav/leftNav.vue'




Vue.use(VueRouter)

//通过name和type动态加载菜单
//组件加载方式使用懒加载
const routes = [{
    path: '/',
    type: 'home',
    name: 'home',
    redirect: '/dashboard',
    component: () => import( /* webpackChunkName: "home" */ '@/views/Home.vue'),
    children: [{
        path: '/dashboard',
        name: '首页',
        meta: { title: '系统首页' }, //活动子页面打标签，这样tags可以显示
        components: {
          default: () => import( /* webpackChunkName: "topNav" */ '@/views/workbench/dashboard.vue'),
          top: TopNav,
          aside: LeftNav
        },
        leaf: true, // 只有一个节点
        iconCls: 'iconfont icon-home', // 图标样式class
        menuShow: true
      },
      {
        path: '/mySet',
        components: {
          default: () => import( /* webpackChunkName: "mySet" */ '@/views/workbench/mySettings.vue'),
          top: TopNav,
          aside: LeftNav
        },
        name: '我的文档',
        iconCls: 'el-icon-menu',
        menuShow: true,
        children: [{
            path: '/mySet/addform',
            component: () => import( /* webpackChunkName: "search" */ '@/views/workbench/mywork/addform.vue'),
            name: '新建表单',
            meta: { title: '新建表单' },
            menuShow: true
          },
          {
            path: '/mySet/management',
            component: () => import(/* webpackChunkName: "mymanage" */ '@/views/workbench/mywork/mission.vue'),
            name: '查询管理',
            meta: { title: '查询管理' },
            menuShow: true
          },
          {
            path: '/message',
            component: () => import(/* webpackChunkName: "message" */ '@/views/workbench/user/message.vue'),
            name:'系统消息',
            meta: { title: '系统消息' },
            menuShow: false  //不显示在菜单栏中
          },
          {
            path: '/user/changepwd',
            component: () => import(/* webpackChunkName: "changepwd" */ '@/views/workbench/user/changePassword.vue'),
            name:'修改密码',
            meta: { title: '修改密码' },
            menuShow: false  //不显示在菜单栏中
          }
        ]
      }
    ]
  },
  {
    path: '/docsmanager',
    type: 'docs',
    name: 'docs',
    component: () => import( /* webpackChunkName: "home" */ '@/views/Home.vue'),
    redirect: '/docsmanager/list',
    menuShow: true,
    children: [{
        path: '/docsmanager/list',
        name: '文件管理',
        meta: { title: '文件管理' },
        components: {
          default: ()=> import(/* webpackChunkName: "docsList" */ '@/views/docsmanager/index.vue'),
          top: TopNav,
          aside: LeftNav
        },
        leaf: true,
        iconCls: 'el-icon-setting',
        menuShow: true
      },
      {
        path: '/docsmanager/detail',
        name: '文件管理',
        meta: { title: '文件管理' },
        components: {
          default: ()=> import(/* webpackChunkName: "docsDetail" */'@/views/docsmanager/detail.vue'),
          top: TopNav,
          aside: LeftNav
        },
        leaf: true,
        iconCls: 'el-icon-setting',
        menuShow: false
      },
      {
        path: '/docsmanager/add',
        name: '新建文件',
        meta: { title: '新建文件' },
        components: {
          default: ()=> import(/* webpackChunkName: "docsAdd" */ '@/views/docsmanager/add.vue'),
          top: TopNav,
          aside: LeftNav
        },
        leaf: true,
        iconCls: 'el-icon-edit',
        menuShow: true
      },
      {
        path: '/docsmanager/upload',
        name: 'ICD文档导入',
        meta: { title: '文档导入' },
        components: {
          default: ()=> import(/* webpackChunkName: "docsUpload" */ '@/views/docsmanager/docsupload.vue'),
          top: TopNav,
          aside: LeftNav
        },
        leaf: true,
        iconCls: 'el-icon-upload',
        menuShow: true
      }
    ]
  },
  { //系统登录首页
    path: '/login',
    name: 'login',
    type: 'login',
    component: () => import( /* webpackChunkName: "Login" */ '@/views/Login.vue')
  },
  {
    path: '*',
    component: ()=> import(/* webpackChunkName: "Login" */ '@/components/404.vue')
  }
]

const router = new VueRouter({
  // mode: 'hash',  //hash  or history
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // console.log('to:' + to.path)
  if (to.path.startsWith('/login')) {
    window.localStorage.removeItem('Authorization')
    next()
  } else {
    let user = JSON.parse(window.localStorage.getItem('Authorization'))
    if (!user) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  }
});

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router