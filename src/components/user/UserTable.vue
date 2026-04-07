<script setup lang="ts">
import { useRouter } from "vue-router";
import type { User } from "@/types/user";

export type ColumnKey =
  | "id"
  | "username"
  | "fullName"
  | "createdAt"
  | "isActive"
  | "isLoggedIn"
  | "action";

const props = defineProps<{
  users: User[];
  columns: ColumnKey[];
}>();

const router = useRouter();

const columnLabels: Record<ColumnKey, string> = {
  id: "ID",
  username: "Username",
  fullName: "Full Name",
  createdAt: "Created At",
  isActive: "Active",
  isLoggedIn: "Logged In",
  action: "Action",
};

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function goToUser(id: number) {
  router.push(`/users/${id}`);
}
</script>

<template>
  <div class="table-wrapper">
    <table class="user-table">
      <thead>
        <tr>
          <th v-for="col in columns" :key="col" :class="['col-' + col]">
            {{ columnLabels[col] }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <!-- ID -->
          <td v-if="columns.includes('id')" class="col-id">
            <span class="id-cell"># {{ user.id }}</span>
          </td>

          <!-- USERNAME -->
          <td v-if="columns.includes('username')" class="col-username">
            <RouterLink :to="`/users/${user.id}`" class="username-link">
              {{ user.username }}
            </RouterLink>
          </td>

          <!-- FULL NAME -->
          <td v-if="columns.includes('fullName')" class="col-fullName">
            {{ user.fullName }}
          </td>

          <!-- CREATED AT -->
          <td v-if="columns.includes('createdAt')" class="col-createdAt">
            <span class="muted">{{ formatDate(user.createdAt) }}</span>
          </td>

          <!-- ACTIVE -->
          <td v-if="columns.includes('isActive')" class="col-isActive">
            <span
              :class="['status-badge', user.isActive ? 'active' : 'inactive']"
            >
              {{ user.isActive ? "Active" : "Inactive" }}
            </span>
          </td>

          <!-- LOGGED IN -->
          <td v-if="columns.includes('isLoggedIn')" class="col-isLoggedIn">
            <span :class="['loggedin-badge', user.isLoggedIn ? 'yes' : 'no']">
              {{ user.isLoggedIn ? "Yes" : "No" }}
            </span>
          </td>

          <!-- ACTION -->
          <td v-if="columns.includes('action')" class="col-action">
            <button class="action-btn" @click="goToUser(user.id)">
              <svg
                width="14"
                height="14"
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </button>
          </td>
        </tr>

        <!-- Empty state -->
        <tr v-if="users.length === 0">
          <td :colspan="columns.length" class="empty-state">No users found.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.table-wrapper {
  width: 100%;
  overflow-x: auto;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #ffffff14 transparent;
}

.table-wrapper::-webkit-scrollbar {
  width: 4px;
}

.table-wrapper::-webkit-scrollbar-track {
  background: transparent;
}

.table-wrapper::-webkit-scrollbar-thumb {
  background-color: #ffffff14;
  border-radius: 9999px;
}

.user-table {
  width: 100%;
  border-collapse: collapse;
  font-family: ui-sans-serif, system-ui, sans-serif;
  font-size: 13px;
}

/* Header */
thead tr {
  border-bottom: 1px solid #ffffff0f;
}

th {
  padding: 10px 16px;
  color: #ffffff40;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  text-align: left;
  white-space: nowrap;
}

/* Rows */
tbody tr {
  border-bottom: 1px solid #ffffff08;
  transition: background-color 0.15s ease;
}

tbody tr:last-child {
  border-bottom: none;
}

tbody tr:hover {
  background-color: #ffffff05;
}

td {
  padding: 14px 16px;
  color: #ffffffcc;
  white-space: nowrap;
}

/* ID */
.id-cell {
  color: #ffffff40;
  font-size: 12px;
}

/* Username */
.username-link {
  color: #00e0ff;
  font-weight: 500;
  text-decoration: none;
}

.username-link:hover {
  text-decoration: underline;
}

/* Muted text */
.muted {
  color: #ffffff60;
}

/* Active badge */
.status-badge {
  font-size: 12px;
  font-weight: 600;
}

.status-badge.active {
  color: #ffffff;
}

.status-badge.inactive {
  color: #ff6b6b;
}

/* Logged in badge */
.loggedin-badge {
  font-size: 12px;
  font-weight: 600;
}

.loggedin-badge.yes {
  color: #00e0ff;
}

.loggedin-badge.no {
  color: #ffffff40;
}

/* Action button */
.action-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: #ffffff0d;
  border: 1px solid #ffffff14;
  border-radius: 8px;
  color: #ffffff80;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.action-btn:hover {
  background-color: #00e0ff14;
  border-color: #00e0ff30;
  color: #00e0ff;
}

/* Column widths */
.col-id {
  width: 80px;
}

.col-username {
  width: 160px;
}

.col-createdAt {
  width: 130px;
}

.col-isActive {
  width: 100px;
}

.col-isLoggedIn {
  width: 110px;
}

.col-action {
  width: 60px;
}

/* Empty state */
.empty-state {
  text-align: center;
  padding: 32px;
  color: #ffffff40;
}
</style>
