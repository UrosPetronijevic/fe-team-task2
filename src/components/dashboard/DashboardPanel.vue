<script setup lang="ts">
import type { User } from "@/types/user";
import UserTable from "@/components/user/UserTable.vue";

defineProps<{
  title: string;
  users: User[];
  dot: "green" | "red" | "purple" | "cyan";
}>();
</script>

<template>
  <div class="panel">
    <div class="panel-header">
      <div class="panel-title">
        <span :class="['panel-dot', `panel-dot--${dot}`]" />
        <span class="panel-label">{{ title }}</span>
      </div>
      <span class="panel-count">{{ users.length }}</span>
    </div>

    <UserTable :users="users" :columns="['id', 'username', 'fullName']" />
  </div>
</template>

<style scoped>
.panel {
  display: flex;
  flex-direction: column;
  background-color: #ffffff08;
  border: 1px solid #ffffff0f;
  border-radius: 16px;
  overflow: hidden;
  min-height: 0;
}

.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid #ffffff0a;
}

.panel-title {
  display: flex;
  align-items: center;
  gap: 10px;
}

.panel-dot {
  width: 10px;
  height: 10px;
  border-radius: 9999px;
  flex-shrink: 0;
}

.panel-dot--green {
  background-color: #4ade80;
  box-shadow: 0 0 8px #4ade8099;
}

.panel-dot--red {
  background-color: #ff6b6b;
  box-shadow: 0 0 8px #ff6b6b99;
}

.panel-dot--purple {
  background-color: #a855f7;
  box-shadow: 0 0 8px #a855f799;
}

.panel-dot--cyan {
  background-color: #00e0ff;
  box-shadow: 0 0 8px #00e0ff99;
}

.panel-label {
  color: #ffffffcc;
  font-family: ui-sans-serif, system-ui, sans-serif;
  font-size: 14px;
  font-weight: 600;
}

.panel-count {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  height: 24px;
  padding: 0 8px;
  background-color: #ffffff14;
  border-radius: 9999px;
  color: #ffffffcc;
  font-family: ui-sans-serif, system-ui, sans-serif;
  font-size: 12px;
  font-weight: 700;
}
</style>
