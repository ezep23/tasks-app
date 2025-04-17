import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router/index.js';
import App from './App.vue';
import './style.css';

const pinia = createPinia();
createApp(App).use(pinia).use(router).mount('#app');
