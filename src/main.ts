import { createApp } from 'vue';
import App from './App.vue';
import Router from './router/index';
import ElementPlus from 'element-plus';
import './common/base.less';
import 'element-plus/dist/index.css';

const app = createApp(App).use(Router).use(ElementPlus);

app.mount('#app');
