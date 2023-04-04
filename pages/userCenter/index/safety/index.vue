<template>
  <section>

  
    <h1>登录安全

      
    </h1>
    <div style="max-width:320px;padding: 30px;">
      <a-input v-model:value="value" placeholder="Basic usage" size="large" class="m-b-24" />
      <a-select
        ref="select"
        v-model:value="value1"
        style="width: 120px"
        size="large"
      >
        <a-select-option value="jack">Jack</a-select-option>
        <a-select-option value="lucy">Lucy</a-select-option>
        <a-select-option value="disabled" disabled>Disabled</a-select-option>
        <a-select-option value="Yiminghe">yiminghe</a-select-option>
      </a-select>
    </div>
  </section>
</template>


<script lang="ts" setup>
// definePageMeta({
//   title: 'My home page'
// })
const value = ref<string>('');
const value1 = ref<string>('lucy');

console.log(ref())
</script>