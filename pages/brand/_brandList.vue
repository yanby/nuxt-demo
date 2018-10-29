<template>
<section class="container">
    <nav-bar/>
    <div>品牌库</div>
</section>
</template>

<script>
import NavBar from '~/components/Nav/Nav.vue';
export default {
  head () {
    return {
      title: '品牌库',
      meta: [
        { hid: 'description', name: 'description', content: '品牌库' },
        { hid: 'title', name: 'title', content: '品牌库' },
        { hid: 'keywords', name: 'keywords', content: '品牌库' }
      ]
    }
  },
  components: {
    NavBar

  },
  methods: {
    
  },
  mounted(){
    
  }
}
</script>

<style lang="less" type="text/less" scoped>

</style>

