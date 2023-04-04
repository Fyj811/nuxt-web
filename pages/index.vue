<template>
  <section>
    首页
    <nuxt-link to="/about">去about页面</nuxt-link>
    <a-button type="primary" @click="sysLogin">登录</a-button>
    
    <nuxt-link to="/about">去about页面</nuxt-link>

    <a-button @click="getDataList">获取列表数据</a-button>


    <!-- <swiper
    :height="300"
    :slides-per-view="1"
    :loop="true"
    :effect="'creative'"
    :autoplay="{
      delay: 1000,
      disableOnInteraction: true
    }"
    >
      <swiper-slide style="background-color:#c33;color:#fff;">
        1
      </swiper-slide>
      <swiper-slide style="background-color:#f99;color:#fff;">
        2
      </swiper-slide>
    </swiper> -->

  </section>
</template>
<script lang="ts" setup>
import { h } from 'vue';
import { Spin } from 'ant-design-vue'
  useHead({
    title:'one',
    meta: [
      { hid: 'keywords', name: 'keywords', content: '前端, keywords' }
    ]
  })
  // const config = useRuntimeConfig()
  // console.log(config)
  // const { public: { apiBase } } = useRuntimeConfig();
  // console.log(apiBase)
  const { articleApi,LoginApi,HomePageApi } = useApi()
  // const tags = articleApi.getHot()
  // console.log(tags)

  Spin.setDefaultIndicator({
    indicator: h('i', { class: 'anticon anticon-loading anticon-spin ant-spin-dot' }),
  });

  // const {spinning} = useSpin()

  // console.log(spinning)

  function sysLogin(){
    LoginApi.login({phoneNumber:'jiaolu@panpay.com',password:'j1998521'}).then(res=>{
      console.log(res)
      useCookie('token').value = res.loginToken
    }).finally(()=>{
      
    })
  }

  function getDataList(){
    HomePageApi.accountInfoBalancesList({}).then(res=>{
      console.log(res)
    })
  }



</script>