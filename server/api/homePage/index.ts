
import Http from '@/utils/http';
import {  ContentTypeEnum } from '@/enums/httpEnum';
export default new class HomePage extends Http {
  accountInfoBalancesList(params:any) {
    return this.post('/onlinebankapp/accountInfo/balancesList.do',params,{'Content-Type': ContentTypeEnum.FORM_URLENCODED})
  }
}