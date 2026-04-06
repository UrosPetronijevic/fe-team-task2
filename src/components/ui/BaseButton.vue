<script setup>
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
    <svg
      width="16"
      height="16"
      stroke="currentColor"
      fill="none"
      stroke-width="2"
      viewBox="0 0 24 24"
      stroke-linecap="round"
      stroke-linejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  </button>
</template>

<style scoped>
.base-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: 52px;
  background-image: linear-gradient(90deg, #00c8ff 0%, #00e0ff 100%);
  border: none;
  border-radius: 12px;
  box-shadow: #00e0ff66 0px 4px 30px 0px, #00e0ff26 0px 0px 60px 0px;
  color: #080c14;
  font-family: ui-sans-serif, system-ui, sans-serif;
  font-size: 15px;
  font-weight: 700;
  line-height: 1.5;
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.base-button:hover {
  opacity: 0.9;
}

.base-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
