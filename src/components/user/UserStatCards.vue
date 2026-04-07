<script setup lang="ts">
defineProps<{
  totalLogins: number;
  lastLogin: string;
  isLoggedIn: boolean;
  sessions: number;
}>();

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
</script>

<template>
  <div class="stat-cards">
    <div class="stat-card">
      <div class="stat-card-header">
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
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
        <span class="stat-label">Total Logins</span>
      </div>
      <div class="stat-value">{{ totalLogins }}</div>
      <div class="stat-sub">+12 this week</div>
    </div>

    <div class="stat-card">
      <div class="stat-card-header">
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
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
        <span class="stat-label">Last Active</span>
      </div>
      <div class="stat-value">{{ formatDate(lastLogin) }}</div>
      <div :class="['stat-sub', isLoggedIn && 'stat-sub--green']">
        {{ isLoggedIn ? "Online now" : "Offline" }}
      </div>
    </div>

    <div class="stat-card">
      <div class="stat-card-header">
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
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
        <span class="stat-label">Sessions</span>
      </div>
      <div class="stat-value">{{ sessions }}</div>
      <div class="stat-sub">{{ Math.min(sessions, 3) }} active</div>
    </div>
  </div>
</template>

<style scoped src="@/assets/css/components/user/UserStatCards.css"></style>
