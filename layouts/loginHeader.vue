<template>
  <section class="section">
    <div class="header-top">
      <div class="header-content">
        <div class="logo">
          <img src="@/assets/image/logo.png" alt="panpay-logo" srcset="">
        </div>
        <div class="header-action">
          <ClientOnly>
          <a-dropdown>
            <!-- <span>大中华区商户</span> -->
            <a-typography-text>大中华区商户</a-typography-text>
            <template #overlay>
              <a-menu>


                <a-typography-text strong>大中华区商户</a-typography-text>

                <a-menu-item>
                  简体中文
                </a-menu-item>
                <a-menu-item>
                  English
                </a-menu-item>
                <a-menu-divider />
                <a-typography-text strong>欧洲与国际客户</a-typography-text>
                <a-menu-item>
                  English
                </a-menu-item>
              </a-menu>
            </template>
            
          </a-dropdown>
        </ClientOnly>
        </div>
      </div>
    </div>
    <!-- <h1>Counter: {{ counter || '-' }}</h1>
    <button @click="counter = null">reset</button>
    <button @click="counter--">-</button>
    <button @click="counter++">+</button> -->
    <div>
      <slot />
    </div>
    
  </section>
</template>

<script lang="ts" setup>
import { DownOutlined } from '@ant-design/icons-vue';
const counter:any = useCookie('counter')
counter.value = counter.value || Math.round(Math.random() * 1000)


// const sss = getCookie('counter');

</script>
<style lang="less" scoped>
section.section{
  height: 100%;
}
.header-top{
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 6%);
  height: 64px;
  .header-content{
    display: flex;
    max-width: 1110px;
    height: 100%;
    margin: 0 auto;
    padding: 0 15px;
    box-sizing: border-box;
    align-items: center;
    justify-content: space-between;
    .logo img{
      width: 86px;
      height: auto;
    }
  }
}
</style>
