<template>
  <section class="animate__animated" :class="currentClass?'animate__fadeOutUp':'animate__fadeInDown'" v-if="currentDom">
  
      <Swiper 
        style="height:60px;"
        :loop="true" 
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false
        }"
        :modules="[SwiperAutoplay,SwiperPagination,SwiperNavigation]"
        :pagination="{
          el:'.swiper-pagination',
          clickable: true
        }"
        :onClick="swiperClick"
      >
        <swiper-slide class="exchange_activity"></swiper-slide>
        <swiper-slide class="dbs_activity"></swiper-slide>
        <div class="swiper-pagination" ></div>
      </Swiper>

      <div class="close_activity_btn" @click.stop="closeActivity">
        <svg-icon name="exchange_activity_close" style="background-color:rgba(18, 19, 20,.5);"/>
      </div>

    
  </section>
</template>
<script lang="ts" setup>
let currentDom = ref(true)
let currentClass = ref(false);
function closeActivity(){
  currentClass.value = !currentClass.value
}

function swiperClick(event){
  console.log(event)
}
const emit = defineEmits(["domChange"])

watch(currentClass,val=>{
  if(val){
    console.log(val)
    setTimeout(()=>{
      currentDom.value = false
      emit("domChange",false)
    },800)
  }
})
</script>
<style lang="less" scoped>
section{
  height: 60px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  .exchange_activity{
    background:url('@/assets/image/activity/exchange_activity.png') no-repeat center center;
    background-size: cover;
  }
  .dbs_activity{
    background:url('@/assets/image/activity/dbs_activity.png') no-repeat center center;
    background-size: cover;
  }
  .close_activity_btn{
    position: absolute;
    right: 18px;
    top: 18px;
    cursor: pointer;
    z-index: 10;
  }
}
</style>