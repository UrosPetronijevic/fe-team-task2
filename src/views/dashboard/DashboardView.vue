<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useUsers } from "@/composables/useUsers";
import DashboardPanel from "@/components/dashboard/DashboardPanel.vue";

const { users, loading, error, fetchUsers } = useUsers();

onMounted(fetchUsers);

const activeUsers = computed(() => users.value.filter((u) => u.isActive));

const inactiveUsers = computed(() => users.value.filter((u) => !u.isActive));

const newUsers = computed(() =>
  [...users.value]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, 5)
);

const loggedInUsers = computed(() => users.value.filter((u) => u.isLoggedIn));
</script>

<template>
  <div class="dashboard">
    <div class="page-header">
      <h1 class="page-title">Dashboard</h1>
      <p class="page-subtitle">Overview of all user activity and status</p>
    </div>

    <div v-if="loading" class="state-message">Loading...</div>

    <div v-else-if="error" class="state-message state-message--error">
      {{ error }}
    </div>

    <div v-else class="panels-grid">
      <DashboardPanel title="Active Users" dot="green" :users="activeUsers" />
      <DashboardPanel title="Inactive Users" dot="red" :users="inactiveUsers" />
      <DashboardPanel title="New Users" dot="purple" :users="newUsers" />
      <DashboardPanel title="Logged In" dot="cyan" :users="loggedInUsers" />
    </div>
  </div>
</template>

<style scoped src="@/views/dashboard/DashboardView.css"></style>
