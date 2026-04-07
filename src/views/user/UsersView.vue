<script setup lang="ts">
import { onMounted } from "vue";
import { useUsers } from "@/composables/useUsers";
import UserTable from "@/components/user/UserTable.vue";

const { users, loading, error, fetchUsers } = useUsers();

onMounted(fetchUsers);
</script>

<template>
  <div class="users-view">
    <!-- Page Header -->
    <div class="page-header">
      <div class="page-header-text">
        <h1 class="page-title">Users</h1>
        <p class="page-subtitle">Manage and monitor all registered users</p>
      </div>
      <button class="add-user-btn">
        <svg
          width="15"
          height="15"
          stroke="currentColor"
          fill="none"
          stroke-width="2.5"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
        <span>Add User</span>
      </button>
    </div>

    <!-- Loading -->
    <div v-if="loading" class="state-message">Loading...</div>

    <!-- Error -->
    <div v-else-if="error" class="state-message state-message--error">
      {{ error }}
    </div>

    <!-- Table -->
    <div v-else class="table-container">
      <UserTable
        :users="users"
        :columns="[
          'id',
          'username',
          'fullName',
          'createdAt',
          'isActive',
          'isLoggedIn',
          'action',
        ]"
      />
    </div>
  </div>
</template>

<style scoped>
.users-view {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 36px 40px;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
}

.page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
}

.page-header-text {
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

.add-user-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 40px;
  padding: 0 18px;
  background-image: linear-gradient(90deg, #00c8ff 0%, #00e0ff 100%);
  border: none;
  border-radius: 10px;
  box-shadow: #00e0ff4d 0px 4px 20px 0px;
  color: #080c14;
  font-family: ui-sans-serif, system-ui, sans-serif;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.add-user-btn:hover {
  opacity: 0.9;
}

.table-container {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  background-color: #ffffff08;
  border: 1px solid #ffffff0f;
  border-radius: 16px;
  overflow: hidden;
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
