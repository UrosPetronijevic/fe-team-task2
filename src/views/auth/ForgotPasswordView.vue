<script setup>
import { reactive, ref } from "vue";
import AuthLayout from "@/components/auth/AuthLayout.vue";
import BaseInput from "@/components/ui/BaseInput.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import BaseIcon from "@/components/ui/BaseIcon.vue";

const submitted = ref(false);

const form = reactive({
  email: "",
});

const errors = reactive({
  email: "",
});

function validate() {
  let valid = true;
  errors.email = "";

  if (!form.email.trim()) {
    errors.email = "Required";
    valid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Invalid email";
    valid = false;
  }

  return valid;
}

function handleSubmit() {
  if (!validate()) return;
  submitted.value = true;
}
</script>

<template>
  <AuthLayout
    title="Forgot password?"
    subtitle="No worries — enter the email address associated with your
      account and we'll send you a link to reset your password."
  >
    <template #header-icon>
      <div class="key-icon">
        <BaseIcon name="key" :size="22" :stroke-width="1.75" />
      </div>
    </template>

    <div class="form-container">
      <div v-if="submitted" class="success-box">
        <BaseIcon name="check" :size="18" />
        <span>Reset link sent! Check your inbox.</span>
      </div>

      <template v-else>
        <div class="form-fields">
          <BaseInput
            v-model="form.email"
            label="Email address"
            type="email"
            placeholder="you@example.com"
            icon="mail"
            :error="errors.email"
          />
        </div>

        <div class="form-actions">
          <BaseButton type="submit" @click="handleSubmit">
            Send reset link
          </BaseButton>
        </div>
      </template>
    </div>

    <div class="divider">
      <div class="divider-line" />
      <span class="divider-text">or</span>
      <div class="divider-line" />
    </div>

    <RouterLink to="/sign-in" class="back-link">
      <BaseIcon name="arrow-left" :size="16" />
      Back to sign in
    </RouterLink>
  </AuthLayout>
</template>

<style scoped src="@/assets/css/views/auth/ForgotPasswordView.css"></style>
