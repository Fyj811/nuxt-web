import { hash } from 'ohash';
import qs from 'qs';
import { message,Modal } from 'ant-design-vue';

// 定义后端返回的数据类型
export interface ResOptions<T> {
  result?: T
  errorCode?: number|string
  errorDescription?: string
  success?:boolean
}
const fetch = ( url:string, options?:any, headers?:any, errorMessage?:any ): Promise<any> => {

  const { public: { apiBase } } = useRuntimeConfig();
  console.log(apiBase)

  const reqUrl = apiBase+ url // 请求地址
  // const reqUrl =  '/api'+ url // 请求地址  vie 配置跨域  需要后台支持
  // 不设置key，始终拿到的都是第一个请求的值，参数一样则不会进行第二次请求
  const key = hash(JSON.stringify(options) + url)
  const customHeaders = { loginToken: useCookie('token').value, ...headers };
  if(options.method==='post'&&headers&&headers['Content-Type']==='application/x-www-form-urlencoded;charset=UTF-8'){
    options.body = qs.stringify(options.body)
  }
  
  return new Promise((resolve,reject)=>{
    useFetch(reqUrl,{...options, key, headers:customHeaders}).then(({data,error})=>{
      // console.log(data,error)
      if (error.value) {
        reject(error.value)
        return
      }
      //类型断言
      const value = data.value as ResOptions<string>;
      if(!value){
        // 这里处理错你自定义的错误
        navigateTo({path:'/internalError'})
        throw createError({
          statusCode: 500,
          statusMessage: reqUrl,
          message: '自己后端接口的报错信息',
        })
        
        
      }else{
        if(value.success){
          resolve(value.result);
        }else{
          //登录过期
          if(value.errorCode=== '7' || value.errorCode === '6'){
            navigateTo({path:'/login'})
            useCookie('token').value = null;
            return;
          }else{
            if(errorMessage.errorMessageMode==='modal'){
              Modal.error({
                title: 'Tip',
                content: value.errorDescription,
              });
            }else{
              message.error(value.errorDescription)
            }
          }
          reject(value)
        }
      }
    }).catch((err:any)=>{
      console.log(err);
      reject(err)
    })
  })
}


export default class Http{
  
  get(url: string, params?: any, headers?: any, errorMessage?:any):Promise<any>{
    return fetch(url, { method: 'get', params }, headers, errorMessage)
  }

  post (url: string, body?: any, headers?: any, errorMessage?:any): Promise<any> {
    return fetch(url, { method: 'post', body }, headers, errorMessage)
  }
 
  put (url: string, params?: any, headers?: any): Promise<any> {
    return fetch(url, { method: 'put', params }, headers)
  }
 
  delete (url: string, params?: any, headers?: any): Promise<any> {
    return fetch(url, { method: 'delete', params }, headers)
  }
}