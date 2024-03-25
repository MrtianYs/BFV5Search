import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Router from './router/index'
import ElementPlus from 'element-plus'

import './common/base.less'

createApp(App).use(Router).use(ElementPlus).mount('#app')
