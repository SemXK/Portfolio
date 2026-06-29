import AboutPage from "@/components/MainScreens/AboutPage.vue";
import ContactPage from "@/components/MainScreens/ContactPage.vue";
import MainPage from "@/components/MainScreens/MainPage.vue";
import ProjectPage from "@/components/MainScreens/ProjectPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const Routes = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: MainPage },
    { path: "/about", component: AboutPage },
    { path: "/projects", component: ProjectPage },
    { path: "/contact", component: ContactPage },

  ],
});

export default Routes;
