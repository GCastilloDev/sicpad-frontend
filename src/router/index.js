import Vue from "vue";
import VueRouter from "vue-router";

// Rutas de los modulos
import { authRoutes } from "../views/auth/routes";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "about" */ "../layouts/auth"),
  },
  ...authRoutes,
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
