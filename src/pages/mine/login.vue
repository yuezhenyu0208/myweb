<template>
  <div>
    <x-header>登录<a slot="right">注册</a></x-header>
    <group title="">
      <x-input title="用户名"  placeholder="输入用户名">
        <img slot="label" style="padding-right:10px;display:block;" src="../../assets/img/ios-contact.svg" width="24" height="24">
      </x-input>

      <x-input title="密码"  placeholder="输入密码">

        <img slot="label" style="padding-right:10px;display:block;" src="../../assets/img/locked.svg" width="24" height="24">
      </x-input>
    </group><br/>
    <x-button type="primary">登录</x-button><br/>

    <div style = "text-align:right;color: red">
      <label>忘记密码？</label>
    </div>
  </div>
</template>

<script>
  import { XInput, Group } from 'vux'
  export default {
    name: 'login',
    components: {
      XInput,
      Group
    }
  }
</script>

<style scoped>

</style>
