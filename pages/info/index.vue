<template>
  <section>
    <a-date-picker v-model:value="value" />
    <p>{{ $t('app.title') }}</p>
    store
    <h1>{{ user_store.userStore.count }}</h1>
    <a-button @click="Increase" type="primary">增加</a-button>
    <a-button @click="Increase2" type="primary">增加2</a-button>
    {{ user_store.appStore.version }}
    <a-button @click="reset" type="primary">重置</a-button>
    <a-button @click="invoke" type="primary">调用</a-button>
    <!-- {{ user_store.userStore.getAddAge }} -->
    <a-button @click="action" type="primary">action操作</a-button>
    {{ user_store.userStore.name }}


    <a-table :dataSource="dataSource" :columns="columns" />
    <img width="300" height="650" v-for="item in arr" :key="item" :src="item" alt="">
  </section>
</template>

<script lang="ts" setup>
  import type { Dayjs } from 'dayjs';
  import { useI18n } from 'vue-i18n';
  import { storeToRefs } from 'pinia'
  import { useStore } from "@/store";

  const value = ref<Dayjs>();
  const {t}  = useI18n();

  console.log(t('app.title'))




  const imageList:Record<string,{default:string}> = import.meta.glob('../../assets/image/*.*',{eager:true});
  console.log(imageList)
  let arr = Object.values(imageList).map(v=>v.default)

  console.log(arr)


 
  const user_store= useStore();
  console.log(user_store.appStore.version);
  console.log(user_store.userStore.count);
  // console.log(user_store.arr);

  //但是，请注意，store 是一个用reactive 包裹的对象，就像setup 中的props 一样，我们不能对其进行解构。
  //这样拿到的数据不是响应式的。
  //为了从 Store 中提取属性同时保持其响应式，您需要使用storeToRefs()
  // const { count } = storeToRefs(useStore)

  const dataSource:Array<string> = [];
  const columns = [
  {
    name: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },]
  
  const Increase = ()=>{
    user_store.userStore.count++
  }
  const Increase2 = ()=>{
    user_store.appStore.version++
  }
  const reset = ()=>{
    user_store.userStore.$reset()
  }
  const invoke = ()=>{
    user_store.userStore.getAddAge
  }
  const action = ()=>{
    user_store.userStore.saveName('生活是一个骗子')
  }

</script>

<style lang="less" scoped>

</style>