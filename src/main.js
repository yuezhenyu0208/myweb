// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router/index'
import myhead from './components/myheader'
import { TransferDom, XHeader, XButton, cookie, XInput, Group, Toast, ToastPlugin } from 'vux'
import axios from 'axios'
import querystring from 'querystring'
import Qs from 'qs'
import '../static/js/jquery.min.js'
// import '../static/js/Eleditor.min.js'
// import '../static/js/webuploader.min.js'
// 全局变量

import initRichText from './initHTMLEditor'
initRichText()
var rootApi = process.env.API
const $axios = axios.create({
  baseURL: rootApi,
  withCredentials: true,
  timeout: 5000,
  transformRequest: [function (data) {
    data = Qs.stringify(data)
    return data
  }],
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
// axios.defaults.withCredentials=true
Vue.prototype.executeResult = function (data) {
  if (data.code === 105) {
    this.$cookie.remove('token')
    this.$router.push({path: '/login'})
  }
}
Vue.prototype.$http = $axios
Vue.prototype.$cookie = cookie

Vue.use(querystring)
Vue.component('XHeader', XHeader)
Vue.component('XButton', XButton)
Vue.directive('transfer-dom', TransferDom)
// Vue.component('myfoot', myfoot)
Vue.component('myhead', myhead)
Vue.component('XInput', XInput)
Vue.component('Group', Group)
Vue.component('Toast', Toast)
Vue.use(ToastPlugin)
/* import VueRouter from 'vue-router'
import Home from './components/HelloFromVux'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Home
}]

const router = new VueRouter({
  routes
}) */

FastClick.attach(document.body)

Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  console.log(to.path === '/login')
  console.log(to.path)
  if (cookie.get('token') === '100' && to.path === '/login') {
    next({
      path: '/index'
    })
    return
  }
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 这里判断用户是否登录，我例子中是验证本地存储是否有token
    if (cookie.get('token') !== '100') {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
      return
    }
  }
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
