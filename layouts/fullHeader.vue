<template>
  <div>
    <section class="p-l-28 p-r-28 app-flex app-justify-content-space-between app-align-items-center">
      <div class="full-header-left">
        <nuxt-link to="/"><img class="logo" src="@/assets/logo.png" alt="" srcset=""></nuxt-link>
      </div>
      <div class="full-header-right"></div>
    </section>

    
    <div>
      <slot />
    </div>
  </div>
</template>
<script lang="ts" setup>

</script>
<style lang="less" scoped>
section{
  border-bottom: solid 1px #e6e6e6;
  box-shadow: 0px 2px 6px 0px rgba(46,47,51,0.08);
  background-color: #fff;
  // position: fixed;
  z-index: 99;
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