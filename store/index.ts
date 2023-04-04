import {userStore} from './modules/user';
import {appStore} from './modules/app'

export const useStore = ()=>({
  userStore:userStore(),
  appStore:appStore()
})