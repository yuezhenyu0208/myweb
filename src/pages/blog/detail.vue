<template>
<div>
  <x-header>文章详情<a slot="right">分享</a></x-header>
  <br/>
  <p v-html="content"></p>
</div>
</template>

<script>
  export default {
    name: 'detail',
    data () {
      return {
        cid: '',
        content: 'a'
      }
    },
    created: function () {
      this.cid = this.$route.query.cid
      this.$http.get('/blog/' + this.cid + '?s=`').then(({data}) => {
        this.content = data.data.content
      })
    }
  }
</script>

<style scoped>

</style>
