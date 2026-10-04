<script setup>
import { about, services } from '../data/site'
</script>

<template>
  <section id="sobre" class="section about">
    <div class="container">
      <div class="about-grid">
        <h2 class="section-title"><template v-for="(line, i) in about.title_lines" :key="i"><br v-if="i > 0">{{ line }}</template><span class="cursor">_</span></h2>

        <div class="about-text">
          <p class="about-lead">{{ about.lead }}</p>
          <p class="about-placeholder">{{ about.text }}</p>
        </div>
      </div>

      <hr class="about-divider">

      <div class="features">
        <div v-for="service in services" :key="service.id" class="feature">
          <span class="feature-icon">
            <v-icon :icon="service.icon" size="18" />
          </span>
          <div>
            <h3 class="feature-title">{{ service.title }}</h3>
            <p class="feature-text">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  background: #ffffff;
  color: var(--delta-text);
}

.about-grid {
  display: grid;
  grid-template-columns: 5fr 7fr;
  gap: 48px;
}

.about-lead {
  margin: 0;
  font-size: clamp(1.25rem, 2vw, 1.6rem);
  font-weight: 400;
  line-height: 1.5;
}

.about-placeholder {
  margin: 24px 0 0;
  color: var(--delta-text-muted);
  font-size: 1.05rem;
  line-height: 1.75;
}

.about-divider {
  margin: 56px 0 40px;
  border: 0;
  border-top: 1px solid var(--delta-border-light);
}

.features {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 32px;
}

.feature {
  display: flex;
  gap: 16px;
}

.feature-icon {
  display: inline-flex;
  flex: 0 0 44px;
  align-items: center;
  justify-content: center;
  height: 44px;
  border-radius: 6px;
  background: #000000;
  color: var(--delta-cyan);
}

.feature-title {
  margin: 0;
  font-size: 1.15rem;
  font-weight: 600;
}

.feature-text {
  margin: 8px 0 0;
  color: var(--delta-text-muted);
  font-size: 0.95rem;
  line-height: 1.6;
}

@media (max-width: 960px) {
  .about-grid,
  .features {
    grid-template-columns: 1fr;
  }

  .about-grid {
    gap: 28px;
  }
}
</style>
