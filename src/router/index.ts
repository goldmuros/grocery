import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Product List",
    component: () =>
      import(/* webpackChunkName: "product" */ "../views/ProductList.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () =>
      import(/* webpackChunkName: "product" */ "../views/CartList.vue"),
  },
  {
    path: "/favorite",
    name: "Favorite List",
    component: () =>
      import(/* webpackChunkName: "product" */ "../views/FavoriteList.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
