<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        nuxt-demo
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      <el-button type="primary">主要按钮</el-button>
      <div class="links">
        <nuxt-link :to="{name:'mine-id',params:{id:1}}">首页</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import qs from "qs";
import { getData } from '~/plugins/axios.js'
import AppLogo from '~/components/AppLogo.vue'

export default {
  head () {
    return {
      title: '巅峰电影网_全网最新高清1080p电影大全_在线观看_电影下载',
      meta: [
        { hid: 'description', name: 'description', content: '巅峰电影网拥有全网海量电影资源,是一个完全免费的电影大全网站,高清1080p电影在线观看、迅雷下载就在巅峰电影网（www.waifcat.cn）。' },
        { hid: 'title', name: 'title', content: '巅峰电影网_全网最新高清1080p电影大全_在线观看_电影下载' },
        { hid: 'keywords', name: 'keywords', content: '最新电影，电影大全，在线观看，免费电影下载，巅峰电影网' }
      ]
    }
  },
  components: {
    AppLogo
  },
  mounted(){
    var data = {
      search : "朝阳"
    }
    getData('/shop/getShopList','post',data).then( res => {
      console.log(res)
    }), err => {
      console.log(err)
    }
  },
  methods:{

  }
}
</script>


<style lang="less" type="text/less" scoped>
  /*@import '~/assets/css/index.less';*/
  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
    a{
      color: #f00;
      font-size: 30px;
    }
  }

</style>

