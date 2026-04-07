<script setup lang="ts">
import type { User } from "@/types/user";

defineProps<{ user: User }>();

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
</script>

<template>
  <div class="details-panel">
    <h3 class="details-title">Account Details</h3>
    <div class="details-grid">
      <div class="details-row">
        <span class="details-key">Full Name</span>
        <span class="details-val">{{ user.fullName }}</span>
      </div>
      <div class="details-row">
        <span class="details-key">Username</span>
        <span class="details-val details-val--cyan">@{{ user.username }}</span>
      </div>
      <div class="details-row">
        <span class="details-key">Email</span>
        <span class="details-val">{{ user.email }}</span>
      </div>
      <div class="details-row">
        <span class="details-key">Phone</span>
        <span class="details-val">{{ user.phone }}</span>
      </div>
      <div class="details-row">
        <span class="details-key">Role</span>
        <span class="details-val">{{ user.role }}</span>
      </div>
      <div class="details-row">
        <span class="details-key">Address</span>
        <span class="details-val">{{ user.address }}</span>
      </div>
      <div class="details-row">
        <span class="details-key">Created At</span>
        <span class="details-val">{{ formatDate(user.createdAt) }}</span>
      </div>
      <div class="details-row">
        <span class="details-key">Last Login</span>
        <span class="details-val">{{ formatDate(user.lastLogin) }}</span>
      </div>
      <div class="details-row">
        <span class="details-key">Active</span>
        <span
          :class="[
            'details-val',
            user.isActive ? 'details-val--green' : 'details-val--red',
          ]"
        >
          {{ user.isActive ? "Yes" : "No" }}
        </span>
      </div>
      <div class="details-row">
        <span class="details-key">Logged In</span>
        <span
          :class="['details-val', user.isLoggedIn ? 'details-val--cyan' : '']"
        >
          {{ user.isLoggedIn ? "Yes" : "No" }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.details-panel {
  display: flex;
  flex-direction: column;
  padding: 24px;
  background-color: #ffffff08;
  border: 1px solid #ffffff0f;
  border-radius: 16px;
}

.details-title {
  margin: 0 0 16px 0;
  color: #ffffffcc;
  font-family: ui-sans-serif, system-ui, sans-serif;
  font-size: 15px;
  font-weight: 600;
}

.details-grid {
  display: flex;
  flex-direction: column;
}

.details-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid #ffffff08;
}

.details-row:last-child {
  border-bottom: none;
}

.details-key {
  color: #ffffff40;
  font-family: ui-sans-serif, system-ui, sans-serif;
  font-size: 13px;
}

.details-val {
  color: #ffffffcc;
  font-family: ui-sans-serif, system-ui, sans-serif;
  font-size: 13px;
  font-weight: 500;
  text-align: right;
}

.details-val--cyan {
  color: #00e0ff;
}
.details-val--green {
  color: #4ade80;
}
.details-val--red {
  color: #ff6b6b;
}
</style>
