// import Antd from 'ant-design-vue';
import { Button,Layout,DatePicker,ConfigProvider,Space,Table,Menu,Input,Select,Result,Dropdown,Badge  } from 'ant-design-vue';
export default defineNuxtPlugin((nuxtApp) => {
    // nuxtApp.vueApp.use(Antd);
    nuxtApp.vueApp
    .use(Button)
    .use(Layout)
    .use(DatePicker)
    .use(ConfigProvider)
    .use(Space)
    .use(Table)
    .use(Menu)
    .use(Input)
    .use(Select)
    .use(Result)
    .use(Dropdown)
    .use(Badge)
});