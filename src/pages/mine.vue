<template>
<div>
  <blur :blur-amount=40 :url="url" >
    <p class="center"><img :src="url" @click="goLink"></p>
    <p align="center" @click="goLink">点击登录</p>
  </blur>
  <group label-width="5em" >
    <cell primary="content" title="个性签名" value="WeUI 是一套同微信原生视觉体验一致的基础样式库,由微信官方设计团队为微信内网页和微信小程序量身设计"></cell>
    <!--<cell title="flex-start" align-items="flex-start" value="long long long longlong longlong longlong longlong longlong longlong longlong longlong long"></cell>-->
  </group>
  <group >
    <cell title='我的资料' is-link link="/index"></cell>
    <cell title='我的钱包' is-link></cell>
    <cell title='设置' is-link></cell>
    <!--<cell :title="'General'" is-link>
      <img slot="icon" width="20" style="display:block;margin-right:5px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=">
    </cell>-->
  </group>

  <!--<myfoot></myfoot>-->
</div>
</template>

<script>
  import { Blur, Group, Cell } from 'vux'
  export default {
    components: { Blur, Group, Cell },
    name: 'mine',
    data () {
      return {
        url: 'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg'
      }
    },
    methods: {
      goLink: function () {
        // self.location = '/#/login'
        // window.location.href = '/#/login'
        this.$router.push({path: '/login'})
      }
    }
  }
</script>

<style scoped>
  .center {
    text-align: center;
    padding-top: 20px;
    color: #fff;
    font-size: 18px;
  }
  .center img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 4px solid #ececec;
  }
</style>
