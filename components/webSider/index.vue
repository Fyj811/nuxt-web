<template>
  <a-layout-sider
    v-model:collapsed="collapsed" 
    collapsible
    breakpoint="md"
    collapsed-width="80"
    @collapse="onCollapse"
    @breakpoint="onBreakpoint"
    width="256" 
    class="web-sider-wrapper p-t-30"
  >
    <UserIdentitySwitch />
    <a-menu 
      v-model:selectedKeys="selectedKeys" 
      mode="inline" class="web-sider-menu" 
      :inlineIndent="16"
      @click="handleClick"
    >

      <a-menu-item :key="item.key" v-for="item in menuArray">
        <div class="app-flex app-align-items-center">
          <svg-icon :name="route.path===item.key?item.svgName+'_active':item.svgName" class="m-r-12"/>
          <span class="menu-title-name">{{ t(item.title) }}</span>
          <template v-if="item.key==='/message_list'">
            <span style="flex:auto;display: flex;justify-content: flex-end;"><a-badge class="m-r-1" count="25" :overflow-count="10" /></span>
          </template>
        </div>
      </a-menu-item>

    </a-menu>
  </a-layout-sider>
</template>
<script lang="ts" setup>
  import { useI18n } from "vue-i18n";
  import type { MenuProps } from 'ant-design-vue';
  const {t} = useI18n()
  


  const route = useRoute();
  const router = useRouter()
  
  const collapsed = ref<boolean>(false);
  const onCollapse = (collapsed: boolean, type: string) => {
    console.log(collapsed, type);
  };

  const onBreakpoint = (broken: boolean) => {
    console.log(broken);
  };

  const changePath = (path:string)=>{
    // router.push({path:path})
  }

  type myObj = {
    key:string;
    title:string;
    svgName:string;
  }

  const menuArray:myObj[] = [
    { key:'/',title:'webMenu.account',svgName:'account' },
    { key:'/recharge',title:'webMenu.recharge',svgName:'recharge' },
    { key:'/fx',title:'webMenu.fx',svgName:'fx' },
    { key:'/payment',title:'webMenu.payment',svgName:'payment' },
    { key:'/rmb_settlement',title:'webMenu.rmb_settlement',svgName:'rmb_settlement' },
    { key:'/message_list',title:'webMenu.message_list',svgName:'message_list' },
    { key:'/report',title:'webMenu.report',svgName:'report' },
    { key:'/bank_statement',title:'webMenu.bank_statement',svgName:'bank_statement' }
  ];


  const handleClick: MenuProps['onClick'] = (e:any) => {
    router.push({path:e.key})
  };


  
  let selectedKeys = ref<string[]>(['/'])
  setTimeout(()=>{
    selectedKeys.value = [route.path];
  },10)

  watch(route,val=>{
    if(val){
      selectedKeys.value = [route.path];
    }
  })
  



</script>
<style lang="less" scoped>
.web-sider-wrapper{
  background-color:#f8f8fa;
  box-shadow: -1px 0px 0px 0px #e8eaed inset;
  
  // overflow: auto;
  // height: calc(100vh - 64px);
  :deep(.ant-layout-sider-children){
    padding-left: 12px;
    padding-right: 12px;
  }
}
.web-sider-menu{
  background-color:#f8f8fa;  
  padding-bottom: 46px;
  border-inline-end: none !important;
  :deep(li){
    font-weight: 400;
    color: #5d6066;
    margin-bottom: 8px;
    margin-top: 0;
    margin-left: 0;
    margin-right: 0;
    width: 100%;
    &::after{
      border-right: none;
    }
    &:hover{
      background-color: #E8EAED;
      color: #5d6066;
    }
    &.ant-menu-item-selected {
      background: linear-gradient(90deg, #2096F3 0%, #AB49AE 100%);
      color: #ffffff;
      font-weight: 600;
    }
    
  }
  .menu-title-name::before{
    position: absolute;
    inset: 0;
    background-color: transparent;
    content: "";
  }
}
</style>