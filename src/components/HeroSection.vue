<script setup>
import { computed, ref } from 'vue'
import { hero } from '../data/site'

const slides = hero.slides
const DURATION = hero.autoplay_ms

const KEYWORDS = new Set([
  'async',
  'await',
  'const',
  'let',
  'function',
  'if',
  'else',
  'return',
  'new',
  'for',
  'of',
  'import',
  'from',
])

// Destaque de sintaxe simples: comentários, strings e palavras-chave.
function tokenize(line) {
  const tokens = []
  const regex = /(\/\/.*$)|('[^']*')|([A-Za-z_$][\w$]*)/g
  let last = 0
  let match
  while ((match = regex.exec(line)) !== null) {
    if (match.index > last) tokens.push({ type: 'plain', text: line.slice(last, match.index) })
    if (match[1]) tokens.push({ type: 'comment', text: match[1] })
    else if (match[2]) tokens.push({ type: 'string', text: match[2] })
    else tokens.push({ type: KEYWORDS.has(match[3]) ? 'keyword' : 'plain', text: match[3] })
    last = regex.lastIndex
  }
  if (last < line.length) tokens.push({ type: 'plain', text: line.slice(last) })
  return tokens
}

const active = ref(0)
const cycle = ref(0)
const paused = ref(false)

const slide = computed(() => slides[active.value])
const codeLines = computed(() => slide.value.code_lines.map(tokenize))

function goTo(index) {
  active.value = (index + slides.length) % slides.length
  cycle.value++
}

const next = () => goTo(active.value + 1)
const prev = () => goTo(active.value - 1)
</script>

<template>
  <section id="inicio" class="hero dot-grid">
    <div class="container hero-inner">
      <Transition name="slide-fade" mode="out-in">
        <div :key="slide.id" class="hero-grid">
          <div class="hero-content">
            <p class="hero-label mono">{{ slide.label }}</p>

            <h1 class="hero-title">
              {{ slide.title }}<span class="cursor cursor--blink">_</span>
            </h1>

            <p class="hero-text">{{ slide.text }}</p>

            <div class="btn-row hero-actions">
              <v-btn :href="slide.primary_button.href" class="btn btn--primary" variant="flat">
                {{ slide.primary_button.label }}
              </v-btn>
              <v-btn :href="slide.secondary_button.href" class="btn btn--outline" variant="outlined">
                {{ slide.secondary_button.label }}
              </v-btn>
            </div>
          </div>

          <div class="code-card" aria-hidden="true">
            <div class="code-header mono">
              <span class="code-file">
                <v-icon icon="mdi-file-outline" size="16" />
                {{ slide.code_file }}
              </span>
              <span class="code-branch">
                <v-icon icon="mdi-source-branch" size="15" />
                {{ slide.code_branch }}
              </span>
            </div>

            <ol class="code-body mono">
              <li v-for="(tokens, i) in codeLines" :key="i">
                <span class="line-number">{{ i + 1 }}</span>
                <span class="line-code"><span
                    v-for="(token, j) in tokens"
                    :key="j"
                    :class="`tk-${token.type}`"
                  >{{ token.text }}</span></span>
              </li>
            </ol>

            <div class="code-footer mono">
              <span class="code-status">
                <v-icon icon="mdi-check-circle-outline" size="18" />
                {{ slide.status_text }}
              </span>
              <span>{{ slide.status_time }}</span>
            </div>
          </div>
        </div>
      </Transition>

      <div class="hero-tabs">
        <div class="tabs" role="tablist" :aria-label="hero.tabs_label">
          <button
            v-for="(item, i) in slides"
            :key="item.id"
            type="button"
            role="tab"
            class="tab"
            :class="{ 'tab--active': i === active }"
            :aria-selected="i === active"
            @click="goTo(i)"
          >
            <span class="tab-track">
              <span
                v-if="i === active"
                :key="cycle"
                class="tab-progress"
                :style="{ animationDuration: `${DURATION}ms`, animationPlayState: paused ? 'paused' : 'running' }"
                @animationend="next"
              />
            </span>
            <span class="tab-name mono">{{ item.tab_title }}</span>
            <span class="tab-subtitle">{{ item.tab_subtitle }}</span>
          </button>
        </div>

        <div class="tab-controls">
          <button type="button" class="control" aria-label="Anterior" @click="prev">
            <v-icon icon="mdi-chevron-left" size="20" />
          </button>
          <button
            type="button"
            class="control"
            :aria-label="paused ? 'Continuar' : 'Pausar'"
            @click="paused = !paused"
          >
            <v-icon :icon="paused ? 'mdi-play' : 'mdi-pause'" size="18" />
          </button>
          <button type="button" class="control" aria-label="Próximo" @click="next">
            <v-icon icon="mdi-chevron-right" size="20" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  color: #ffffff;
  overflow: hidden;
}

