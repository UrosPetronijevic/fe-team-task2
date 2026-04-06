import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import { useAuthStore } from "@/stores/auth";

import HomeView from "@/views/HomeView.vue";
import DashboardView from "@/views/dashboard/DashboardView.vue";
import UsersView from "@/views/UsersView.vue";
import UserItemView from "@/views/user/UserItemView.vue";

declare module "vue-router" {
  interface RouteMeta {
    requiresAuth?: boolean;
    requiresGuest?: boolean;
  }
}

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: HomeView,
    meta: { requiresGuest: true },
  },
  {
    path: "/dashboard",
    component: DashboardView,
    meta: { requiresAuth: true },
  },
  {
    path: "/users",
    component: UsersView,
    meta: { requiresAuth: true },
  },
  {
    path: "/users/:id",
    component: UserItemView,
    meta: { requiresAuth: true },
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to) => {
  const authStore = useAuthStore();

  if (to.meta.requiresAuth && !authStore.isLoggedIn) {
    return { path: "/" };
  }

  if (to.meta.requiresGuest && authStore.isLoggedIn) {
    return { path: "/dashboard" };
  }
});

export default router;
