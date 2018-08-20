<template>
  <div>
    <x-header  :right-options="{showMore: true}" @on-click-more="showMenus = true">with more menu</x-header>
    <div v-transfer-dom>
      <actionsheet :menus="menus" v-model="showMenus" show-cancel></actionsheet>
    </div>
  </div>
</template>

<script>
  import { XHeader, Actionsheet, TransferDom } from 'vux'

  export default {
    directives: {
      TransferDom
    },
    name: 'myfoot',
    components: {
      XHeader,
      Actionsheet
    },
    data () {
      return {
        menus: {
          menu1: 'Take Photo',
          menu2: 'Choose from photos'
        },
        showMenus: false
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
