<template>
  <div id="app" style="height:100%;">
    <view-box ref="viewBox">
      <keep-alive>

        <router-view></router-view>
      </keep-alive>

    </view-box>

  </div>

</template>

<script>
  import { Group, Cell, ViewBox } from 'vux'
  export default {
    name: 'app',
    components: {
      Group,
      Cell,
      ViewBox
    },
    data () {
      return {
        entryUrl: document.location.href
      }
    },
    computed: {
      isShowNav () {
        if (this.entryUrl.indexOf('hide-nav') > -1) {
          return false
        }
        return true
      }
    }
  }
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>
