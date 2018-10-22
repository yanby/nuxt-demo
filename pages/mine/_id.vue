<template>
  <section class="container">
    <el-button type="primary">主要按钮</el-button>
    <img src="~/assets/imgs/1.png" alt="">
  </section>
</template>

<script>
export default {
  head () {
    return {
      title: '111111111',
      meta: [
        { hid: 'description', name: 'description', content: '444444444444444444444444' },
        { hid: 'title', name: 'title', content: '33333333333333333333333333' },
        { hid: 'keywords', name: 'keywords', content: '22222222222222222' }
      ]
    }
  },
  components: {

  },
  mounted(){
    console.log(this.$route.params.id);
  }
}
</script>



<style lang="less" type="text/less" scoped>

</style>

