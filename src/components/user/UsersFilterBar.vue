<script setup lang="ts">
import BaseIcon from "@/components/ui/BaseIcon.vue";
import BaseSelect from "@/components/ui/BaseSelect.vue";
import type { SelectOption } from "@/components/ui/BaseSelect.vue";

const statusOptions: SelectOption[] = [
  { label: "Status", value: "all" },
  { label: "Active", value: "active" },
  { label: "Inactive", value: "inactive" },
];

const loggedInOptions: SelectOption[] = [
  { label: "Logged In", value: "all" },
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
];

defineProps<{
  search: string;
  status: string;
  loggedIn: string;
  total: number;
  filtered: number;
}>();

const emit = defineEmits<{
  "update:search": [value: string];
  "update:status": [value: string];
  "update:loggedIn": [value: string];
}>();
</script>

<template>
  <div class="filter-bar">
    <div class="search-wrap">
      <BaseIcon name="search" :size="14" class="search-icon" />
      <input
        :value="search"
        class="search-input"
        type="text"
        placeholder="Search users..."
        @input="
          emit('update:search', ($event.target as HTMLInputElement).value)
        "
      />
    </div>

    <div class="filters">
      <BaseSelect
        :model-value="status"
        :options="statusOptions"
        icon="filter"
        width="130px"
        @update:model-value="emit('update:status', $event)"
      />
      <BaseSelect
        :model-value="loggedIn"
        :options="loggedInOptions"
        width="130px"
        @update:model-value="emit('update:loggedIn', $event)"
      />
    </div>

    <span class="results-count">
      Showing {{ filtered }} of {{ total }} users
    </span>
  </div>
</template>

<style scoped>
.filter-bar {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  flex-wrap: wrap;
}

.search-wrap {
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 180px;
  max-width: 300px;
}

.search-icon {
  position: absolute;
  left: 12px;
  color: var(--text-secondary);
  pointer-events: none;
}

.search-input {
  width: 100%;
  height: 38px;
  padding: 0 12px 0 36px;
  background-color: var(--bg-elevated);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  color: var(--text-primary);
  font-family: ui-sans-serif, system-ui, sans-serif;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s ease;
}

.search-input::placeholder {
  color: var(--text-secondary);
}

.search-input:focus {
  border-color: var(--accent-muted);
}

.filters {
  display: flex;
  align-items: center;
  gap: 8px;
}

.results-count {
  margin-left: auto;
  color: var(--text-secondary);
  font-family: ui-sans-serif, system-ui, sans-serif;
  font-size: 14px;
  white-space: nowrap;
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .search-wrap {
    max-width: 100%;
  }

  .results-count {
    display: none;
  }
}

@media (max-width: 560px) {
  .filter-bar {
    gap: 8px;
  }

  .search-wrap {
    min-width: 100%;
  }
}
</style>
