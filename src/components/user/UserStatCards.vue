<script setup lang="ts">
import BaseIcon from "@/components/ui/BaseIcon.vue";

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
        <BaseIcon name="arrow-right" :size="14" />
        <span class="stat-label">Total Logins</span>
      </div>
      <div class="stat-value">{{ totalLogins }}</div>
      <div class="stat-sub">+12 this week</div>
    </div>

    <div class="stat-card">
      <div class="stat-card-header">
        <BaseIcon name="clock" :size="14" />
        <span class="stat-label">Last Active</span>
      </div>
      <div class="stat-value">{{ formatDate(lastLogin) }}</div>
      <div :class="['stat-sub', isLoggedIn && 'stat-sub--green']">
        {{ isLoggedIn ? "Online now" : "Offline" }}
      </div>
    </div>

    <div class="stat-card">
      <div class="stat-card-header">
        <BaseIcon name="activity" :size="14" />
        <span class="stat-label">Sessions</span>
      </div>
      <div class="stat-value">{{ sessions }}</div>
      <div class="stat-sub">{{ Math.min(sessions, 3) }} active</div>
    </div>
  </div>
</template>

<style scoped src="@/components/user/UserStatCards.css"></style>
