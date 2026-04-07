<script setup>
defineProps({
  label: {
    type: String,
    default: null,
  },
  title: {
    type: String,
    required: true,
  },

  subtitle: {
    type: String,
    default: null,
  },
});
</script>

<template>
  <div class="auth-card">
    <div class="gradient-line gradient-line--top" />
    <div class="gradient-line gradient-line--bottom" />

    <template v-if="$slots.icon">
      <div class="card-icon">
        <slot name="icon" />
      </div>
    </template>

    <span v-if="label" class="card-label">{{ label }}</span>
    <h1 class="card-title">{{ title }}</h1>
    <p v-if="subtitle" class="card-subtitle">{{ subtitle }}</p>

    <slot />
  </div>
</template>

<style scoped src="@/assets/css/components/auth/AuthCard.css"></style>
