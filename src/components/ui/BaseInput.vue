<script setup>
defineProps({
  label: {
    type: String,
    default: null,
  },
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "",
  },
  modelValue: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: null,
    validator: (v) => ["user", "mail", "lock"].includes(v),
  },
  error: {
    type: String,
    default: null,
  },
});

defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="input-group">
    <div v-if="label" class="input-label-row">
      <label class="input-label">{{ label }}</label>
      <span v-if="error" class="input-error">{{ error }}</span>
    </div>
    <div class="input-wrapper">
      <svg
        v-if="icon === 'user'"
        class="input-icon"
        stroke="currentColor"
        fill="none"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        stroke-linecap="round"
        stroke-linejoin="round"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>

      <svg
        v-else-if="icon === 'mail'"
        class="input-icon"
        stroke="currentColor"
        fill="none"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        stroke-linecap="round"
        stroke-linejoin="round"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <polyline points="22,4 12,13 2,4" />
      </svg>

      <svg
        v-else-if="icon === 'lock'"
        class="input-icon"
        stroke="currentColor"
        fill="none"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        stroke-linecap="round"
        stroke-linejoin="round"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>

      <input
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        class="input-field"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </div>
  </div>
</template>

<style scoped src="@/assets/css/components/ui/BaseInput.css"></style>
