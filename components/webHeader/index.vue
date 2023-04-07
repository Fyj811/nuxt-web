<template>
  <div>
    
    <section class="p-l-28 p-r-28 app-flex app-justify-content-space-between app-align-items-center">
      <div class="full-header-left app-flex app-align-items-center">
        <nuxt-link to="/"><img class="logo" src="@/assets/logo.png" alt="" srcset=""></nuxt-link>
        <UserIdentitySwitch  class="m-l-40"/>
      </div>
      <div class="full-header-right">
        <!-- 微信入账通知 -->
        三十岁
        <!-- 站内信 -->
        <!-- 用户中心 -->
      </div>
    </section>
  </div>
</template>
<script lang="ts" setup>

</script>
<style lang="less" scoped>
section{
  background: #fff; 
  box-shadow: 0px 2px 6px 0px rgba(46,47,51,0.08);
  border-bottom: solid 1px #e6e6e6;
  min-width: 900px;
  width: 100%;
  height: 64px;
  line-height: 64px;
  .logo{
    height: 40px;
    width: auto;
  }
}
</style>