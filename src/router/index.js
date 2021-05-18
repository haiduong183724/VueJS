import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../components/Main.vue"
import report from "../components/report.vue";
import Product from "../components/Product.vue";
import Customers from "../components/Customers.vue";
import sumary from "../components/sumary.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/report",
    name: "report",
    component: report,
  },
  {
    path: "/sumary",
    name: "sumary",
    component: sumary,
  },
  {
    path: "/product",
    name: "Product",
    component: Product,
  },
  {
    path: "/customers",
    name: "Customers",
    component: Customers,
  },
  // {
  //   path: "/",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