.hero-inner {
  padding-top: 72px;
  padding-bottom: 40px;
}

.hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  align-items: center;
  gap: 64px;
  min-height: 460px;
}

.hero-label {
  margin: 0 0 18px;
  color: #c9ced2;
  font-size: 0.95rem;
}

.hero-title {
  margin: 0;
  max-width: 560px;
  font-size: clamp(2.6rem, 5.4vw, 4.4rem);
  font-weight: 700;
  line-height: 1.04;
  letter-spacing: -0.035em;
}

.hero-text {
  margin: 28px 0 0;
  max-width: 520px;
  color: #c3c9cd;
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.65;
}

.hero-actions {
  margin-top: 40px;
}

/* Cartão de código */
.code-card {
  border: 1px solid var(--delta-border);
  border-radius: 20px;
  background: var(--delta-card);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.45);
  overflow: hidden;
}

.code-header,
.code-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  color: #a9b0b5;
  font-size: 0.85rem;
}

.code-header {
  border-bottom: 1px solid var(--delta-border);
}

.code-footer {
  border-top: 1px solid var(--delta-border);
}

.code-file,
.code-branch,
.code-status {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.code-file .v-icon,
.code-status .v-icon {
  color: var(--delta-cyan);
}

.code-body {
  margin: 0;
  padding: 22px 24px;
  list-style: none;
  font-size: 0.92rem;
  line-height: 2.1;
  color: #e6eaed;
  overflow-x: auto;
}

.code-body li {
  display: flex;
  white-space: pre;
}

.line-number {
  flex: 0 0 28px;
  color: #4f565b;
  user-select: none;
}

.tk-keyword {
  color: var(--delta-cyan);
}

.tk-string {
  color: var(--delta-cyan-light);
}

.tk-comment {
  color: #6f777c;
}

/* Abas do carrossel */
.hero-tabs {
  display: flex;
  align-items: flex-end;
  gap: 24px;
  margin-top: 72px;
}

.tabs {
  display: grid;
  flex: 1;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.tab {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  text-align: left;
  color: inherit;
  background: none;
  border: 0;
  cursor: pointer;
}

.tab-track {
  position: relative;
  width: 100%;
  height: 2px;
  margin-bottom: 18px;
  background: #22282c;
  overflow: hidden;
}

.tab-progress {
  position: absolute;
  inset: 0 auto 0 0;
  width: 0;
  background: var(--delta-cyan);
  animation-name: tab-fill;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}

@keyframes tab-fill {
  to {
    width: 100%;
  }
}

.tab-name {
  color: #7d858a;
  font-size: 0.95rem;
  transition: color 0.2s ease;
}

.tab-subtitle {
  margin-top: 6px;
  color: #6d757a;
  font-size: 0.85rem;
  transition: color 0.2s ease;
}

.tab--active .tab-name,
.tab:hover .tab-name {
  color: #ffffff;
}

.tab--active .tab-subtitle {
  color: #b9c0c4;
}

.tab-controls {
  display: flex;
  gap: 8px;
}

.control {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  color: #ffffff;
  background: #000000;
  border: 1px solid #2c3337;
  border-radius: 6px;
  cursor: pointer;
  transition: border-color 0.2s ease;
}

.control:hover {
  border-color: var(--delta-cyan);
}

/* Transição entre slides */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}

@media (max-width: 960px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 48px;
    min-height: 0;
  }

  .hero-inner {
    padding-top: 56px;
  }

  .hero-tabs {
    flex-direction: column;
    align-items: stretch;
    margin-top: 56px;
  }

  .tab-controls {
    justify-content: flex-end;
  }
}

@media (max-width: 600px) {
  .hero-text {
    font-size: 1.05rem;
  }

  .code-body {
    font-size: 0.78rem;
    padding: 18px 16px;
  }

  .code-header,
  .code-footer {
    padding: 14px 16px;
    font-size: 0.75rem;
  }

  .tabs {
    gap: 12px;
  }

  .tab-subtitle {
    display: none;
  }

  .tab-name {
    font-size: 0.78rem;
  }
}
</style>
