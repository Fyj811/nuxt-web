
import { defineStore } from 'pinia';
// 这里我们使用的是es6 的模块化规范进行导出的。
 
// defineStore 方法有两个参数，第一个参数是模块化名字
// 第二个参数是选项，对象里面有三个属性，相比于vuex 少了一个 mutations.
export const appStore = defineStore('app', {
  state(){  // 存放的就是模块的变量
    return {
      version:10,
      lang:useCookie('lang') || 'zh',
      shrinkWidth:80,//左侧侧边栏收缩的宽度
      slidWidth:256,//侧边栏的宽度
      sideMargin:NaN,//右侧主内容距侧边栏的边距  
    }
  },
  getters:{
    getStateLang(state){// 页面中使用了多次，这里只会执行一次，然后缓存起来
      return state.lang?state.lang:'zh'
    },
  },
  actions:{
    changeLang(lang:string) {
      this.lang = lang;
    },
    sideMarginComputer(status:boolean){
      this.sideMargin = status?this.shrinkWidth:this.slidWidth
    }
  }
})