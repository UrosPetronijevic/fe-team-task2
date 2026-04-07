<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import AuthCard from "@/components/auth/AuthCard.vue";
import BaseInput from "@/components/ui/BaseInput.vue";
import BaseButton from "@/components/ui/BaseButton.vue";

const router = useRouter();

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
  <div class="page">
    <div class="bg-gradient" />

    <AuthCard
      title="Forgot password?"
      subtitle="No worries — enter the email address associated with your account and we'll send you a link to reset your password."
    >
      <template #icon>
        <div class="key-icon">
          <svg
            width="22"
            height="22"
            stroke="currentColor"
            fill="none"
            stroke-width="1.75"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="7.5" cy="15.5" r="5.5" />
            <path d="M21 2l-9.6 9.6" />
            <path d="M15.5 7.5l3 3L22 7l-3-3" />
          </svg>
        </div>
      </template>

      <div class="form-container">
        <div v-if="submitted" class="success-box">
          <svg
            width="18"
            height="18"
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
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

      <RouterLink to="/signin" class="back-link">
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
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        Back to sign in
      </RouterLink>
    </AuthCard>
  </div>
</template>

<style scoped src="@/assets/css/views/auth/ForgotPasswordView.css"></style>
