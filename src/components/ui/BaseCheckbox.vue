<script setup>
defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["update:modelValue"]);
</script>

<template>
  <label class="checkbox-wrapper">
    <div
      class="checkbox-box"
      :class="{ checked: modelValue }"
      @click="$emit('update:modelValue', !modelValue)"
    >
      <svg
        v-if="modelValue"
        class="checkbox-icon"
        stroke="currentColor"
        fill="none"
        stroke-width="2.5"
        viewBox="0 0 24 24"
        stroke-linecap="round"
        stroke-linejoin="round"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </div>
    <div class="checkbox-label">
      <slot />
    </div>
  </label>
</template>

<style scoped>
.checkbox-wrapper {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
  cursor: pointer;
}

.checkbox-box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  margin-top: 1px;
  background-color: transparent;
  border: 1px solid #00e0ff66;
  border-radius: 5px;
  transition: background-color 0.2s ease, border-color 0.2s ease;
}

.checkbox-box.checked {
  background-color: #00e0ff26;
  border-color: #00e0ff66;
}

.checkbox-icon {
  width: 12px;
  height: 12px;
  color: #00e0ff;
}

.checkbox-label {
  display: flex;
  flex-wrap: wrap;
  column-gap: 4px;
  color: #ffffff80;
  font-family: ui-sans-serif, system-ui, sans-serif;
  font-size: 13px;
  line-height: 1.5;
}

/* for any <a> tags passed in the slot */
.checkbox-label :deep(a) {
  color: #00e0ff;
  font-weight: 500;
  text-decoration: none;
}

.checkbox-label :deep(a:hover) {
  text-decoration: underline;
}
</style>
