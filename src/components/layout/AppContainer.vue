<!-- src/components/layout/AppContainer.vue -->
<script setup lang="ts">
import { useAuthStore } from "@/stores/auth";
import TopBar from "@/components/layout/TopBar.vue";

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

<style scoped src="@/assets/css/components/layout/AppContainer.css"></style>
