<script setup lang="ts">
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();

function handleLogout() {
  authStore.logout();
  router.push("/signin");
}
</script>

<template>
  <header class="topbar">
    <!-- Logo -->
    <div class="topbar-brand">
      <div class="topbar-logo">
        <svg
          width="18"
          height="18"
          stroke="currentColor"
          fill="none"
          stroke-width="2.5"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      </div>
      <span class="topbar-brand-name">Wonder</span>
    </div>

    <!-- Nav Links -->
    <nav class="topbar-nav">
      <RouterLink to="/dashboard" class="nav-link">
        <svg
          width="15"
          height="15"
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
        <span>Dashboard</span>
      </RouterLink>

      <RouterLink to="/users" class="nav-link">
        <svg
          width="15"
          height="15"
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
        <span>Users</span>
      </RouterLink>
    </nav>

    <!-- Spacer -->
    <div class="topbar-spacer" />

    <!-- Right Side Actions -->
    <div class="topbar-actions">
      <!-- Theme toggle (placeholder for now) -->
      <button class="icon-btn">
        <svg
          width="17"
          height="17"
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      </button>

      <div class="topbar-divider" />

      <!-- Logout -->
      <button class="logout-btn" @click="handleLogout">
        <svg
          width="15"
          height="15"
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
          <polyline points="16 17 21 12 16 7" />
          <line x1="21" y1="12" x2="9" y2="12" />
        </svg>
        <span>Logout</span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.topbar {
  display: flex;
  align-items: center;
  width: 100%;
  height: 72px;
  padding: 0 32px;
  background-color: #0a1020e6;
  border-bottom: 1px solid #00e0ff20;
  backdrop-filter: blur(40px);
  position: sticky;
  top: 0;
  z-index: 100;
}

/* Brand */
.topbar-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-right: 40px;
}

.topbar-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  background-image: linear-gradient(135deg, #00c8ff 0%, #00e0ff 100%);
  border-radius: 8px;
  box-shadow: #00e0ff4d 0px 0px 20px 0px;
  color: #080c14;
}

.topbar-brand-name {
  color: #ffffff;
  font-family: ui-sans-serif, system-ui, sans-serif;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.3px;
}

/* Nav */
.topbar-nav {
  display: flex;
  align-items: center;
  gap: 4px;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 10px;
  height: 40px;
  padding: 0 16px;
  border-radius: 8px;
  color: #ffffff60;
  font-family: ui-sans-serif, system-ui, sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease, background-color 0.2s ease;
}

.nav-link.router-link-active {
  background-color: #00e0ff14;
  border: 1px solid #00e0ff30;
  color: #00e0ff;
}

/* Spacer */
.topbar-spacer {
  flex: 1;
}

/* Actions */
.topbar-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.icon-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: #ffffff0d;
  border: 1px solid #ffffff14;
  border-radius: 12px;
  color: #00e0ff;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.icon-btn:hover {
  background-color: #ffffff1a;
}

.topbar-divider {
  width: 1px;
  height: 28px;
  background-color: #ffffff14;
}

.logout-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  height: 40px;
  padding: 0 16px;
  background-color: #ff4d4d12;
  border: 1px solid #ff4d4d30;
  border-radius: 12px;
  color: #ff6b6b;
  font-family: ui-sans-serif, system-ui, sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.logout-btn:hover {
  background-color: #ff4d4d20;
}
</style>
