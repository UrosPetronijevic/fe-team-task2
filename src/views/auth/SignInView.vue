<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import AuthLayout from "@/components/auth/AuthLayout.vue";
import OAuthButtons from "@/components/auth/OAuthButtons.vue";
import BaseInput from "@/components/ui/BaseInput.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import BaseCheckbox from "@/components/ui/BaseCheckbox.vue";

const router = useRouter();
const authStore = useAuthStore();

const form = reactive({
  email: "",
  password: "",
  remember: false,
});

const errors = reactive({
  email: "",
  password: "",
});

function validate() {
  let valid = true;
  errors.email = "";
  errors.password = "";

  if (!form.email.trim()) {
    errors.email = "Required";
    valid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Invalid email";
    valid = false;
  }

  if (!form.password) {
    errors.password = "Required";
    valid = false;
  }

  return valid;
}

function handleOAuth(provider: string) {
  return provider;
}

function handleSubmit() {
  if (!validate()) return;
  authStore.login();
  router.push("/dashboard");
}
</script>

<template>
  <AuthLayout
    label="Welcome Back"
    title="Sign in to your account"
    subtitle="Access your dashboard and manage your projects"
  >
    <div class="oauth-wrapper">
      <OAuthButtons @oauth="handleOAuth" />
    </div>

    <div class="divider">
      <div class="divider-line" />
      <span class="divider-text">Or continue with email</span>
      <div class="divider-line" />
    </div>

    <div class="form-fields">
      <BaseInput
        v-model="form.email"
        label="Email address"
        type="email"
        placeholder="you@example.com"
        icon="mail"
        :error="errors.email"
      />
      <BaseInput
        v-model="form.password"
        label="Password"
        type="password"
        placeholder="Enter your password"
        icon="lock"
        :error="errors.password"
      />
    </div>

    <div class="form-actions">
      <div class="remember-row">
        <BaseCheckbox v-model="form.remember">Remember me</BaseCheckbox>
        <RouterLink to="/forgot-password" class="forgot-link">
          Forgot password?
        </RouterLink>
      </div>

      <BaseButton type="submit" @click="handleSubmit">Sign in</BaseButton>

      <p class="footer-text">
        Don't have an account?
        <RouterLink to="/sign-up">Create one</RouterLink>
      </p>
    </div>
  </AuthLayout>
</template>

<style scoped src="@/views/auth/SignInView.css"></style>
