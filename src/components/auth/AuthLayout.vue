<script setup lang="ts">
import BaseIcon from "@/components/ui/BaseIcon.vue";

withDefaults(
  defineProps<{
    label?: string;
    title: string;
    subtitle?: string;
  }>(),
  {}
);
</script>

<template>
  <div class="auth-page">
    <div class="auth-brand">
      <div class="brand-icon">
        <BaseIcon name="layers" :size="18" :stroke-width="2.5" />
      </div>
      <span class="brand-name">Pulse</span>
    </div>

    <div class="auth-left" aria-hidden="true">
      <div class="circles-wrap">
        <div class="ring ring--outer" />
        <div class="ring ring--inner" />
        <div class="glow-core" />
        <svg
          class="sparkle"
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28 4C28 4 30 20 34 26C38.5 33 52 28 52 28C52 28 38.5
               23 34 30C30 36 28 52 28 52C28 52 26 36 22 30C18 23
               4 28 4 28C4 28 18 33 22 26C26 20 28 4 28 4Z"
            fill="currentColor"
          />
          <path
            d="M42 10C42 10 43 17 45 20C47.5 24 54 22 54 22C54 22
               47.5 20 45 24C43 27 42 34 42 34C42 34 41 27 39 24
               C37 20 30 22 30 22C30 22 37 24 39 20C41 17 42 10 42 10Z"
            fill="currentColor"
            opacity="0.55"
          />
        </svg>
      </div>

      <div class="left-footer">
        <p class="left-tagline">
          Monitor your users and platform health in real time.<br />
          Stay in control, always.
        </p>
        <div class="trust-badges">
          <span class="badge"
            ><span class="badge-dot" />256-bit SSL encrypted</span
          >
          <span class="badge"
            ><span class="badge-dot" />Role-based access control</span
          >
          <span class="badge"><span class="badge-dot" />99.9% uptime</span>
        </div>
      </div>
    </div>

    <div class="auth-right">
      <div class="auth-form-area">
        <div class="auth-header">
          <slot name="header-icon" />
          <p v-if="label" class="auth-label">{{ label }}</p>
          <h1 class="auth-title">{{ title }}</h1>
          <p v-if="subtitle" class="auth-subtitle">{{ subtitle }}</p>
        </div>
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped src="@/components/auth/AuthLayout.css"></style>
