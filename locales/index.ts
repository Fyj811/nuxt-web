import zhLocale from './lang/zh';
import enLocale from './lang/en'
import hkLocale from './lang/hk'
import arLocale from './lang/ar'



// import zhCN from 'ant-design-vue/es/locale/zh_CN';
// import enUS from 'ant-design-vue/es/locale/en_US'







let zh = {
  ...zhLocale,
  // ...zhCN
}




let en = {
  ...enLocale,
  // ...enUS
}

let hk = {
  ...hkLocale
}

let ar = {
  ...arLocale
}



export { zh,en,hk,ar }