import { createWebHistory, createRouter } from 'vue-router';
import HomePage from '~/views/Homepage.vue';
import AboutPage from '~/views/AboutPage.vue';

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
