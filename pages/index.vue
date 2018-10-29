<template>
<section class="container">
    <nav-bar/>
    <div v-for="item in msg">{{item.name}}</div>
</section>
</template>

<script>
import axios from "axios";
import { changeData } from '~/plugins/axios.js';
import NavBar from '~/components/Nav/Nav.vue';
import { url } from '~/plugins/common.js';

export default {
  head () {
    return {
      title: '卖铺宝',
      meta: [
        { hid: 'description', name: 'description', content: '卖铺宝' },
        { hid: 'title', name: 'title', content: '卖铺宝' },
        { hid: 'keywords', name: 'keywords', content: '卖铺宝' }
      ]
    }
  },
  data(){
    return{
      msg:"",
      users: "",
    }
  },
  components: {
    // AppLogo,
    NavBar
  },
  methods:{
    goSell(id){
      // alert(id);
      // this.$router.push({path: '/'});
      // this.$router.push({path: '/mine',query:{id: id}});
      // this.$router.push({name:'mine-id',query:{id: id}});
      // {name:'mine-id',params:{id:1}}
    }
  },
 
// async asyncData ({ params }) {
    // return axios({
    //   url: url + '/shop/getShopList',
    //   // url: url,
    //   method: "post",
    //   params: {
    //     name : 1
    //   }
    // }).then((res) => {
    //   console.log(res)
    //   return {
    //       msg : res.data.areas, 
    //       msg1: "哈哈哈哈哈哈啊哈哈啊",
    //       // msg2: this.msg2
    //   }
    // })

    // let { data } = await axios({
    //     method: 'post',
    //     url: url + '/shop/getShopList',
    // })
    // return { msg : data.data.areas}

    // let {pageRes, countRes} = await Promise.all([
    //   axios.post('/api/users'),
    //   axios.post('/api/users')
    // ])
    // let [pageRes, countRes] = await Promise.all([
    //   axios.post('http://api.zpb.youpuchina.com/shop/getShopList'),
    //   axios.get('http://api.zpb.youpuchina.com/show/showInfo'),
    //   // axios.get(url + '/shop/getShopList')
    // ])
    // return {
    //   users: pageRes,
    //   msg: countRes,
      
    // }
  //},

//   asyncData () {

//   return axios.get('http://lpsdaikuan.com/vloan.php', {params: { address: this.$store.state.ArticleID }})
//     .then(res => { 
//       return {Articlelist: res.data} 
//     })
// }

  created () {
    console.log(url);
    console.log(this.users)
    console.log(this.msg)
  },
 
}
</script>


<style lang="less" type="text/less" scoped>
  /*@import '~/assets/css/index.less';*/
  .container {
   /* min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;*/
  }



</style>

