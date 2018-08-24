import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '../pages/index'
import Mine from '../pages/mine'
import Home from '../pages/home'
import Login from '../pages/mine/login'
import Detail from '../pages/blog/detail'
import Setting from '../pages/mine/setting'
import BuyAccount from '../pages/shop/buy_account'

Vue.use(Router)
export default new Router({
  routes: [
    {path: '/',
      redirect: '/index'
    }, {
      path: '/',
      component: Index,
      meta: {
        title: '首页'
      },
      children: [
        {
          path: '/index',
          component: Home,
          meta: {
            title: '首页'
          }
        }, {
          path: '/mine',
          component: Mine,
          meta: {
            title: '我的'
          }
        }
      ]
    }, {
      path: '/setting',
      name: 'setting',
      component: Setting,
      meta: {
        title: '设置',
        requiresAuth: true
      }
    }, {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        title: '登录'
      }
    }, {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        title: '详情页'
      }
    }, {
      path: '/blog/detail',
      component: Detail,
      meta: {
        title: '详情页'
      }
    }, {
      path: '/buy-account',
      component: BuyAccount,
      meta: {
        title: '购买帐号',
        requiresAuth: true
      }
    }
  ]
})
/* export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    }, {
      path: '/index',
      component: Home
    }, {
      path: '/mine',
      component: Mine
    }, {
      path: '/hello',
      component: HelloWorld
    }, {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }, {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
}) */
