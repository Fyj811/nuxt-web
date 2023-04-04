
import Http from '@/utils/http';


export default new class article extends Http {
  getHot() {
    return this.get('/app/v1/article/hotView',{page:123},{'Content-Type':'application/x-www-form-urlencoded'})
  }
}