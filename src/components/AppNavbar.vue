<script setup>
import { ref } from 'vue'
import AppLogo from './AppLogo.vue'
import { navLinks, site } from '../data/site'

const menuOpen = ref(false)
</script>

<template>
  <header class="navbar">
    <div class="container navbar-inner">
      <AppLogo />

      <nav class="nav-links" aria-label="Navegação principal">
        <a v-for="link in navLinks" :key="link.id" :href="link.href">{{ link.label }}</a>
      </nav>

      <v-btn :href="site.cta.href" class="btn btn--primary navbar-cta" variant="flat">
        {{ site.cta.label }}
      </v-btn>

      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="menuOpen"
        aria-label="Abrir menu"
        @click="menuOpen = !menuOpen"
      >
        <v-icon :icon="menuOpen ? 'mdi-close' : 'mdi-menu'" size="26" />
      </button>
    </div>

    <Transition name="menu">
      <nav v-if="menuOpen" class="mobile-menu" aria-label="Navegação principal (mobile)">
        <a v-for="link in navLinks" :key="link.id" :href="link.href" @click="menuOpen = false">
          {{ link.label }}
        </a>
        <v-btn :href="site.cta.href" class="btn btn--primary" variant="flat" block @click="menuOpen = false">
          {{ site.cta.label }}
        </v-btn>
      </nav>
    </Transition>
  </header>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: #000000;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.navbar-inner {
  display: flex;
  align-items: center;
  height: var(--navbar-height);
}

.nav-links {
  display: flex;
  gap: 36px;
  margin: 0 auto;
}

.nav-links a,
.mobile-menu a {
  color: #d9dee2;
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav-links a:hover,
.mobile-menu a:hover {
  color: var(--delta-cyan);
}

.navbar-cta.v-btn {
  height: 44px;
  padding: 0 20px;
  font-size: 0.95rem;
}

.menu-toggle {
  display: none;
  margin-left: auto;
  padding: 6px;
  color: #ffffff;
  background: none;
  border: 0;
  cursor: pointer;
}

.mobile-menu {
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 16px 24px 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

@media (max-width: 800px) {
  .nav-links,
  .navbar-cta {
    display: none;
  }

  .menu-toggle {
    display: inline-flex;
  }
}

@media (min-width: 801px) {
  .mobile-menu {
    display: none;
  }
}
</style>
