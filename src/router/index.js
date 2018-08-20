import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '../pages/index'
import Mine from '../pages/mine'
import Home from '../pages/home'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    }, {
      path: '/',
      component: Index,
      children: [
        {
          path: '/index',
          component: Home
        }, {
          path: '/mine',
          component: Mine
        }, {
          path: '/hello',
          component: HelloWorld
        }
      ]
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
