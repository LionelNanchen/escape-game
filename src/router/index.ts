import { createRouter, createWebHistory } from "vue-router";
import WelcomeView from "../views/WelcomeView.vue"
import HieroglyphsView from "../views/HieroglyphsView.vue"
import { riddles } from "@/utils";
import DoubleMemoriesView from "@/views/DoubleMemoriesView.vue";
import SouvenirView from "@/views/SouvenirView.vue";

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
    },
    {
      path: `/${riddles[1].id}`,
      name: riddles[1].title,
      component: DoubleMemoriesView,
    },
    {
      path: `/${riddles[5].id}`,
      name: riddles[5].title,
      component: SouvenirView,
    }
  ],
});

export default router;
