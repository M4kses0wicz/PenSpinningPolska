import { createApp } from "vue";
import router from "./routes";

import "./style.css";
import App from "./App.vue";

import AOS from "aos";
import "aos/dist/aos.css";

import "@fortawesome/fontawesome-free/css/all.css";

createApp(App).use(router).mount("#app");

AOS.init();
