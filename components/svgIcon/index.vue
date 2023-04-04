<template>
  <nuxt-svg-icon :name="props.name" :useOriginSize="true" class="animate__animated animate__fadeIn" />
</template>
<script lang="ts" setup>

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  
})
</script>
