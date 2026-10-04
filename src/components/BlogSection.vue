<script setup>
import { blogPosts, blogSection } from '../data/site'

// Coordenadas da ilustração de rede neural (3 camadas)
const netLayers = [
  [24, 44, 64],
  [14, 34, 54, 74],
  [34, 54],
]
const netX = [10, 34, 66]
</script>

<template>
  <section id="blog" class="section blog">
    <div class="container">
      <div class="section-head">
        <div>
          <h2 class="section-title">{{ blogSection.title }}<span class="cursor">_</span></h2>
          <p class="section-subtitle">{{ blogSection.subtitle }}</p>
        </div>
        <a :href="blogSection.link.href" class="text-link">{{ blogSection.link.label }}</a>
      </div>

      <div class="posts">
        <article v-for="post in blogPosts" :key="post.id" class="post">
          <a :href="post.url" class="post-link">
            <div class="post-art dot-grid" aria-hidden="true">
              <!-- Ilustrações em traço ciano -->
              <svg
                v-if="post.illustration === 'network'"
                viewBox="0 0 80 88"
                fill="none"
                stroke="currentColor"
                stroke-width="1.2"
              >
                <g opacity="0.75">
                  <template v-for="(a, i) in netLayers[0]" :key="`a${i}`">
                    <line v-for="(b, j) in netLayers[1]" :key="`a${i}${j}`" :x1="netX[0]" :y1="a" :x2="netX[1]" :y2="b" />
                  </template>
                  <template v-for="(a, i) in netLayers[1]" :key="`b${i}`">
                    <line v-for="(b, j) in netLayers[2]" :key="`b${i}${j}`" :x1="netX[1]" :y1="a" x2="66" :y2="b" />
                  </template>
                </g>
                <circle v-for="(y, i) in netLayers[0]" :key="`c0${i}`" :cx="netX[0]" :cy="y" r="4" fill="#000" />
                <circle v-for="(y, i) in netLayers[1]" :key="`c1${i}`" :cx="netX[1]" :cy="y" r="4" fill="#000" />
                <circle cx="66" cy="34" r="4" fill="currentColor" />
                <circle cx="66" cy="54" r="4" fill="#000" />
              </svg>

              <svg
                v-else-if="post.illustration === 'layers'"
                viewBox="0 0 80 64"
                fill="none"
                stroke="currentColor"
                stroke-width="1.3"
                stroke-linejoin="round"
              >
                <path d="M40 34 72 18 40 2 8 18Z" fill="rgba(1,185,224,0.12)" />
                <path d="M8 18v12l32 16 32-16V18" />
                <path d="M8 30v12l32 16 32-16V30" opacity="0.6" />
                <path d="M40 34v12M40 46v12" opacity="0.6" />
              </svg>

              <svg
                v-else-if="post.illustration === 'flow'"
                viewBox="0 0 96 48"
                fill="none"
                stroke="currentColor"
                stroke-width="1.3"
              >
                <path d="M14 18c8-14 60-14 68 0" stroke-dasharray="3 3" opacity="0.7" />
                <path d="m11 15 3 3 3-3" opacity="0.7" />
                <rect x="4" y="22" width="20" height="18" rx="3" />
                <rect x="38" y="22" width="20" height="18" rx="3" fill="rgba(1,185,224,0.15)" />
                <rect x="72" y="22" width="20" height="18" rx="3" />
                <path d="M24 31h12m-3-3 3 3-3 3M58 31h12m-3-3 3 3-3 3" />
              </svg>

              <svg
                v-else-if="post.illustration === 'shield'"
                viewBox="0 0 64 80"
                fill="none"
                stroke="currentColor"
                stroke-width="1.4"
                stroke-linejoin="round"
              >
                <path d="M32 4 58 14v22c0 18-11 32-26 40C17 68 6 54 6 36V14Z" />
                <rect x="22" y="36" width="20" height="16" rx="3" />
                <path d="M26 36v-5a6 6 0 0 1 12 0v5" />
                <path d="M32 42v4" />
              </svg>

              <svg
                v-else-if="post.illustration === 'building'"
                viewBox="0 0 80 72"
                fill="none"
                stroke="currentColor"
                stroke-width="1.4"
                stroke-linejoin="round"
              >
                <path d="M6 22 40 4l34 18Z" fill="rgba(1,185,224,0.12)" />
                <path d="M10 26h60M18 30v26M30 30v26M42 30v26M54 30v26M62 30v26M10 60h60M4 66h72" />
              </svg>

              <svg
                v-else
                viewBox="0 0 80 64"
                fill="none"
                stroke="currentColor"
                stroke-width="1.4"
                stroke-linejoin="round"
                stroke-linecap="round"
              >
                <rect x="6" y="4" width="68" height="42" rx="4" fill="rgba(1,185,224,0.08)" />
                <path d="m20 17 8 8-8 8M34 33h12M40 46v10M26 58h28" />
              </svg>
            </div>

            <p class="post-category">{{ post.category }}</p>
            <h3 class="post-title">{{ post.title }}</h3>
            <p class="post-excerpt">{{ post.excerpt }}</p>
            <p class="post-time">{{ post.read_time }}</p>
          </a>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.blog {
  background: var(--delta-light-bg);
  color: var(--delta-text);
}

.posts {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 56px 32px;
}

.post-link {
  display: block;
  color: inherit;
  text-decoration: none;
}

.post-art {
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 16 / 10;
  margin-bottom: 24px;
  border-radius: 18px;
  color: var(--delta-cyan);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.post-art svg {
  width: 30%;
  max-height: 52%;
}

.post-link:hover .post-art {
  transform: translateY(-4px);
  box-shadow: 0 18px 40px rgba(15, 19, 22, 0.18);
}

.post-category {
  margin: 0 0 10px;
  color: var(--delta-teal);
  font-size: 0.85rem;
  font-weight: 600;
}

.post-title {
  margin: 0;
  font-size: 1.3rem;
  font-weight: 600;
  line-height: 1.35;
}

.post-link:hover .post-title {
  color: var(--delta-teal);
}

.post-excerpt {
  margin: 14px 0 0;
  color: var(--delta-text-muted);
  font-size: 0.98rem;
  line-height: 1.7;
}

.post-time {
  margin: 18px 0 0;
  color: #7a8287;
  font-size: 0.85rem;
}

@media (max-width: 960px) {
  .posts {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 600px) {
  .posts {
    grid-template-columns: 1fr;
    gap: 44px;
  }
}
</style>
