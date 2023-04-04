<template>
  <a-result status="404" title="404" sub-title="Sorry, the page you visited does not exist.">
    <template #extra>
      <a-button type="primary" @click="gohome">Back Home</a-button>
    </template>
  </a-result>
</template>


<script lang="ts" setup>
definePageMeta({
  layout: false,
});
const gohome = ()=>{
  navigateTo('/about')
  // navigateTo({ path: '/search' })
  // navigateTo({
  //   path: '/search',
  //   query: {
  //     page: 1,
  //     sort: 'asc'
  //   }
  // })
}
</script>