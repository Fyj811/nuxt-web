<template>
  <div>
    <h1>登录页面</h1>
    <a-button @click="reset" type="primary">重置</a-button>
    <h1>Color mode: {{ $colorMode.value }}</h1>
    <select v-model="$colorMode.preference">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="sepia">Sepia</option>
    </select>
  </div>
</template>
<script lang="ts" setup>
import {Modal} from 'ant-design-vue'
definePageMeta({
  layout: 'login-header',
});
const colorMode = useColorMode()
console.log(colorMode.preference)


function reset(){
  Modal.error({
        title: 'This is an error message',
        content: 'some messages...some messages...',
      });
}
</script>
<style scoped lang="scss">
h1 {
  background-color: $bgColor;
  color: $theme;
}
</style>


<style>
body {
  background-color: #fff;
  color: rgba(0,0,0,0.8);
}
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
</style>