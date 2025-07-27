import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/pages/Home.vue";
import HowToStart from "../components/pages/HowToStart.vue";
import PPPHistory from "../components/pages/History.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/JakZaczac", component: HowToStart },
  { path: "/Historia", component: PPPHistory },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
