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
    default: null, // 'user' | 'mail' | 'lock'
    validator: (v) => ["user", "mail", "lock"].includes(v),
  },
});

defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="input-group">
    <label v-if="label" class="input-label">{{ label }}</label>
    <div class="input-wrapper">
      <!-- User Icon -->
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

      <!-- Mail Icon -->
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

      <!-- Lock Icon -->
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

<style scoped>
.input-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}

.input-label {
  color: #ffffffcc;
  font-family: ui-sans-serif, system-ui, sans-serif;
  font-size: 14px;
  font-weight: 500;
}

.input-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  height: 50px;
  padding: 0 16px;
  background-color: #ffffff0a;
  border: 1px solid #00e0ff1a;
  border-radius: 12px;
  transition: border-color 0.2s ease;
}

.input-wrapper:focus-within {
  border-color: #00e0ff66;
}

.input-icon {
  width: 18px;
  height: 18px;
  color: #00e0ff80;
  flex-shrink: 0;
}

.input-field {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: #ffffff;
  font-family: ui-sans-serif, system-ui, sans-serif;
  font-size: 14px;
  line-height: 1.42857;
}

.input-field::placeholder {
  color: #ffffff40;
}
</style>
