import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./pages/Home.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./pages/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./pages/Register.vue')
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]
})

router.beforeEach((to, from, next) => {
    store.dispatch('fetchAccessToken');
    if (to.fullPath === '/') {
      if (!store.state.accessToken) {
        next('/login');
      }
    }
    if (to.fullPath === '/login') {
      if (store.state.accessToken) {
        next('/');
      }
    }
    next();
  });

  export default router;