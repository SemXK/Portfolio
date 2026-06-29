import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import Routes from "./routes/routes.ts";

createApp(App).use(Routes).mount("#app");
