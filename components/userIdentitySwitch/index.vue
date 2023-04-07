<template>
  <div class="switch-wrapper">
    <a-dropdown :trigger="['click']">
      <a-button size="large" style="width:100%;">
        Button
        <!-- <DownOutlined />
        <nuxt-icon name="user_switch" filled></nuxt-icon> -->
        <svg-icon name="user_switch"/>
        <svg-icon name="switch_buiness_active"/>
        <svg-icon name="switch_buiness"/>
        <svg-icon name="switch_personal"/>
        <svg-icon name="switch_personal_active"/>

        <svg-icon name="CAD" />
      </a-button>

      <div>

      </div>


      <template #overlay>
        <a-menu>
          <a-menu-item key="0">
            <a href="http://www.alipay.com/">1st menu item</a>
          </a-menu-item>
          <a-menu-item key="1">
            <a href="http://www.taobao.com/">2nd menu item</a>
          </a-menu-item>
          <a-menu-divider />
          <a-menu-item key="3">3rd menu item</a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>
<script lang="ts" setup>
import { DownOutlined } from '@ant-design/icons-vue';
</script>
<style lang="less" scoped>
.switch-wrapper{

}
</style>