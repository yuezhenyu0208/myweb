<template>
<div>
  <x-header>设置<a slot="right">分享</a></x-header>
  <br/>
  <x-button type="warn" @click.native="logout()">退出</x-button><br/>
</div>
</template>

<script>
  export default {
    name: 'detail',
    data () {
      return {

      }
    },
    created: function () {
    },
    methods: {
      logout () {
        this.$cookie.remove('token')
        this.$http.delete('/user/logout')
        this.$router.push({path: '/index'})
      }
    }
  }
</script>

<style scoped>

</style>
