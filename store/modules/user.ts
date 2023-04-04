
import { defineStore } from 'pinia';
// 这里我们使用的是es6 的模块化规范进行导出的。
 
// defineStore 方法有两个参数，第一个参数是模块化名字
// 第二个参数是选项，对象里面有三个属性，相比于vuex 少了一个 mutations.
export const userStore = defineStore('users', {
  state(){  // 存放的就是模块的变量
    return {
      count: 1,
      arr: [1,2,3,4,5,6,7,8,9],
      age:30,
      name:'人生处处是陷阱'
    }
  },
  getters:{ // 相当于vue里面的计算属性，可以缓存数据
    // 方法一，接收一个可选参数 state
    getAddAge(state){
      console.log('调用了') // 页面中使用了多次，这里只会执行一次，然后缓存起来了
      return state.age+ 1
    },
    // 方法二，不传参数，使用 this
    // 但是必须指定函数返回值的类型，否则类型推导不出来
    // getAddAge(): number{
    //   return this.age+ 1
    // }
  },
  actions:{ // 可以通过actions 方法，改变 state 里面的值。
    saveName(name:string) {
      this.name = name;
    },
  }
})