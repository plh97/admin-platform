import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/home.vue";
import routers from "virtual:generated-pages";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [{ path: "/", redirect: "/home" }, ...routers],
});

export default router;
