import { createApp } from 'vue';
import App from './App.vue';
import Router from './router/index';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './common/base.less';

const app = createApp(App).use(Router).use(ElementPlus);

Router.isReady().then(() => {
  console.log(123);
  app.mount('#app');
});
