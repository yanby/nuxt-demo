<template>
<div class="navWrap">
    <div class="nav">
        <nuxt-link to="/"><img src="~/assets/imgs/nav/logo.png" alt="卖铺宝" class="logoImg"></nuxt-link>
        <ul>
            <li><nuxt-link :to="{name:'sell-sellList'}">销售项目</nuxt-link></li>
            <li><nuxt-link :to="{name:'merchants-merchantsList'}">招商项目</nuxt-link></li>
            <li><nuxt-link :to="{name:'brand-brandList'}">品牌库</nuxt-link></li>
            <li><nuxt-link :to="{name:'news-newsList'}">行业资讯</nuxt-link></li>
        </ul>
        <div class="floatRight">
            <dl class="telDl">
                <dt><img src="~/assets/imgs/nav/tel.png" class="loginImg"></dt>
                <dd>400&nbsp;0000&nbsp;444</dd>
            </dl>
            <dl class="loginDl">
                <dt><img src="~/assets/imgs/nav/user.png" class="loginImg"></dt>
                <dd><nuxt-link :to="{name:'mine-myUP'}">登录／我的优铺</nuxt-link></dd>
            </dl>
        </div>
    </div>
</div>    
</template>

<style lang="less" type="text/less" scoped>
@import '../../assets/css/nav.less';
</style>

