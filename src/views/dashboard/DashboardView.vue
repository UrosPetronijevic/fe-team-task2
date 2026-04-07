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
    <!-- Page Header -->
    <div class="page-header">
      <h1 class="page-title">Dashboard</h1>
      <p class="page-subtitle">Overview of all user activity and status</p>
    </div>

    <!-- Loading -->
    <div v-if="loading" class="state-message">Loading...</div>

    <!-- Error -->
    <div v-else-if="error" class="state-message state-message--error">
      {{ error }}
    </div>

    <!-- Grid -->
    <div v-else class="panels-grid">
      <DashboardPanel title="Active Users" dot="green" :users="activeUsers" />
      <DashboardPanel title="Inactive Users" dot="red" :users="inactiveUsers" />
      <DashboardPanel title="New Users" dot="purple" :users="newUsers" />
      <DashboardPanel title="Logged In" dot="cyan" :users="loggedInUsers" />
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding: 36px 40px;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
}

.panels-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  flex: 1;
  min-height: 0;
}

.page-header {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.page-title {
  margin: 0;
  color: #ffffff;
  font-family: ui-sans-serif, system-ui, sans-serif;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.page-subtitle {
  margin: 0;
  color: #ffffff60;
  font-family: ui-sans-serif, system-ui, sans-serif;
  font-size: 14px;
}

.state-message {
  color: #ffffff60;
  font-family: ui-sans-serif, system-ui, sans-serif;
  font-size: 14px;
}

.state-message--error {
  color: #ff6b6b;
}
</style>
