<template>
  <a-config-provider :locale="currentLang">

    <LazyActivityEnter @domChange="domChange"/>
    <div style="height:60px;" v-if="activityStatus"></div>

    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </a-config-provider>
</template>
<script lang="ts" setup>
import zh from 'ant-design-vue/es/locale/zh_CN';
import hk from 'ant-design-vue/es/locale/zh_HK';
import en from 'ant-design-vue/es/locale/en_US';
import ar from 'ant-design-vue/es/locale/ar_EG';

import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import 'dayjs/locale/zh-hk'
import 'dayjs/locale/ms-my'


import { useStore } from '@/store'
import { storeToRefs } from 'pinia'
const store = useStore();


// const appConfig = useAppConfig()
// console.log(appConfig)
// console.log(useNuxtApp())
// const layout = "default";


// ConfigProvider 不包含时间类组件的国际化  需要额外引入时间库(dayjs、momentjs、date-fns 等)的国际化文件
// dayjs.locale('en');
let activityStatus = ref(true)

function domChange(val:boolean){
  activityStatus.value = val
}




const { lang } = storeToRefs(store.appStore);
watch(lang,val=>{
  if(val) currentLang.value = switchLangFun(val)
})



//首次加载获取 默认zh
const currentLang = ref(switchLangFun(store.appStore.getStateLang))




//国际化时间组件
watch(currentLang, val => {
  dayjs.locale(val.locale);
});

function switchLangFun(val:string){
  switch(val){
    case 'zh':
      return zh
    case 'en':
      return en
    case 'hk':
      return hk
    case 'ar':
      return ar
    default:
      return zh
  }
}
</script>
