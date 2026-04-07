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

<style scoped src="@/assets/css/views/user/UsersView.css"></style>
