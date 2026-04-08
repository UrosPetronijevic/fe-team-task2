<script setup lang="ts">
import type { User } from "@/types/user";
import BaseIcon from "@/components/ui/BaseIcon.vue";

const props = defineProps<{ user: User }>();

const initials = props.user.fullName
  .split(" ")
  .map((n) => n[0])
  .join("")
  .toUpperCase()
  .slice(0, 2);

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
</script>

<template>
  <div class="profile-card">
    <div class="avatar">
      <span class="avatar-initials">{{ initials }}</span>
    </div>

    <h2 class="profile-name">{{ user.fullName }}</h2>
    <span class="profile-username">@{{ user.username }}</span>

    <div class="profile-badges">
      <span :class="['badge', user.isActive ? 'badge--green' : 'badge--red']">
        <span class="badge-dot" />
        {{ user.isActive ? "Active" : "Inactive" }}
      </span>
      <span
        :class="['badge', user.isLoggedIn ? 'badge--cyan' : 'badge--muted']"
      >
        <span class="badge-dot" />
        {{ user.isLoggedIn ? "Logged In" : "Offline" }}
      </span>
    </div>

    <div class="profile-details">
      <div class="detail-row">
        <div class="detail-icon">
          <BaseIcon name="list" :size="14" />
        </div>
        <div class="detail-content">
          <span class="detail-label">User ID</span>
          <span class="detail-value">{{ user.id }}</span>
        </div>
      </div>

      <div class="detail-row">
        <div class="detail-icon">
          <BaseIcon name="mail" :size="14" />
        </div>
        <div class="detail-content">
          <span class="detail-label">Email</span>
          <span class="detail-value">{{ user.email }}</span>
        </div>
      </div>

      <div class="detail-row">
        <div class="detail-icon">
          <BaseIcon name="calendar" :size="14" />
        </div>
        <div class="detail-content">
          <span class="detail-label">Created At</span>
          <span class="detail-value">{{ formatDate(user.createdAt) }}</span>
        </div>
      </div>

      <div class="detail-row">
        <div class="detail-icon">
          <BaseIcon name="shield" :size="14" />
        </div>
        <div class="detail-content">
          <span class="detail-label">Role</span>
          <span class="detail-value">{{ user.role }}</span>
        </div>
      </div>
    </div>

    <div class="profile-actions">
      <button class="edit-btn">
        <BaseIcon name="edit" :size="13" />
        Edit User
      </button>
      <button class="delete-btn">
        <BaseIcon name="trash" :size="13" />
      </button>
    </div>
  </div>
</template>

<style scoped src="@/components/user/UserProfileCard.css"></style>
