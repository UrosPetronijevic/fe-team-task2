<!-- src/components/layout/AppContainer.vue -->
<script setup lang="ts">
import { useAuthStore } from "@/stores/auth";
import TopBar from "./TopBar.vue";

const authStore = useAuthStore();
</script>

<template>
  <div class="app-wrapper">
    <TopBar v-if="authStore.isLoggedIn" />
    <main class="app-main">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.app-main {
  flex: 1;
  overflow: hidden;
}
</style>
