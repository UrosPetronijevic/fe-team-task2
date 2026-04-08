<script setup>
import BaseIcon from "@/components/ui/BaseIcon.vue";
defineEmits(["oauth"]);
</script>

<template>
  <div class="oauth-buttons">
    <button class="oauth-btn" @click="$emit('oauth', 'google')">
      <BaseIcon name="google" :size="14" />
      <span>Google</span>
    </button>

    <button class="oauth-btn" @click="$emit('oauth', 'github')">
      <BaseIcon name="github" :size="16" />
      <span>GitHub</span>
    </button>

    <button class="oauth-btn" @click="$emit('oauth', 'apple')">
      <BaseIcon name="apple" :size="16" />
      <span>Apple</span>
    </button>
  </div>
</template>

<style scoped src="@/components/auth/OAuthButtons.css"></style>
