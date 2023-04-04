import { message as Message,Modal } from 'ant-design-vue'
export default defineNuxtRouteMiddleware((to, from) => {
  // if (to.params.id === '1') {
  //   return abortNavigation()
  // }
  // return navigateTo('/')
  // console.log(to)
  // const foo = usei18n()

  
  const { $myi18n } = useNuxtApp()
  const { t } = $myi18n().global
  if(process.client){
    const token = useCookie('app-token');
    //某些特定的页面不需要token  login register  reset  fail  panpayFace   panpayFaceSuccess
    const noTokenPath = ['/login','/register','/reset','/fail','/panpayFace','/panpayFaceSuccess']
    if(!noTokenPath.includes(to.path)){
      if(!token.value){
        // Modal.error({
        //   title: 'Tip',
        //   content: t('app.auth'),
        // });
        // return abortNavigation()
      }
    }
  }

})