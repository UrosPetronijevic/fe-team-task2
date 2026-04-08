<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useUsers } from "@/composables/useUsers";
import DashboardPanel from "@/components/dashboard/DashboardPanel.vue";
import UsersFilterBar from "@/components/user/UsersFilterBar.vue";
import BaseIcon from "@/components/ui/BaseIcon.vue";

const { users, loading, error, fetchUsers } = useUsers();

onMounted(fetchUsers);

const search = ref("");
const statusFilter = ref("all");
const loggedInFilter = ref("all");

const filteredUsers = computed(() => {
  return users.value.filter((u) => {
    const matchesSearch =
      search.value.trim() === "" ||
      u.username.toLowerCase().includes(search.value.toLowerCase()) ||
      u.fullName.toLowerCase().includes(search.value.toLowerCase());

    const matchesStatus =
      statusFilter.value === "all" ||
      (statusFilter.value === "active" && u.isActive) ||
      (statusFilter.value === "inactive" && !u.isActive);

    const matchesLoggedIn =
      loggedInFilter.value === "all" ||
      (loggedInFilter.value === "yes" && u.isLoggedIn) ||
      (loggedInFilter.value === "no" && !u.isLoggedIn);

    return matchesSearch && matchesStatus && matchesLoggedIn;
  });
});
</script>

<template>
  <div class="users-view">
    <div class="page-header">
      <div class="page-header-text">
        <h1 class="page-title">Users</h1>
        <p class="page-subtitle">Manage and monitor all registered users</p>
      </div>
      <button class="add-user-btn">
        <BaseIcon name="plus" :size="15" :stroke-width="2.5" />
        <span>Add User</span>
      </button>
    </div>

    <UsersFilterBar
      v-model:search="search"
      v-model:status="statusFilter"
      v-model:logged-in="loggedInFilter"
      :total="users.length"
      :filtered="filteredUsers.length"
    />

    <div v-if="loading" class="state-message">Loading...</div>

    <div v-else-if="error" class="state-message state-message--error">
      {{ error }}
    </div>

    <div v-else class="table-container">
      <DashboardPanel
        title="All Users"
        dot="cyan"
        :users="filteredUsers"
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

<style scoped src="@/views/user/UsersView.css"></style>
