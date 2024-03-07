import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from './pages/HomePage.vue';
import DashboardPage from "./pages/DashboardPage.vue"
import ChartsPage from './pages/ChartsPage.vue';
import EssentialsPage from './pages/EssentialsPage.vue';
import InterfacePage from './pages/InterfacePage.vue';
import ListsPage from './pages/ListsPage.vue';
import ProductsPage from './pages/ProductsPage.vue';
import SettingPage from './pages/SettingPage.vue';
import WalletPage from './pages/WalletPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path:'/dashboard',
    component: DashboardPage
  },
  {
    path:'/charts',
    component: ChartsPage
  },
   {
    path:'/essentials',
    component: EssentialsPage
  },
   {
    path:'/interface',
    component: InterfacePage
  },
   {
    path:'/lists',
    component: ListsPage
  },
   {
    path:'/products',
    component: ProductsPage
  },
   {
    path:'/setting',
    component: SettingPage
  },
   {
    path:'/wallet',
    component: WalletPage
  },
];

const router = new VueRouter({
  routes
});

export default router;
