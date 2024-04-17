import bookwrapper from "@/components/bookwrapper.vue";
import wishlist from "../components/wishlist.vue"
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: bookwrapper,
  },
  {
    path: "/wishlist",
    component: wishlist,
  }
];

const router = createRouter({
  routes:routes,
  history:createWebHistory()
})

export default router;
