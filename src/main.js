import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import Vant from 'vant';
import 'vant/lib/index.css';
import router from './route'


createApp(App).use(Vant).use(router).mount('#app')
