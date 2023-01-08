import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';
import './style.css';
import App from './App.vue';
import './samples/node-api';
import router from './router';

const app = createApp(App);

const messages = Object.fromEntries(
  Object.entries(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    import.meta.glob<{ default: any }>('./locales/*.json', {
      eager: true,
    })
  ).map(([key, value]) => {
    return [key.slice(10, -5), value.default];
  })
);

app.use(
  createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    warnHtmlMessage: false,
    messages,
  })
);
app.use(createPinia());
app.use(router);

app.mount('#app').$nextTick(() => {
  postMessage({ payload: 'removeLoading' }, '*');
});
