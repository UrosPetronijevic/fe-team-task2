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

<style
  scoped
  src="@/assets/css/components/dashboard/DashboardPanel.css"
></style>
