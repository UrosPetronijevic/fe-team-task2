<script setup lang="ts">
import { computed, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useUsers } from "@/composables/useUsers";
import UserProfileCard from "@/components/user/UserProfileCard.vue";
import UserStatCards from "@/components/user/UserStatCards.vue";
import UserAccountDetails from "@/components/user/UserAccountDetails.vue";
import BaseIcon from "@/components/ui/BaseIcon.vue";

const route = useRoute();
const router = useRouter();
const { users, loading, error, fetchUsers } = useUsers();

onMounted(fetchUsers);

const user = computed(() => {
  const id = Number(route.params.id);
  return users.value.find((u) => u.id === id) ?? null;
});

watch(user, (val) => {
  document.title = val ? `${val.fullName} — Pulse` : "Pulse";
});

const totalLogins = computed(() => (user.value ? user.value.id * 17 + 42 : 0));

const sessions = computed(() => (user.value ? (user.value.id % 8) + 1 : 0));
</script>

<template>
  <div class="user-item-view">
    <div class="subheader">
      <button class="back-btn" @click="router.push('/users')">
        <BaseIcon name="arrow-left" :size="15" />
        Back to Users
      </button>
      <div class="breadcrumb">
        <span class="breadcrumb-parent">Users</span>
        <span class="breadcrumb-sep">/</span>
        <span class="breadcrumb-current">{{ user?.fullName ?? "..." }}</span>
      </div>
    </div>

    <div v-if="loading" class="state-message">Loading...</div>

    <div v-else-if="error" class="state-message state-message--error">
      {{ error }}
    </div>

    <div v-else-if="!user" class="state-message state-message--error">
      User not found.
    </div>

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

<style scoped src="@/views/user/UserItemView.css"></style>
