import { createApp } from 'vue';
import App from './App.vue';
import Router from './router/index';
import ElementPlus from 'element-plus';
import './common/base.less';
import 'element-plus/dist/index.css';
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';
import { DynamicScroller, DynamicScrollerItem } from 'vue-virtual-scroller';

const app = createApp(App).use(Router).use(ElementPlus);

app.component('DynamicScroller', DynamicScroller);
app.component('DynamicScrollerItem', DynamicScrollerItem);
app.mount('#app');
