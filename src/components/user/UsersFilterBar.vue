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

<style scoped src="@/components/user/UserFilterBar.css"></style>
