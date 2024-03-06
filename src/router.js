import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from './pages/HomePage.vue';
import DashboardPage from "./pages/DashboardPage.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path:'/dashboard',
    component: DashboardPage
  }
];

const router = new VueRouter({
  routes
});

export default router;
