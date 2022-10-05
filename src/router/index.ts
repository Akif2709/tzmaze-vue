import { createRouter, createWebHistory } from "vue-router";
import ShowsListViewComponent from "../views/ShowsListView.vue";
import ShowDetailsView from "../views/ShowDetailsView.vue";
import PeoplesViewComponent from "../views/PeoplesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/shows",
    },
    {
      path: "/shows",
      component: ShowsListViewComponent,
    },
    {
      path: "/shows/:id",
      component: ShowDetailsView,
    },
    {
      path: "/people",
      component: PeoplesViewComponent,
    },
  ],
});

export default router;
