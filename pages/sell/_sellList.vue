<template>
<section class="container">
    <nav-bar/>
    <div>销售项目</div>
</section>
</template>

<script>
import NavBar from '~/components/Nav/Nav.vue';
export default {
  head () {
    return {
      title: '销售项目',
      meta: [
        { hid: 'description', name: 'description', content: '销售项目' },
        { hid: 'title', name: 'title', content: '销售项目' },
        { hid: 'keywords', name: 'keywords', content: '销售项目' }
      ]
    }
  },
  components: {
    NavBar,

  },
  methods: {
    
  },
  mounted(){
    
  }
}
</script>

<style lang="less" type="text/less" scoped>

</style>

