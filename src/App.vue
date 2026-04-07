<script setup lang="ts">
import AppContainer from "@/components/layout/AppContainer.vue";
import { useThemeStore } from "@/stores/theme";

useThemeStore();
</script>

<template>
  <AppContainer />
</template>
