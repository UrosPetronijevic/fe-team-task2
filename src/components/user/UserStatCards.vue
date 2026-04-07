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

<style scoped>
.stat-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.stat-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px 24px;
  background-color: #ffffff08;
  border: 1px solid #ffffff0f;
  border-radius: 16px;
}

.stat-card-header {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #ffffff40;
}

.stat-label {
  font-family: ui-sans-serif, system-ui, sans-serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.stat-value {
  color: #ffffff;
  font-family: ui-sans-serif, system-ui, sans-serif;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -0.5px;
  line-height: 1;
}

.stat-sub {
  color: #ffffff40;
  font-family: ui-sans-serif, system-ui, sans-serif;
  font-size: 12px;
}

.stat-sub--green {
  color: #4ade80;
}
</style>
