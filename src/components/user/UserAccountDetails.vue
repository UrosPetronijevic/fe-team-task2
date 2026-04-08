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

<style scoped src="@/components/user/UserAccountDetails.css"></style>
