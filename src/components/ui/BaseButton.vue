<script setup>
import BaseIcon from "@/components/ui/BaseIcon.vue";

defineProps({
  type: {
    type: String,
    default: "button",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <button :type="type" :disabled="disabled" class="base-button">
    <slot />
    <BaseIcon name="arrow-right" />
  </button>
</template>

<style scoped src="@/components/ui/BaseButton.css"></style>
