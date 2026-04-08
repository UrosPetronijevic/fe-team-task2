<script setup>
import { ref } from "vue";
import BaseIcon from "@/components/ui/BaseIcon.vue";

const inputRef = ref(null);

defineProps({
  label: { type: String, default: null },
  type: { type: String, default: "text" },
  placeholder: { type: String, default: "" },
  modelValue: { type: String, default: "" },
  icon: {
    type: String,
    default: null,
    validator: (v) => ["user", "mail", "lock"].includes(v),
  },
  error: { type: String, default: null },
});

defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="input-group">
    <div v-if="label" class="input-label-row">
      <label class="input-label" @click="inputRef?.focus()">{{ label }}</label>
      <span v-if="error" class="input-error">{{ error }}</span>
    </div>
    <div class="input-wrapper">
      <BaseIcon
        v-if="icon"
        :name="icon"
        class="input-icon"
        :stroke-width="1.5"
      />
      <input
        ref="inputRef"
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        class="input-field"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </div>
  </div>
</template>

<style scoped src="@/components/ui/BaseInput.css"></style>
