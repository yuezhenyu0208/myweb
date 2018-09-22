<template>
  <div id="aa">
    <vue-html5-editor :content="content" :height="400"
                      @change="updateData"></vue-html5-editor>
  </div>
</template>
  <script>
    export default {
      name: 'blog_edit',
      created: function () {
      },
      methods: {
        load: function () {
          alert($('#aa').attr('id'))
        }
      }
    }
  </script>



<style scoped>

</style>
