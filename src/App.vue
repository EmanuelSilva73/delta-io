<script setup>
import AppNavbar from './components/AppNavbar.vue'
import HeroSection from './components/HeroSection.vue'
import ServicesSection from './components/ServicesSection.vue'
</script>

<template>
  <v-app>
    <AppNavbar />

    <v-main>
      <HeroSection />

      <ServicesSection />
    </v-main>
  </v-app>
</template>