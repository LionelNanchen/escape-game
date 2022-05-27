import { createRouter, createWebHistory } from "vue-router";
import WelcomeView from "../views/WelcomeView.vue"
import HieroglyphsView from "../views/HieroglyphsView.vue"
import { riddles } from "@/utils";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Welcome",
      component: WelcomeView,
    },
    {
      path: `/${riddles[0].id}`,
      name: riddles[0].title,
      component: HieroglyphsView,
    }
  ],
});

export default router;
