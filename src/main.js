import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router/';

import 'aos/dist/aos.css';
import 'flatpickr/dist/flatpickr.css';
import 'sweetalert2/dist/sweetalert2.min.css';

import AOS from 'aos';
import flatpickr from 'flatpickr';
import Swal from 'sweetalert2';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);

app.mount('#app');

app.mount('#app')