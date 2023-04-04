<template>
  <section>
    关于我们

    <p class="name animate__animated animate__flash">{{ title }}</p>
    <a-button type="primary" @click="enableCustomLayout ">点击我，我可以决定使用的layout</a-button>

    <ClientOnly fallbackTag="span">
      <!-- this component will only be rendered on client side -->
      <!-- <Comments /> -->
      <template #fallback>
        <!-- this will be rendered on server side -->
        <p>Loading comments...</p>
      </template>
    </ClientOnly>

    
      <!-- <h1 class="text-xl opacity-50">
        Nuxt birthday
      </h1>
      <p class="text-4xl">
        {{ date }}
      </p>
      <div class="mt-4" />
      <label for="locale-chooser">Preview a different locale</label>
      <select id="locale-chooser" v-model="locale" class="m-auto w-50 border n-border-base rounded p-1">
        <option v-for="l of locales" :key="l" :value="l">
          {{ l }}
        </option>
      </select> -->
    


  </section>
</template>
<script lang="ts" setup>
function enableCustomLayout(){
  setPageLayout('custom')
}
definePageMeta({
  layout: false,
});
// showError("😱 Oh no, an error has been thrown.")
// showError({ statusCode: 404, statusMessage: "Page Not Found" })

const title = ref('Hello')



// // see ../composables/locale.ts for the implementation
// const locales = useLocales()
// const locale = useLocale()
// const date = useLocaleDate(new Date('2016-10-26') /* NUXT_BIRTHDAY */)


</script>
<style lang="less" scoped>
.name{
  color: #c33;
}
</style>