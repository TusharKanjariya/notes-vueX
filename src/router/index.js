import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Add from "../views/Add.vue";
import Login from "../views/login.vue";
import store from "../store/index";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Home',
    component: Home,
    beforeEnter(to, from, next) {
      let d = store.getters.getLoginStatus;
      if (d) {
        next();
      } else {
        next('/')
      }
    }
  },
  {
    path: '/add',
    name: 'Add',
    component: Add,
    beforeEnter(to, from, next) {
      let d = store.getters.getLoginStatus;
      if (d) {
        next();
      } else {
        next('/')
      }
    }
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: Add,
    beforeEnter(to, from, next) {
      if (Number.isInteger(Number(to.params.id))) {
        next();
      }
    },
    props: true
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
