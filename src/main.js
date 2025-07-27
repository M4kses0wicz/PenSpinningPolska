import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import "./style.css";
import App from "./App.vue";

import Home from "./components/pages/Home.vue";
import HowToStart from "./components/pages/HowToStart.vue";
import PPPHistory from "./components/pages/History.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/JakZaczac", component: HowToStart },
  { path: "/Historia", component: PPPHistory },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
