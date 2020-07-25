/*
 * @Author: your name
 * @Date: 2020-07-09 00:46:22
 * @LastEditTime: 2020-07-09 22:00:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edite
 * @FilePath: \vue-cli4-framwork\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
//import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/default/theme/index.css'
import '@/assets/iconfont.css'
import '@/assets/css/style.css'
/**
 * 引入axios，并将axios注入到vue
 */
import './service'

/**
 * 引入全局序列号Qs * 
 */
import Qs from 'qs';
Vue.prototype.$qs = Qs;

Vue.use(ElementUI)
Vue.config.productionTip = false
//在router里写或者main.js里写过滤验证
// router.beforeEach(function (to, from, next) {
  
//   var user = localStorage.getItem("Authorization");
    
//   if(user!=null||to.path==='/login'){
//     next();    
//   }
//   else { 

//     if (user === null || user === '') {
//       next('/login');
//     } 
//   }
// })
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
