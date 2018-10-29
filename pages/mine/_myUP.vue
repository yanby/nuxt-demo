<template>
<section class="container">
    <nav-bar/>
    <div>我的优铺</div>
</section>
</template>

<script>
import axios from "axios";
import api from '~/plugins/api.js'
import NavBar from '~/components/Nav/Nav.vue';
export default {
  head () {
    return {
      title: '我的优铺',
      meta: [
        { hid: 'description', name: 'description', content: '我的优铺' },
        { hid: 'title', name: 'title', content: '我的优铺' },
        { hid: 'keywords', name: 'keywords', content: '我的优铺' }
      ]
    }
  },
  data(){
    return{

    }
  },
  components: {
    NavBar
    
  },
  async asyncData(){
    let [pageRes, countRes] = await Promise.all([
      api.getA({
        name: 1
      }),
      api.getB({
        aaa:2
      })
    ])
    return {
      users: pageRes,
      msg: countRes
    }
  },
  created () {
    console.log(this.users)
    console.log(this.msg)
  },
  methods:{

  }
}
</script>


<style lang="less" type="text/less" scoped>
  /*@import '~/assets/css/index.less';*/
  .container {

  }


</style>

