<script setup lang="ts">
import type { User } from "@/types/user";
import type { ColumnKey } from "@/components/user/UserTable.vue";
import UserTable from "@/components/user/UserTable.vue";

withDefaults(
  defineProps<{
    title: string;
    users: User[];
    dot: "green" | "red" | "purple" | "cyan";
    columns?: ColumnKey[];
  }>(),
  {
    columns: () => ["id", "username", "fullName"],
  }
);
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

    <UserTable :users="users" :columns="columns" />
  </div>
</template>

<style scoped src="@/components/dashboard/DashboardPanel.css"></style>
