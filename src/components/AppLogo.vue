<script setup>
import { site } from '../data/site'

defineProps({
  size: { type: Number, default: 30 },
})
</script>

<template>
  <a href="#inicio" class="logo" :aria-label="`${site.name}${site.tld} - início`">
    <span class="logo-mark" :style="{ width: `${size}px`, height: `${size}px` }">
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M6 7.5 10.5 12 6 16.5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M13 16.5h5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" />
      </svg>
    </span>
    <span class="logo-text">{{ site.name }}<span class="logo-tld">{{ site.tld }}</span></span>
  </a>
</template>

<style scoped>
.logo {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #ffffff;
  text-decoration: none;
  flex-shrink: 0;
}

.logo-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #3a4146;
  border-radius: 6px;
  background: #000000;
  color: var(--delta-cyan);
}

.logo-mark svg {
  width: 78%;
  height: 78%;
}

.logo-text {
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: -0.01em;
}

.logo-tld {
  font-weight: 300;
}
</style>
