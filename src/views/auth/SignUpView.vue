<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import AuthCard from "@/components/auth/AuthCard.vue";
import OAuthButtons from "@/components/auth/OAuthButtons.vue";
import BaseInput from "@/components/ui/BaseInput.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import BaseCheckbox from "@/components/ui/BaseCheckbox.vue";

const router = useRouter();
const authStore = useAuthStore();

const form = reactive({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  agreed: false,
});

const errors = reactive({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  agreed: false,
});

function validate() {
  let valid = true;

  errors.name = "";
  errors.email = "";
  errors.password = "";
  errors.confirmPassword = "";
  errors.agreed = false;

  if (!form.name.trim()) {
    errors.name = "Required";
    valid = false;
  }

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
  console.log(`OAuth with ${provider}`);
}

function handleSubmit() {
  if (!validate()) return;

  authStore.login();
  router.push("/dashboard");
}
</script>

<template>
  <div class="page">
    <div class="bg-gradient" />

    <AuthCard
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
          v-model="form.name"
          label="Full name"
          placeholder="Enter your full name"
          icon="user"
          :error="errors.name"
        />
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
          <RouterLink to="/signin">Sign in</RouterLink>
        </p>
      </div>
    </AuthCard>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 24px;
}

.bg-gradient {
  position: fixed;
  width: 700px;
  height: 700px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 9999px;
  border: 1px solid #00e0ff1a;
  box-shadow: #00e0ff1a 0px 0px 160px 0px, #00e0ff0d 0px 0px 160px 0px inset;
  pointer-events: none;
}

.oauth-wrapper {
  width: 100%;
  margin-bottom: 24px;
}

.divider {
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  margin-bottom: 20px;
}

.divider-line {
  flex: 1;
  height: 1px;
  background-color: #ffffff14;
}

.divider-text {
  color: #ffffff4d;
  font-size: 11px;
  text-transform: uppercase;
  white-space: nowrap;
}

.form-fields {
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
  margin-bottom: 16px;
}

.form-actions {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}

.footer-text {
  text-align: center;
  color: #ffffff66;
  font-size: 13px;
}

.footer-text a {
  color: #00e0ff;
  font-weight: 600;
  text-decoration: none;
}

.footer-text a:hover {
  text-decoration: underline;
}
</style>
