<script setup lang="ts">
import { useAuthStore } from "@/stores/auth";
import { useThemeStore } from "@/stores/theme";
import { useRouter } from "vue-router";
import BaseIcon from "@/components/ui/BaseIcon.vue";

const authStore = useAuthStore();
const themeStore = useThemeStore();
const router = useRouter();

function handleLogout() {
  authStore.logout();
  router.push("/signin");
}
</script>

<template>
  <header class="topbar">
    <RouterLink to="/dashboard" class="topbar-brand">
      <div class="topbar-logo">
        <BaseIcon name="layers" :size="18" :stroke-width="2.5" />
      </div>
      <span class="topbar-brand-name">Pulse</span>
    </RouterLink>

    <nav class="topbar-nav">
      <RouterLink to="/dashboard" class="nav-link">
        <BaseIcon name="grid" :size="15" />
        <span>Dashboard</span>
      </RouterLink>

      <RouterLink to="/users" class="nav-link">
        <BaseIcon name="users" :size="15" />
        <span>Users</span>
      </RouterLink>
    </nav>

    <div class="topbar-spacer" />

    <div class="topbar-actions">
      <button class="icon-btn" @click="themeStore.toggleTheme">
        <BaseIcon :name="themeStore.isDark ? 'moon' : 'sun'" :size="17" />
      </button>

      <div class="topbar-divider" />

      <button class="logout-btn" @click="handleLogout">
        <BaseIcon name="log-out" :size="15" />
        <span>Logout</span>
      </button>
    </div>
  </header>
</template>

<style scoped src="@/assets/css/components/layout/TopBar.css"></style>
