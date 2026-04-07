<script setup>
defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  error: { type: Boolean, default: false },
});

defineEmits(["update:modelValue"]);
</script>

<template>
  <label class="checkbox-wrapper">
    <div
      class="checkbox-box"
      :class="{ checked: modelValue, error: error }"
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

<style scoped src="@/assets/css/components/ui/BaseCheckbox.css"></style>
