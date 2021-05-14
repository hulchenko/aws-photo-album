import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import SignUpPage from '../views/SignUpPage.vue';
import AlbumsPage from '../views/AlbumsPage.vue';
import AlbumsDetailPage from '../views/AlbumsDetailPage';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  { path: '/signUp', name: 'SignUpPage', component: SignUpPage },
  {
    path: '/album/:id',
    name: 'AlbumsDetailPage',
    component: AlbumsDetailPage,
    meta: { requiresAuth: true },
  },
  {
    path: '/albums',
    name: 'AlbumsPage',
    component: AlbumsPage,
    meta: { requiresAuth: true },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
