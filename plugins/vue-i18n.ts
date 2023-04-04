import { createI18n } from 'vue-i18n';
import { zh,en,hk,ar } from '@/locales/index'
const message = {
  zh,
  en,
  // hk,
  // ar
}



export default defineNuxtPlugin((nuxtApp) => {

  const Cookie = useCookie('lang');
  Cookie.value = Cookie.value || 'zh'
  const i18n = createI18n({
    legacy:false,//使用vue3组合式API时必须设置为FALSE
    locale:Cookie.value || 'zh',
    fallbackLocale: 'zh', // set fallback locale
    messages:message,
    globalInjection:true,//全局注入$t函数
  })
  
  nuxtApp.vueApp.use(i18n)


  return{
    provide:{
      myi18n:()=>i18n
    }
  }
});