// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router/index'
import myfoot from './components/foot'
import myhead from './components/myheader'
import { TransferDom } from 'vux'

Vue.directive('transfer-dom', TransferDom)
Vue.component('myfoot', myfoot)
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

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
