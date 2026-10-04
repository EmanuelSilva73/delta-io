<script setup>
import AppNavbar from './components/AppNavbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import BlogSection from './components/BlogSection.vue'
import ClientsSection from './components/ClientsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import FollowSection from './components/FollowSection.vue'
import ContactSection from './components/ContactSection.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <v-app>
    <AppNavbar />

    <v-main>
      <HeroSection />
      <AboutSection />
      <BlogSection />
      <ClientsSection />
      <ProjectsSection />
      <FollowSection />
      <ContactSection />
      <AppFooter />
    </v-main>
  </v-app>
</template>
