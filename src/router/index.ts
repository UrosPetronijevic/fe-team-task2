import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import { useAuthStore } from "@/stores/auth";

import SignInView from "@/views/auth/SignInView.vue";
import SignUpView from "@/views/auth/SignUpView.vue";
import ForgotPasswordView from "@/views/auth/ForgotPasswordView.vue";
import DashboardView from "@/views/dashboard/DashboardView.vue";
import UsersView from "@/views/user/UsersView.vue";
import UserItemView from "@/views/user/UserItemView.vue";

declare module "vue-router" {
  interface RouteMeta {
    requiresAuth?: boolean;
    requiresGuest?: boolean;
    title?: string;
  }
}

const APP_NAME = "Pulse";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/sign-in",
  },
  {
    path: "/sign-in",
    component: SignInView,
    meta: { requiresGuest: true, title: "Sign In" },
  },
  {
    path: "/sign-up",
    component: SignUpView,
    meta: { requiresGuest: true, title: "Sign Up" },
  },
  {
    path: "/forgot-password",
    component: ForgotPasswordView,
    meta: { requiresGuest: true, title: "Forgot Password" },
  },
  {
    path: "/dashboard",
    component: DashboardView,
    meta: { requiresAuth: true, title: "Dashboard" },
  },
  {
    path: "/users",
    component: UsersView,
    meta: { requiresAuth: true, title: "Users" },
  },
  {
    path: "/users/:id",
    component: UserItemView,
    meta: { requiresAuth: true, title: "User Details" },
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/sign-in",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to) => {
  const authStore = useAuthStore();

  document.title = to.meta.title ? `${to.meta.title} — ${APP_NAME}` : APP_NAME;

  if (to.meta.requiresAuth && !authStore.isLoggedIn) {
    return { path: "/sign-in" };
  }

  if (to.meta.requiresGuest && authStore.isLoggedIn) {
    return { path: "/dashboard" };
  }
});

export default router;
