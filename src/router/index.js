import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "@/components/MainPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MainPage",
    component: MainPage,
  },
  {
    path: "/home",
    name: "Home",
    component: () =>
      import("../views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import("../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
