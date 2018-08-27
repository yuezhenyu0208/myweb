<template>
<div>
  <x-header>帐号详情<a slot="right">删除</a></x-header>
  <group label-width="4.5em" label-margin-right="2em" label-align="right">

    <x-input title="端口" placeholder="必填" v-model="port" value-align="right"></x-input>
    <x-input title="IP" placeholder="必填" v-model="IP"></x-input>
    <x-input title="密码" placeholder="必填" v-model="password"></x-input>
    <x-input title="加密方式" placeholder="必填" v-model="method"></x-input>
  </group>
  <x-button type="primary"  @click.native="save()">保存</x-button><br/>
</div>
</template>

<script>
  export default {
    name: 'detail',
    data () {
      return {
        port: 'a',
        IP: 'a5',
        password: 'a4',
        method: 'a2'
      }
    },
    components: {
    },
    created: function () {
      this.id = this.$route.query.id
      this.$http.get('/shadowsock/' + this.id).then(({data}) => {
        this.id = data.data.id
        this.port = data.data.title
        this.IP = data.data.ssIp
        this.password = data.data.password
        this.method = data.data.method
      })
    },
    methods: {
      save () {
        this.$http.post('/shadowsock', {
          id: this.id,
          title: this.port,
          IP: this.IP,
          password: this.password,
          method: this.method
        }).then(({data}) => {
          if (data.code === 100) {
            this.$vux.toast.text('成功', 'middle')
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
