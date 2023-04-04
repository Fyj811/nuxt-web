<template>
  <div class="app-flex app-justify-content-center p-t-40">
    <div class="user-navigation m-r-40">
      <a-menu
        v-model:selectedKeys="selectedKeys"
        style="width: 240px"
        mode="inline"
        @click="handleClick"
      >
        <a-menu-item key="/userCenter">
          <template #icon>
            <PieChartOutlined />
          </template>
          <nuxt-link to="/userCenter">基本资料</nuxt-link>
        </a-menu-item>
        <a-menu-item key="/userCenter/safety">
          <template #icon>
            <DesktopOutlined />
          </template>
          <nuxt-link to="/userCenter/safety">登录安全</nuxt-link>
        </a-menu-item>
        <a-menu-item key="/userCenter/cipherer">
          <template #icon>
            <InboxOutlined />
          </template>
          <nuxt-link to="/userCenter/cipherer">PanPay密码器</nuxt-link>
        </a-menu-item>
      </a-menu>
    </div>


    <div class="user-content">
      <NuxtPage :foobar="123" />
    </div>



    
  </div>
</template>


<script lang="ts" setup>
  import { PieChartOutlined, DesktopOutlined, InboxOutlined } from '@ant-design/icons-vue';
  import type { MenuProps } from 'ant-design-vue';
  definePageMeta({
    layout:'full-header'
  });
  const route = useRoute();
  
  const selectedKeys = ref<string[]>([route.path]);
  const handleClick: MenuProps['onClick'] = e => {
    console.log('click', e,route.path);
    //点击切换导航时  如果路由切换的时候 再去选中

    // selectedKeys.value = [route.path];
    // e.keyPath = [route.path]
    e.key = route.path
    
    // let currentRoute = route.fullPath;


  };


  watch(route,val=>{
    if(val){

    }
  })
</script>
<style scoped>
.user-content{
  width: 840px;
  min-height: 500px;
  background: #ffffff;
  border: 1px solid #e8eaed;
  border-radius: 6px;
  -webkit-box-shadow: 0px 2px 16px 0px rgb(0 0 0 / 6%);
  box-shadow: 0px 2px 16px 0px rgb(0 0 0 / 6%);
}
</style>

