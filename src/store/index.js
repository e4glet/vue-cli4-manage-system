
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 存储token
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
    //定义菜单状态
    collapsed: false,
    topNavState: 'home',
    leftNavState: 'home'
  },
  mutations: {
    login(state,user){
      state.Authorization=user;
      localStorage.setItem('Authorization', user)
    }
  },
  actions: {
  },
  modules: {
  }
})
