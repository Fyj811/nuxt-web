
import app from './ZH/app'
import payment from './ZH/payment'
import webMenu from './ZH/menu'

export default {
  ...app,
  ...payment,
  ...webMenu
}
// import { loadModules } from '@/utils/loadModules'
// let modules = await loadModules('./ZH/*/index.ts');

// console.log(modules)