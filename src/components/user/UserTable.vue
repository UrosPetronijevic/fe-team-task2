<script setup lang="ts">
import { computed, ref } from "vue";
import type { User } from "@/types/user";
import BaseIcon from "@/components/ui/BaseIcon.vue";

export type ColumnKey =
  | "id"
  | "username"
  | "fullName"
  | "createdAt"
  | "isActive"
  | "isLoggedIn"
  | "action";

type SortDir = "asc" | "desc";

const props = defineProps<{
  users: User[];
  columns: ColumnKey[];
}>();

const columnLabels: Record<ColumnKey, string> = {
  id: "ID",
  username: "Username",
  fullName: "Full Name",
  createdAt: "Created At",
  isActive: "Active",
  isLoggedIn: "Logged In",
  action: "Action",
};

const sortableColumns: ColumnKey[] = [
  "id",
  "username",
  "fullName",
  "createdAt",
  "isActive",
  "isLoggedIn",
];

const sortKey = ref<ColumnKey>("id");
const sortDir = ref<SortDir>("asc");

function toggleSort(col: ColumnKey) {
  if (!sortableColumns.includes(col)) return;
  if (sortKey.value === col) {
    sortDir.value = sortDir.value === "asc" ? "desc" : "asc";
  } else {
    sortKey.value = col;
    sortDir.value = "asc";
  }
}

const sortedUsers = computed(() => {
  return [...props.users].sort((a, b) => {
    const key = sortKey.value;
    const dir = sortDir.value === "asc" ? 1 : -1;

    const aVal = a[key as keyof User];
    const bVal = b[key as keyof User];

    if (typeof aVal === "boolean" && typeof bVal === "boolean") {
      return (Number(aVal) - Number(bVal)) * dir;
    }

    if (typeof aVal === "number" && typeof bVal === "number") {
      return (aVal - bVal) * dir;
    }

    return String(aVal).localeCompare(String(bVal)) * dir;
  });
});

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function userPath(id: number): string {
  return `/users/${id}`;
}
</script>

<template>
  <div class="table-wrapper">
    <table class="user-table">
      <thead>
        <tr>
          <th
            v-for="col in columns"
            :key="col"
            :class="[
              'col-' + col,
              sortableColumns.includes(col) && 'sortable',
              sortKey === col && 'sort-active',
            ]"
            @click="toggleSort(col)"
          >
            <span class="th-inner">
              {{ columnLabels[col] }}
              <span v-if="sortableColumns.includes(col)" class="sort-indicator">
                <BaseIcon
                  v-if="sortKey === col && sortDir === 'asc'"
                  name="chevron-up"
                  :size="10"
                  :stroke-width="2.5"
                />
                <BaseIcon
                  v-else-if="sortKey === col && sortDir === 'desc'"
                  name="chevron-down"
                  :size="10"
                  :stroke-width="2.5"
                />
                <BaseIcon
                  v-else
                  name="chevron-up"
                  :size="10"
                  :stroke-width="2.5"
                  class="sort-idle"
                />
              </span>
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in sortedUsers" :key="user.id">
          <td v-if="columns.includes('id')" class="col-id">
            <span class="id-cell"># {{ user.id }}</span>
          </td>

          <td v-if="columns.includes('username')" class="col-username">
            <RouterLink :to="userPath(user.id)" class="username-link">
              {{ user.username }}
            </RouterLink>
          </td>

          <td v-if="columns.includes('fullName')" class="col-fullName">
            {{ user.fullName }}
          </td>

          <td v-if="columns.includes('createdAt')" class="col-createdAt">
            <span class="muted">{{ formatDate(user.createdAt) }}</span>
          </td>

          <td v-if="columns.includes('isActive')" class="col-isActive">
            <span
              :class="['status-badge', user.isActive ? 'active' : 'inactive']"
            >
              {{ user.isActive ? "Active" : "Inactive" }}
            </span>
          </td>

          <td v-if="columns.includes('isLoggedIn')" class="col-isLoggedIn">
            <span :class="['loggedin-badge', user.isLoggedIn ? 'yes' : 'no']">
              {{ user.isLoggedIn ? "Yes" : "No" }}
            </span>
          </td>

          <td v-if="columns.includes('action')" class="col-action">
            <a
              :href="userPath(user.id)"
              class="action-btn"
              @click.prevent="$router.push(userPath(user.id))"
            >
              <BaseIcon name="external-link" :size="14" />
            </a>
          </td>
        </tr>

        <tr v-if="sortedUsers.length === 0">
          <td :colspan="columns.length" class="empty-state">No users found.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped src="@/assets/css/components/user/UserTable.css"></style>
