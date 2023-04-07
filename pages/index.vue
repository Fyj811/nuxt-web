<template>
  <section>
    首页
    <nuxt-link to="/about">去about页面</nuxt-link>
    <a-button type="primary" @click="sysLogin">登录</a-button>
    
    <nuxt-link to="/about">去about页面</nuxt-link>

    <a-button @click="getDataList">获取列表数据</a-button>

    <div class="list-wrapper p-t-19 p-b-19">
      <swiper
        :slides-per-view="'auto'"
        :grab-cursor="true"
        :free-mode="true"
        :watch-slides-progress="true"
        :mousewheel="true"
      >
        <swiper-slide v-for="item in arr" :key="item[0]">
          <svg-icon :name="Object.keys(item)[0]" class="m-r-40"/>
          
        </swiper-slide>
      </swiper>
    </div>
    <p class="m-b-24"></p>

    <!-- <nuxt-icon name="AUD" style="width:27px;height:18px;font-size:40px;" filled class="m-r-40"></nuxt-icon>
    <nuxt-icon name="USD" filled></nuxt-icon>
    <nuxt-icon name="bank_statement" filled></nuxt-icon>
    <nuxt-icon name="bank_statement_active" filled></nuxt-icon> -->

    
    <!-- <ul>
      <li v-for="item in arr" :key="item[0]">{{ item }}</li>
    </ul> -->
    <!-- <VueLogo fill="green" font-size="36" /> -->

    <!-- <nuxt-svg-icon name="USD" :useOriginSize="false" fontSize="27px" />
    <nuxt-svg-icon name="account" :useOriginSize="false" fontSize="20px" /> -->
  </section>
</template>
<script lang="ts" setup>
import { h } from 'vue';
import { Spin } from 'ant-design-vue'
// import VueLogo from '@/assets/icons/USD.svg?component'
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

  const currencyList = {USD: '234', EUR: '0', GBP: '0',  CNY: '0',HKD: '0',JPY: '0',CAD: '0',AUD: '0',NZD: '0',SGD: '0',CHF: '0',SEK: '0',NOK: '0',DKK: '0',THB: '0',TRY: '0'};
  // const currencyList = {USD: '234', EUR: '0', GBP: '0'};

  const arr = Object.entries(currencyList).map(([key, value])=>{
    let newObj:{[key:string]:any} = {};
    newObj[key] = value;
    return newObj;
  })
  // .map(([key, value]) => {
  //   let newObj = {};
  //   newObj[key] = value;
  //   return newObj;
  // });

  console.log(arr)

</script>
<style lang="less" scoped>
.list-wrapper{
  box-shadow: 0px 2px 16px 0px rgba(0,0,0,0.06);
  background: #ffffff;
  border: 1px solid #e8eaed;
  border-radius: 6px;
}
</style>
<style>
.list-wrapper .swiper-slide{
  width: auto;
}
</style>