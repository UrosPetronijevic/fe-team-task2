<script setup>
import BaseIcon from "@/components/ui/BaseIcon.vue";

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
  <label
    class="checkbox-wrapper"
    @click="$emit('update:modelValue', !modelValue)"
  >
    <div class="checkbox-box" :class="{ checked: modelValue, error: error }">
      <BaseIcon
        v-if="modelValue"
        name="check"
        class="checkbox-icon"
        :stroke-width="2.5"
      />
    </div>
    <div class="checkbox-label">
      <slot />
    </div>
  </label>
</template>

<style scoped src="@/components/ui/BaseCheckbox.css"></style>
