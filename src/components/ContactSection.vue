<script setup>
import { contact, contactChannels } from '../data/site'
</script>

<template>
  <section id="contato" class="section contact">
    <div class="container contact-grid">
      <div>
        <h2 class="section-title contact-title"><template v-for="(line, i) in contact.title_lines" :key="i"><br v-if="i > 0">{{ line }}</template><span class="cursor">_</span></h2>
        <p class="contact-text">{{ contact.text }}</p>
        <div class="btn-row contact-actions">
          <v-btn :href="contact.primary_button.href" class="btn btn--primary" variant="flat">
            {{ contact.primary_button.label }}
          </v-btn>
          <v-btn :href="contact.secondary_button.href" class="btn btn--outline" variant="outlined">
            {{ contact.secondary_button.label }}
          </v-btn>
        </div>
      </div>

      <ul class="channels">
        <li v-for="channel in contactChannels" :key="channel.id">
          <a :href="channel.url" class="channel">
            <v-icon :icon="channel.icon" size="20" class="channel-icon" />
            <span>
              <span class="channel-label">{{ channel.label }}</span>
              <span class="channel-value">{{ channel.value }}</span>
            </span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.contact {
  background: #000000;
  color: #ffffff;
  padding-bottom: 96px;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 64px;
}

.contact-title {
  font-size: clamp(2.4rem, 5vw, 3.6rem);
}

.contact-text {
  margin: 28px 0 0;
  max-width: 540px;
  color: #c3c9cd;
  font-size: 1.15rem;
  font-weight: 300;
  line-height: 1.7;
}

.contact-actions {
  margin-top: 40px;
}

.channels {
  margin: 0 0 0 auto;
  padding: 0;
  width: 100%;
  max-width: 460px;
  list-style: none;
  border-top: 1px solid var(--delta-border);
}

.channels li {
  border-bottom: 1px solid var(--delta-border);
}

.channel {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 22px 0;
  color: #ffffff;
  text-decoration: none;
}

.channel-icon {
  color: var(--delta-cyan);
}

.channel-label {
  display: block;
  color: #8d959a;
  font-size: 0.82rem;
}

.channel-value {
  display: block;
  margin-top: 2px;
  font-size: 1.1rem;
  transition: color 0.2s ease;
}

.channel:hover .channel-value {
  color: var(--delta-cyan);
}

@media (max-width: 960px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .channels {
    margin: 0;
    max-width: none;
  }
}
</style>
