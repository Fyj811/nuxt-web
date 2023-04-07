<template>
  <nuxt-svg-icon style="height:1em;" :name="props.name" :useOriginSize="true" class="animate__animated animate__fadeIn" />
</template>
<script lang="ts" setup>

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  
})
</script>
<style lang="less" scoped>
nuxt-svg-icon {
  height: 1em;
}
</style>
