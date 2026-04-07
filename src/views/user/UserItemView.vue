<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useUsers } from "@/composables/useUsers";
import UserProfileCard from "@/components/user/UserProfileCard.vue";
import UserStatCards from "@/components/user/UserStatCards.vue";
import UserAccountDetails from "@/components/user/UserAccountDetails.vue";

const route = useRoute();
const router = useRouter();
const { users, loading, error, fetchUsers } = useUsers();

onMounted(fetchUsers);

const user = computed(() => {
  const id = Number(route.params.id);
  return users.value.find((u) => u.id === id) ?? null;
});

const totalLogins = computed(() => (user.value ? user.value.id * 17 + 42 : 0));

const sessions = computed(() => (user.value ? (user.value.id % 8) + 1 : 0));
</script>

<template>
  <div class="user-item-view">
    <!-- Subheader -->
    <div class="subheader">
      <button class="back-btn" @click="router.push('/users')">
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
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        Back to Users
      </button>
      <div class="breadcrumb">
        <span class="breadcrumb-parent">Users</span>
        <span class="breadcrumb-sep">/</span>
        <span class="breadcrumb-current">{{ user?.fullName ?? "..." }}</span>
      </div>
    </div>

    <!-- Loading -->
    <div v-if="loading" class="state-message">Loading...</div>

    <!-- Error -->
    <div v-else-if="error" class="state-message state-message--error">
      {{ error }}
    </div>

    <!-- Not found -->
    <div v-else-if="!user" class="state-message state-message--error">
      User not found.
    </div>

    <!-- Content -->
    <div v-else class="content">
      <UserProfileCard :user="user" />

      <div class="right-area">
        <UserStatCards
          :total-logins="totalLogins"
          :last-login="user.lastLogin"
          :is-logged-in="user.isLoggedIn"
          :sessions="sessions"
        />
        <UserAccountDetails :user="user" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.user-item-view {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 28px 40px;
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
  scrollbar-width: thin;
  scrollbar-color: #ffffff14 transparent;
}

.subheader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
}

.back-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  color: #ffffff80;
  font-family: ui-sans-serif, system-ui, sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  padding: 0;
  transition: color 0.2s ease;
}

.back-btn:hover {
  color: #ffffff;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: ui-sans-serif, system-ui, sans-serif;
  font-size: 13px;
}

.breadcrumb-parent {
  color: #ffffff40;
}
.breadcrumb-sep {
  color: #ffffff20;
}
.breadcrumb-current {
  color: #ffffffcc;
  font-weight: 500;
}

.content {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.right-area {
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
  min-width: 0;
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
