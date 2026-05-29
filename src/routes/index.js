import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/pages/Home.vue";
import HowToStart from "../components/pages/articles/HowToStart.vue";
import PPPHistory from "../components/pages/History.vue";
import Events from "../components/pages/Events.vue";
import ArticlesPage from "../components/pages/ArticlesPage.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/JakZaczac", component: HowToStart },
  { path: "/Historia", component: PPPHistory },
  { path: "/Wydarzenia", component: Events },
  { path: "/Artykuly", component: ArticlesPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
