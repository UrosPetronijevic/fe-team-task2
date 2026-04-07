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
    <!-- Avatar -->
    <div class="avatar">
      <span class="avatar-initials">{{ initials }}</span>
    </div>

    <!-- Name -->
    <h2 class="profile-name">{{ user.fullName }}</h2>
    <span class="profile-username">@{{ user.username }}</span>

    <!-- Badges -->
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

    <!-- Detail rows -->
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

    <!-- Actions -->
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

<style scoped>
.profile-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 360px;
  flex-shrink: 0;
  padding: 32px 28px;
  background-color: #ffffff08;
  border: 1px solid #ffffff0f;
  border-radius: 16px;
  box-sizing: border-box;
}

.avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 88px;
  height: 88px;
  border-radius: 9999px;
  background: linear-gradient(135deg, #00c8ff26 0%, #00e0ff1a 100%);
  border: 2px solid #00e0ff30;
  margin-bottom: 16px;
}

.avatar-initials {
  color: #00e0ff;
  font-family: ui-sans-serif, system-ui, sans-serif;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.profile-name {
  margin: 0 0 4px 0;
  color: #ffffff;
  font-family: ui-sans-serif, system-ui, sans-serif;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
}

.profile-username {
  color: #00e0ff;
  font-family: ui-sans-serif, system-ui, sans-serif;
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 16px;
}

.profile-badges {
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
}

.badge {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: 9999px;
  font-family: ui-sans-serif, system-ui, sans-serif;
  font-size: 12px;
  font-weight: 600;
}

.badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 9999px;
}

.badge--green {
  background-color: #4ade8014;
  border: 1px solid #4ade8033;
  color: #4ade80;
}
.badge--green .badge-dot {
  background-color: #4ade80;
}

.badge--red {
  background-color: #ff6b6b14;
  border: 1px solid #ff6b6b33;
  color: #ff6b6b;
}
.badge--red .badge-dot {
  background-color: #ff6b6b;
}

.badge--cyan {
  background-color: #00e0ff14;
  border: 1px solid #00e0ff33;
  color: #00e0ff;
}
.badge--cyan .badge-dot {
  background-color: #00e0ff;
}

.badge--muted {
  background-color: #ffffff0a;
  border: 1px solid #ffffff14;
  color: #ffffff40;
}
.badge--muted .badge-dot {
  background-color: #ffffff40;
}

.profile-details {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 24px;
}

.detail-row {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 0;
  border-bottom: 1px solid #ffffff08;
}

.detail-row:last-child {
  border-bottom: none;
}

.detail-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: #ffffff0a;
  border-radius: 8px;
  color: #ffffff40;
  flex-shrink: 0;
}

.detail-content {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.detail-label {
  color: #ffffff40;
  font-family: ui-sans-serif, system-ui, sans-serif;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.detail-value {
  color: #ffffffcc;
  font-family: ui-sans-serif, system-ui, sans-serif;
  font-size: 14px;
  font-weight: 500;
}

.profile-actions {
  display: flex;
  gap: 10px;
  width: 100%;
}

.edit-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex: 1;
  height: 40px;
  background-color: #ffffff0d;
  border: 1px solid #ffffff1a;
  border-radius: 10px;
  color: #ffffffcc;
  font-family: ui-sans-serif, system-ui, sans-serif;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.edit-btn:hover {
  background-color: #ffffff1a;
}

.delete-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #ff4d4d0d;
  border: 1px solid #ff4d4d30;
  border-radius: 10px;
  color: #ff6b6b;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.delete-btn:hover {
  background-color: #ff4d4d20;
}
</style>
