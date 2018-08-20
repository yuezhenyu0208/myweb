<template>
  <div>
    <tabbar v-transfer-dom style="position: fixed;" v-model='index'>
      <tabbar-item link="/index" >
        <img slot="icon" src="../assets/demo/icon_nav_button.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item >
        <img slot="icon" src="../assets/demo/icon_nav_msg.png">
        <span slot="label">分类</span>
      </tabbar-item>
      <tabbar-item show-dot link="/hello">
        <img slot="icon" src="../assets/demo/icon_nav_article.png">
        <span slot="label">消息</span>
      </tabbar-item>
      <tabbar-item badge="2" link="/mine">
        <img slot="icon" src="../assets/demo/icon_nav_cell.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Group, Cell } from 'vux'

export default {
  name: 'myfoot',
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
      index: 1
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
