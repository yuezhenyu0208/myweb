// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router/index'
import myhead from './components/myheader'
import { TransferDom, XHeader, XButton } from 'vux'
import axios from 'axios'
import querystring from 'querystring'
import Qs from 'qs'
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
Vue.prototype.$http = $axios

Vue.use(querystring)
Vue.component('XHeader', XHeader)
Vue.component('XButton', XButton)
Vue.directive('transfer-dom', TransferDom)
// Vue.component('myfoot', myfoot)
Vue.component('myhead', myhead)
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
