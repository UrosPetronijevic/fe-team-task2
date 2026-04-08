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
  confirmPassword: "",
  agreed: false,
});

const errors = reactive({
  email: "",
  password: "",
  confirmPassword: "",
  agreed: false,
});

function validate() {
  let valid = true;

  errors.email = "";
  errors.password = "";
  errors.confirmPassword = "";
  errors.agreed = false;

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
  } else if (form.password.length < 8) {
    errors.password = "Min. 8 characters";
    valid = false;
  }

  if (!form.confirmPassword) {
    errors.confirmPassword = "Required";
    valid = false;
  } else if (form.password !== form.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
    valid = false;
  }

  if (!form.agreed) {
    errors.agreed = true;
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
    label="Get Started"
    title="Create your account"
    subtitle="Join thousands of users building amazing projects"
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
        placeholder="Create a password"
        icon="lock"
        :error="errors.password"
      />
      <BaseInput
        v-model="form.confirmPassword"
        label="Confirm password"
        type="password"
        placeholder="Confirm your password"
        icon="lock"
        :error="errors.confirmPassword"
      />
    </div>

    <div class="form-actions">
      <BaseCheckbox v-model="form.agreed" :error="errors.agreed">
        I agree to the
        <a href="#">Terms of Service</a>
        and
        <a href="#">Privacy Policy</a>
      </BaseCheckbox>

      <BaseButton type="submit" @click="handleSubmit">
        Create account
      </BaseButton>

      <p class="footer-text">
        Already have an account?
        <RouterLink to="/sign-in">Sign in</RouterLink>
      </p>
    </div>
  </AuthLayout>
</template>

<style scoped src="@/views/auth/SignUpView.css"></style>
