<script setup>
defineProps({
  label: {
    type: String,
    default: null,
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: null,
  },
});
</script>

<template>
  <div class="auth-card">
    <!-- Decorative gradient lines -->
    <div class="gradient-line gradient-line--top" />
    <div class="gradient-line gradient-line--bottom" />

    <!-- Header -->
    <template v-if="$slots.icon">
      <div class="card-icon">
        <slot name="icon" />
      </div>
    </template>

    <span v-if="label" class="card-label">{{ label }}</span>
    <h1 class="card-title">{{ title }}</h1>
    <p v-if="subtitle" class="card-subtitle">{{ subtitle }}</p>

    <!-- Content -->
    <slot />
  </div>
</template>

<style scoped>
.auth-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 520px;
  z-index: 10;
  padding: 56px;
  background-color: #ffffff14;
  border: 1px solid #00e0ff40;
  border-radius: 24px;
  box-shadow: #00e0ff33 0px 0px 120px 0px, #00000066 0px 12px 80px 0px,
    #ffffff26 0px 1px 0px 0px inset;
  backdrop-filter: blur(40px);
}

.gradient-line {
  position: absolute;
  height: 1px;
}

.gradient-line--top {
  width: 70%;
  top: 0;
  left: 78px;
  background-image: linear-gradient(
    90deg,
    #00000000 0%,
    #00e0ffb3 50%,
    #00000000 100%
  );
}

.gradient-line--bottom {
  width: 40%;
  bottom: 0;
  left: 156px;
  background-image: linear-gradient(
    90deg,
    #00000000 0%,
    #00e0ff40 50%,
    #00000000 100%
  );
}

.card-icon {
  margin-bottom: 24px;
}

.card-label {
  margin-bottom: 12px;
  color: #00e0ffb3;
  font-family: ui-sans-serif, system-ui, sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.33333;
  letter-spacing: 3px;
  text-transform: uppercase;
}

.card-title {
  margin: 0 0 8px 0;
  color: #ffffff;
  font-family: ui-sans-serif, system-ui, sans-serif;
  font-size: 30px;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.5px;
  text-align: center;
}

.card-subtitle {
  margin: 0 0 32px 0;
  color: #ffffff66;
  font-family: ui-sans-serif, system-ui, sans-serif;
  font-size: 13px;
  line-height: 1.5;
  text-align: center;
}
</style>
