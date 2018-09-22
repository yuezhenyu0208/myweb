<template>
  <div>
    <x-header>帐号列表<a slot="right"  @click="newshadow">新增</a></x-header>
    <panel :list="list" type="3" @on-click-item="detail" ></panel>
  </div>
</template>

<script>
  import { Panel } from 'vux'
  export default {
    name: 'shadowsock_list',
    data () {
      return {
        list: [{
          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534757052800&di=cc23f70d03e8c7f797803908eb9412b7&imgtype=0&src=http%3A%2F%2Fask.qcloudimg.com%2Fhttp-save%2Fyehe-1148782%2Fqfwcb4xrqw.png',
          fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '8388',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。'
          // url: '/component/cell'
        }]
      }
    },
    created: function () {
      this.getData()
    },
    components: {
      Panel
    },
    methods: {
      getData () {
        this.$http.get('/shadowsock').then(({data}) => {
          if (data.code === 100) {
            this.list = data.data.list
          } else {
            this.executeResult(data)
          }
        })
      },
      detail (item) {
        console.log(item.id)
        this.$router.push({path: '/shadowsock/detail', query: {id: item.id}})
      },
      newshadow () {
        this.$router.push({path: '/shadowsock/newshadow'})
        // console.log('gggggggg')
      }
    }
  }
</script>

<style scoped>

</style>
