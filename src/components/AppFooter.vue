<script setup>
import AppLogo from './AppLogo.vue'
import { navLinks, site } from '../data/site'
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-inner">
        <AppLogo :size="28" />

        <nav class="footer-links" aria-label="Rodapé">
          <a v-for="link in navLinks" :key="link.id" :href="link.href">{{ link.label }}</a>
        </nav>

        <p class="footer-copy">{{ site.copyright }}</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #000000;
  color: #ffffff;
}

.footer-inner {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 24px;
  padding-top: 36px;
  padding-bottom: 48px;
  border-top: 1px solid var(--delta-border);
}

.footer-links {
  display: flex;
  gap: 24px;
}

.footer-links a {
  color: #b9c0c4;
  font-size: 0.9rem;
  text-decoration: none;
}

.footer-links a:hover {
  color: var(--delta-cyan);
}

.footer-copy {
  margin: 0;
  justify-self: end;
  color: #8d959a;
  font-size: 0.88rem;
}

@media (max-width: 800px) {
  .footer-inner {
    grid-template-columns: 1fr;
    justify-items: start;
  }

  .footer-links {
    flex-wrap: wrap;
  }

  .footer-copy {
    justify-self: start;
  }
}
</style>
