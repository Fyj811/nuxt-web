<template>
  <section class="section">
    <!-- <NuxtLoadingIndicator :duration="5000" :height="20"/> -->
    <a-layout class="section-page-layout">
      
      <a-layout-header class="header-wrapper p-inline-0">
        <!-- <div class="logo">
          <a-button type="primary" @click="switchLang('zh')">中文简体</a-button>
          <a-button type="primary" @click="switchLang('en')">英语</a-button>
          
          
        </div> -->
        
        
        <LazyWebHeader />
        
      </a-layout-header>

      <a-layout class="m-t-64">
        <LazyWebSider/>
        <a-layout class="p-l-20 p-r-20">
          <a-layout-content class="p-t-32 p-l-r-20 p-b-50">
            <slot />
          </a-layout-content>
        </a-layout>
      </a-layout>
      



      <!-- <a-layout-header>
        Header 我是头部
        <a-space>
          <a-button type="primary" @click="switchLang('zh')">中文简体</a-button>
          <a-button type="primary" @click="switchLang('en')">英语</a-button>
          <a-button type="primary" @click="switchLang('hk')">中文繁体</a-button>
          <a-button type="primary" @click="switchLang('ar')">阿拉伯语言</a-button>
        </a-space>
        
      </a-layout-header>
      <a-layout-content>
        <slot />
      </a-layout-content>

      <a-layout-footer>
        Footer  我是底部
      </a-layout-footer> -->

    </a-layout>
  </section>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { useStore } from "@/store";
const {  locale:renameLocale } = useI18n();
const store = useStore()

const currentLang = useCookie('lang')
const switchLang = (val:string)=>{
  renameLocale.value = val;
  currentLang.value = val;
  //改变store
  store.appStore.changeLang(val)
} 


</script>
<style scoped>
.ant-layout{
  background-color: #fff;
}
section.section,.section-page-layout{
  height: 100%;
}
.header-wrapper{
  background: #fff; 
  /* box-shadow: 0px 2px 6px 0px rgba(46,47,51,0.08);
  border-bottom: solid 1px #e6e6e6; */
  position: fixed;
  z-index: 999;
  width: 100%;
} 
</style>