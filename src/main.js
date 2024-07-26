import { createApp } from 'vue';
import App from './index.vue';
import router from './router';
import store from './store';
import './plugins/axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';

// Importa o mixin
import screenMixin from './mixins/screenMixin';

// Cria a aplicação Vue
const app = createApp(App);

// Usa o mixin globalmente
app.mixin(screenMixin);

// Usa o router e o store, e monta a aplicação
app.use(router).use(store).mount('#ecommerce');