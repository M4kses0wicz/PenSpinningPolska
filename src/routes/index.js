import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/pages/Home.vue";
import HowToStart from "../components/pages/articles/HowToStart.vue";
import PPPHistory from "../components/pages/History.vue";
import Events from "../components/pages/Events.vue";
import ArticlesPage from "../components/pages/ArticlesPage.vue";
import NotFound from "../components/pages/NotFound.vue";
import Notation from "../components/pages/articles/Notation.vue";
import PenMods from "../components/pages/articles/PenMods.vue";
import PsStyle from "../components/pages/articles/PsStyle.vue";
import MP24 from "../components/pages/news/MP24.vue";
import MP26 from "../components/pages/news/MP26.vue";
import PPP20Years from "../components/pages/news/20YearsOfPPP.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/Historia", component: PPPHistory },
  { path: "/Wydarzenia", component: Events },
  { path: "/Wydarzenia/MP24", component: MP24 },
  { path: "/Wydarzenia/MP26", component: MP26 },
  { path: "/Wydarzenia/20LatPPP", component: PPP20Years },
  { path: "/Artykuly", component: ArticlesPage },
  { path: "/Artykuly/JakZaczac", component: HowToStart },
  { path: "/Artykuly/PodstawyNotacji", component: Notation },
  { path: "/Artykuly/StylWPenspinningu", component: PsStyle },
  { path: "/Artykuly/Modyfikacje", component: PenMods },
  { path: "/:pathMatch(.*)*", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
