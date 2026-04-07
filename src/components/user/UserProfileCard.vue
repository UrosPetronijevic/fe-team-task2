<script setup lang="ts">
import type { User } from "@/types/user";

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
          <svg
            width="14"
            height="14"
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="12" y2="18" />
          </svg>
        </div>
        <div class="detail-content">
          <span class="detail-label">User ID</span>
          <span class="detail-value">{{ user.id }}</span>
        </div>
      </div>

      <div class="detail-row">
        <div class="detail-icon">
          <svg
            width="14"
            height="14"
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <polyline points="22,4 12,13 2,4" />
          </svg>
        </div>
        <div class="detail-content">
          <span class="detail-label">Email</span>
          <span class="detail-value">{{ user.email }}</span>
        </div>
      </div>

      <div class="detail-row">
        <div class="detail-icon">
          <svg
            width="14"
            height="14"
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        </div>
        <div class="detail-content">
          <span class="detail-label">Created At</span>
          <span class="detail-value">{{ formatDate(user.createdAt) }}</span>
        </div>
      </div>

      <div class="detail-row">
        <div class="detail-icon">
          <svg
            width="14"
            height="14"
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>
        <div class="detail-content">
          <span class="detail-label">Role</span>
          <span class="detail-value">{{ user.role }}</span>
        </div>
      </div>
    </div>

    <div class="profile-actions">
      <button class="edit-btn">
        <svg
          width="13"
          height="13"
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
          />
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
        </svg>
        Edit User
      </button>
      <button class="delete-btn">
        <svg
          width="13"
          height="13"
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="3 6 5 6 21 6" />
          <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
          <path d="M10 11v6" />
          <path d="M14 11v6" />
          <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped src="@/assets/css/components/user/UserProfileCard.css"></style>
