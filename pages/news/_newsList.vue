<template>
<section class="container">
    <nav-bar/>
    <div>行业资讯</div>
</section>
</template>

<script>
import NavBar from '~/components/Nav/Nav.vue';
export default {
  head () {
    return {
      title: '行业资讯',
      meta: [
        { hid: 'description', name: 'description', content: '行业资讯' },
        { hid: 'title', name: 'title', content: '行业资讯' },
        { hid: 'keywords', name: 'keywords', content: '行业资讯' }
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

