import './assets/all.scss'
import '../src/assets/style.css'
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import CKEditor from '@ckeditor/ckeditor5-vue';
import {
  Form, Field, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
import $httpMessageState from '@/methods/pushMessageState';
import App from './App.vue';
import router from './router';
import { createI18n } from 'vue-i18n'
import zh from './languages/zh-TW.json'
import en from './languages/en.json'
import { date, currency } from './methods/filters';
import * as bootstrap from 'bootstrap'

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true, // 當輸入任何內容直接進行驗證
});
// 設定預設語系
setLocale('zh_TW');
const i18n = createI18n({
  legacy: false, // 啟用新的 Vue3 選項
  locale: 'zh-TW', // 設置默認語言
  messages: {
    en,
    'zh-TW': zh // 引入 zh-TW.json 文件
  }
})
const pinia = createPinia();
const app = createApp(App);
app.config.globalProperties.$filters = {
  date,
  currency,
};

// 正常來說不建議太多方法掛 Global，這裡可以使用 provide 來處理
app.config.globalProperties.$httpMessageState = $httpMessageState;

app.use(pinia);
app.use(router);
app.use(VueAxios, axios);
app.use(CKEditor);
app.use(bootstrap)
app.use(i18n)
app.component('Loading', Loading);
app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);
app.mount('#app');
