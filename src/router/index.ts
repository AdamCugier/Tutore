import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartView from "@/views/CartView.vue";
import CartSummaryView from "@/views/CartSummaryView.vue";
import ThankYouView from "@/views/ThankYouView.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView
  },
  {
    path: '/summary',
    name: 'orderSummary',
    component: CartSummaryView
  },
  {
    path: '/summary/success',
    name: 'finalize',
    component: ThankYouView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
