import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/about/:category",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/table",
    component: () => import("../views/Table.vue"),
  },
  {
    path: "/details",
    component: () => import("../views/Details.vue"),
  },
  {
    path: "/comments",
    component: () => import("../views/Comments.vue"),
  },
  {
    path: "/gallery",
    component: () => import("../views/Gallery.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
