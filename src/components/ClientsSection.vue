<script setup>
import { computed } from 'vue'
import { clients, clientsSection, testimonials } from '../data/site'

const featured = computed(() => testimonials.find((item) => item.featured))
const others = computed(() => testimonials.filter((item) => !item.featured))
</script>

<template>
  <section id="clientes" class="section clients">
    <div class="container">
      <h2 class="section-title">{{ clientsSection.title }}<span class="cursor">_</span></h2>
      <p class="section-subtitle">{{ clientsSection.subtitle }}</p>

      <div class="logos">
        <div v-for="client in clients" :key="client.id" class="logo-box">
          <img v-if="client.logo" :src="client.logo" :alt="client.name" class="logo-img">
          <template v-else>{{ clientsSection.logo_placeholder }}</template>
        </div>
      </div>

      <div class="testimonials">
        <figure v-if="featured" class="testimonial testimonial--main">
          <v-icon icon="mdi-format-quote-open" class="quote-mark" size="56" />
          <blockquote class="testimonial-quote">{{ featured.quote }}</blockquote>
          <figcaption class="author">
            <span class="avatar">
              <img v-if="featured.avatar" :src="featured.avatar" :alt="featured.author_name">
              <v-icon v-else icon="mdi-account-outline" size="18" />
            </span>
            <span>
              <strong class="author-name">{{ featured.author_name }}</strong>
              <span class="author-role">{{ featured.author_role }}</span>
            </span>
          </figcaption>
        </figure>

        <div class="testimonials-side">
          <figure v-for="item in others" :key="item.id" class="testimonial">
            <v-icon icon="mdi-format-quote-open" class="quote-mark" size="36" />
            <blockquote class="testimonial-quote testimonial-quote--small">
              {{ item.quote }}
            </blockquote>
            <figcaption class="author">
              <span class="avatar">
                <img v-if="item.avatar" :src="item.avatar" :alt="item.author_name">
                <v-icon v-else icon="mdi-account-outline" size="18" />
              </span>
              <span>
                <strong class="author-name">{{ item.author_name }}</strong>
                <span class="author-role">{{ item.author_role }}</span>
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.clients {
  background: #000000;
  color: #ffffff;
}

.clients .section-subtitle {
  color: #c3c9cd;
}

.logos {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 16px;
  margin-top: 56px;
}

.logo-box {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 96px;
  padding: 0 8px;
  border: 1px dashed #3a4146;
  border-radius: 8px;
  color: #9aa1a6;
  font-size: 0.85rem;
  text-align: center;
}

.logo-img {
  max-width: 100%;
  max-height: 56px;
  object-fit: contain;
}

.testimonials {
  display: grid;
  grid-template-columns: 7fr 5fr;
  gap: 24px;
  margin-top: 56px;
}

.testimonials-side {
  display: grid;
  gap: 24px;
}

.testimonial {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 32px;
  border: 1px solid var(--delta-border);
  border-radius: 20px;
  background: var(--delta-card);
}

.testimonial--main {
  padding: 48px;
}

.quote-mark {
  color: var(--delta-cyan);
  margin-left: -8px;
}

.testimonial-quote {
  margin: 16px 0 0;
  font-size: clamp(1.25rem, 2vw, 1.6rem);
  line-height: 1.5;
  color: #f2f4f5;
}

.testimonial-quote--small {
  margin-top: 8px;
  font-size: 1.05rem;
  line-height: 1.6;
  color: #d4d9dc;
}

.author {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 28px;
}

.testimonial--main .author {
  margin-top: auto;
  padding-top: 48px;
}

.avatar {
  display: inline-flex;
  flex: 0 0 48px;
  align-items: center;
  justify-content: center;
  height: 48px;
  border-radius: 50%;
  background: #1c2226;
  color: #9aa1a6;
}

.avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.author-name {
  display: block;
  font-size: 1rem;
  font-weight: 600;
}

.author-role {
  display: block;
  margin-top: 2px;
  color: #8d959a;
  font-size: 0.88rem;
}

@media (max-width: 960px) {
  .logos {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .testimonials {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .logos {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .testimonial,
  .testimonial--main {
    padding: 28px;
  }
}
</style>
