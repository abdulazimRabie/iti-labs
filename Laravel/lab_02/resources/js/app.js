//
import './bootstrap';
import Test from './components/Test.vue';
import ViewAjax from './components/ViewAjax.vue';
import { createApp } from 'vue';

// test component (temporary)
const app = createApp({});

app.component('test', Test);
app.component('view-ajax', ViewAjax);

app.mount('#app');