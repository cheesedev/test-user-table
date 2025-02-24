import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import router from './router'
import App from './App.vue';

const app = createApp(App);

app.use(router);
app.use(createPinia().use(piniaPluginPersistedstate));

app.mount('#app');
