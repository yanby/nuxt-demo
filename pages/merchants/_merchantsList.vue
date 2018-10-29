<template>
<section class="container">
    <nav-bar/>
    <div>招商项目</div>
</section>
</template>

<script>
import NavBar from '~/components/Nav/Nav.vue';
export default {
  head () {
    return {
      title: '招商项目',
      meta: [
        { hid: 'description', name: 'description', content: '招商项目' },
        { hid: 'title', name: 'title', content: '招商项目' },
        { hid: 'keywords', name: 'keywords', content: '招商项目' }
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

