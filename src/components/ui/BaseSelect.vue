<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import BaseIcon from "@/components/ui/BaseIcon.vue";

export interface SelectOption {
  label: string;
  value: string;
}

const props = defineProps<{
  modelValue: string;
  options: SelectOption[];
  icon?: string;
  width?: string;
}>();

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();

const open = ref(false);
const containerRef = ref<HTMLElement | null>(null);

const selectedLabel = computed(
  () =>
    props.options.find((o) => o.value === props.modelValue)?.label ??
    props.options[0]?.label
);

function select(value: string) {
  emit("update:modelValue", value);
  open.value = false;
}

function handleOutsideClick(e: MouseEvent) {
  if (containerRef.value && !containerRef.value.contains(e.target as Node)) {
    open.value = false;
  }
}

onMounted(() => document.addEventListener("mousedown", handleOutsideClick));
onUnmounted(() =>
  document.removeEventListener("mousedown", handleOutsideClick)
);
</script>

<template>
  <div ref="containerRef" class="base-select">
    <button
      class="base-select__trigger"
      :class="{ 'base-select__trigger--open': open }"
      :style="width ? { width } : {}"
      type="button"
      @click="open = !open"
    >
      <BaseIcon v-if="icon" :name="icon" :size="14" class="base-select__icon" />
      <span class="base-select__label">{{ selectedLabel }}</span>
      <BaseIcon
        name="chevron-down"
        :size="12"
        class="base-select__chevron"
        :class="{ 'base-select__chevron--open': open }"
      />
    </button>

    <Transition name="dropdown">
      <div v-if="open" class="base-select__dropdown">
        <button
          v-for="option in options"
          :key="option.value"
          type="button"
          class="base-select__option"
          :class="{
            'base-select__option--active': option.value === modelValue,
          }"
          @click="select(option.value)"
        >
          <BaseIcon
            v-if="option.value === modelValue"
            name="check"
            :size="12"
            class="base-select__check"
          />
          <span
            :style="option.value !== modelValue ? { paddingLeft: '20px' } : {}"
          >
            {{ option.label }}
          </span>
        </button>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.base-select {
  position: relative;
}

.base-select__trigger {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 38px;
  padding: 0 12px;
  background-color: var(--bg-elevated);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  color: var(--text-primary);
  font-family: ui-sans-serif, system-ui, sans-serif;
  font-size: 14px;
  cursor: pointer;
  white-space: nowrap;
  transition: border-color 0.2s ease, background-color 0.2s ease;
}

.base-select__trigger:hover,
.base-select__trigger--open {
  border-color: var(--accent-muted);
  background-color: var(--bg-surface);
}

.base-select__icon {
  color: var(--text-secondary);
  flex-shrink: 0;
}

.base-select__label {
  flex: 1;
  text-align: left;
}

.base-select__chevron {
  color: var(--text-secondary);
  flex-shrink: 0;
  transition: transform 0.2s ease;
}

.base-select__chevron--open {
  transform: rotate(180deg);
}

.base-select__dropdown {
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  min-width: 100%;
  background-color: var(--bg-elevated);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 4px;
  z-index: 200;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
}

.base-select__option {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 34px;
  padding: 0 10px;
  background: none;
  border: none;
  border-radius: 7px;
  color: var(--text-secondary);
  font-family: ui-sans-serif, system-ui, sans-serif;
  font-size: 14px;
  cursor: pointer;
  text-align: left;
  transition: background-color 0.15s ease, color 0.15s ease;
}

.base-select__option:hover {
  background-color: var(--accent-subtle);
  color: var(--text-primary);
}

.base-select__option--active {
  color: var(--accent);
}

.base-select__check {
  color: var(--accent);
  flex-shrink: 0;
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
