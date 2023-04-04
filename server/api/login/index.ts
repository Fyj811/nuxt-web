
import Http from '@/utils/http';
import {  ContentTypeEnum } from '@/enums/httpEnum';
export default new class Login extends Http {
  login(params:any) {
    return this.post('/e-bank/user/login.do',params,{'Content-Type': ContentTypeEnum.FORM_URLENCODED},{ errorMessageMode: 'modal' })
  }
}