<template>
  <div>
    <x-header>登录<a slot="right">注册</a></x-header>
    <group title="">
      <x-input title="用户名"  placeholder="输入用户名" v-model="username">
        <img slot="label" style="padding-right:10px;display:block;" src="../../assets/img/ios-contact.svg" width="24" height="24">
      </x-input>

      <x-input title="密码"  placeholder="输入密码" v-model="password">

        <img slot="label" style="padding-right:10px;display:block;" src="../../assets/img/locked.svg" width="24" height="24">
      </x-input>
    </group><br/>
    <x-button type="primary" @click.native="login()">登录</x-button><br/>

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
    },
    data () {
      return {
        username: 'admin',
        password: '123456'
      }
    },
    methods: {
      login () {
        this.$http.post('/user/login', {
          username: this.username,
          password: this.password
        }).then(({data}) => {
          if (data.code === 100) {
            // document.cookie = 'token=100'
            this.$cookie.set('token', 100)
            var redirect = this.$route.query.redirect
            if (typeof redirect === 'undefined') {
              this.$router.push({path: '/mine'})
            } else {
              this.$router.push({path: redirect})
            }
            /* console.log(redirect)
            console.log(typeof redirect === 'undefined')
            console.log(redirect === null) */
            //
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
