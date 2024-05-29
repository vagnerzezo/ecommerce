import { createApp } from 'vue';
import App from './index.vue';
import router from './router';
import store from './store';
import './plugins/axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';


createApp(App).use(router).use(store).mount('#ecommerce');