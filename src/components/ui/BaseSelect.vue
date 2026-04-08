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

<style scoped src="@/components/ui/BaseSelect.css"></style>
