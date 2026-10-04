<script setup>
import { followSection, socialLinks } from '../data/site'
</script>

<template>
  <section class="follow">
    <div class="container follow-inner">
      <div>
        <h2 class="follow-title">{{ followSection.title }}<span class="cursor">_</span></h2>
        <p class="follow-text">{{ followSection.text }}</p>
      </div>

      <ul class="socials">
        <li v-for="social in socialLinks" :key="social.id">
          <a :href="social.url" class="social" :aria-label="social.label">
            <span class="social-icon"><v-icon :icon="social.icon" size="20" /></span>
            <span class="social-label">{{ social.label }}</span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.follow {
  position: relative;
  padding: 64px 0;
  border-top: 1px solid var(--delta-border-light);
  background:
    radial-gradient(circle, rgba(15, 19, 22, 0.07) 1.2px, transparent 1.7px) 0 0 / 22px 22px,
    linear-gradient(180deg, #f7f9fa 0%, #e6eff3 100%);
  color: var(--delta-text);
}

.follow-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
}

.follow-title {
  margin: 0;
  font-size: clamp(1.6rem, 2.8vw, 2rem);
  font-weight: 600;
  letter-spacing: -0.02em;
}

.follow-text {
  margin: 10px 0 0;
  color: var(--delta-text-muted);
  font-size: 1rem;
}

.socials {
  display: flex;
  gap: 24px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.social {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  min-width: 64px;
  color: var(--delta-text);
  text-decoration: none;
}

.social-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: #000000;
  color: var(--delta-cyan);
  box-shadow: 0 0 0 4px #ffffff, 0 8px 20px rgba(15, 19, 22, 0.12);
  transition: transform 0.2s ease;
}

.social:hover .social-icon {
  transform: translateY(-3px);
}

.social-label {
  font-size: 0.85rem;
  font-weight: 600;
}

@media (max-width: 800px) {
  .follow-inner {
    flex-direction: column;
    align-items: flex-start;
  }

  .socials {
    gap: 16px;
  }
}
</style>
