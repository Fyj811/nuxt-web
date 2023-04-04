<template>
  <div v-for="item in arr" :key="item">
    <img v-lazy="item" width="360" height="500" alt="">
  </div>
</template>
<script lang="ts" setup>
import { Directive } from "nuxt/dist/app/compat/capi";

  const imageList:Record<string,{default:string}> = import.meta.glob('../../assets/image/*.jpg',{eager:true});
  const arr = Object.values(imageList).map(v=>v.default);
  console.log(arr)


  let vLazy:Directive<HTMLImageElement,string> = async (el,binding)=>{
    let defaultImg={
      default:''
    }
    el.src= defaultImg.default
    const observer = new IntersectionObserver((enr)=>{
      // console.log(enr[0],binding.value)
      if(enr[0].intersectionRatio>0){
        el.src = binding.value;
        observer.unobserve(el)
      }
    })
    observer.observe(el)
  }
</script>
<style lang="less" scoped>
  div{
    text-align: center;
    margin-bottom: 10px;
  }
</style>