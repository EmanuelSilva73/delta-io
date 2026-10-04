<script setup>
import { projects, projectsSection } from '../data/site'
</script>

<template>
  <section id="projetos" class="section projects">
    <div class="container">
      <div class="section-head">
        <div>
          <h2 class="section-title">{{ projectsSection.title }}<span class="cursor">_</span></h2>
          <p class="section-subtitle">{{ projectsSection.subtitle }}</p>
        </div>
        <a :href="projectsSection.link.href" class="text-link">{{ projectsSection.link.label }}</a>
      </div>

      <article
        v-for="(project, index) in projects"
        :key="project.id"
        class="project"
        :class="{ 'project--reverse': index % 2 === 1 }"
      >
        <div class="project-visual" aria-hidden="true">
          <!-- Mock: painel administrativo -->
          <div v-if="project.type === 'dashboard'" class="mock-window">
            <div class="mock-topbar">
              <span class="mock-url mono">
                <v-icon icon="mdi-lock-outline" size="12" />
                {{ project.mock.address }}
              </span>
            </div>
            <div class="mock-dashboard">
              <aside class="mock-sidebar">
                <span class="mock-square" />
                <span class="mock-line mock-line--cyan" />
                <span class="mock-line" />
                <span class="mock-line" />
                <span class="mock-line mock-line--short" />
                <span class="mock-line" />
              </aside>
              <div class="mock-main">
                <div class="mock-stats">
                  <div v-for="n in 3" :key="n" class="mock-stat">
                    <span class="mock-line mock-line--tiny" />
                    <span class="mock-value" :class="{ 'mock-value--cyan': n === 1 }" />
                  </div>
                </div>
                <div class="mock-chart">
                  <span
                    v-for="(h, i) in project.mock.bars"
                    :key="i"
                    class="mock-bar"
                    :class="{ 'mock-bar--cyan': i === project.mock.bars.length - 1 }"
                    :style="{ height: `${h}px` }"
                  />
                </div>
                <span class="mock-line mock-line--full" />
                <span class="mock-line mock-line--full mock-line--90" />
                <span class="mock-line mock-line--full mock-line--95" />
              </div>
            </div>
          </div>

          <!-- Mock: pipeline de automação -->
          <div v-else-if="project.type === 'pipeline'" class="mock-pipeline">
            <div class="pipeline-steps">
              <template v-for="(step, i) in project.mock.steps" :key="step.label">
                <span class="pipeline-step" :class="{ 'pipeline-step--active': step.active }">
                  <v-icon :icon="step.icon" size="16" />
                  {{ step.label }}
                </span>
                <v-icon
                  v-if="i < project.mock.steps.length - 1"
                  icon="mdi-arrow-right"
                  size="14"
                  class="pipeline-arrow"
                />
              </template>
            </div>
            <div class="pipeline-log mono">
              <p v-for="line in project.mock.log" :key="line.time">
                <v-icon icon="mdi-check" size="14" class="log-check" />
                <span class="log-time">{{ line.time }}</span>
                <span :class="{ 'log-highlight': line.highlight }">{{ line.text }}</span>
              </p>
            </div>
          </div>

          <!-- Mock: slide de palestra -->
          <div v-else class="mock-talk">
            <div class="talk-slide">
              <span class="talk-icon mono">&gt;_</span>
              <div class="talk-lines">
                <span class="talk-line talk-line--long" />
                <span class="talk-line talk-line--mid" />
                <span class="talk-line talk-line--cyan" />
              </div>
            </div>
            <div class="talk-dots">
              <span
                v-for="dot in project.mock.slides"
                :key="dot"
                class="talk-dot"
                :class="{ 'talk-dot--active': dot - 1 === project.mock.active_slide }"
              />
            </div>
          </div>
        </div>

        <div class="project-info">
          <p class="project-category">{{ project.category }}</p>
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-meta">{{ project.meta }}</p>
          <p class="project-text">{{ project.description }}</p>
          <ul class="check-list">
            <li v-for="item in project.highlights" :key="item">
              <v-icon icon="mdi-check" size="16" />
              {{ item }}
            </li>
          </ul>
          <a :href="project.url" class="text-link project-link">{{ projectsSection.project_link_label }}</a>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.projects {
  background: #ffffff;
  color: var(--delta-text);
}

.project {
  display: grid;
  grid-template-columns: 11fr 9fr;
  align-items: center;
  gap: 64px;
}

.project + .project {
  margin-top: 96px;
}

.project--reverse {
  grid-template-columns: 9fr 11fr;
}

.project--reverse .project-visual {
  order: 2;
}

.project-visual {
  padding: 36px;
  border-radius: 24px;
  background: #000000;
}

.project-category {
  margin: 0;
  color: var(--delta-teal);
  font-size: 0.9rem;
  font-weight: 600;
}

.project-title {
  margin: 10px 0 0;
  font-size: clamp(1.6rem, 2.6vw, 2.1rem);
  font-weight: 600;
  letter-spacing: -0.02em;
}

.project-meta {
  margin: 10px 0 0;
  color: #7a8287;
  font-size: 0.95rem;
}

.project-text {
  margin: 22px 0 18px;
  color: var(--delta-text-muted);
  font-size: 1.05rem;
  line-height: 1.7;
}

.project-link {
  margin-top: 24px;
}

/* ---------- Mock do painel ---------- */
.mock-window {
  border: 1px solid var(--delta-border);
  border-radius: 10px;
  background: var(--delta-card);
  overflow: hidden;
}

.mock-topbar {
  padding: 12px 14px;
  border-bottom: 1px solid var(--delta-border);
}

.mock-url {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: 4px;
  background: #000000;
  color: #8d959a;
  font-size: 0.72rem;
}

.mock-dashboard {
  display: grid;
  grid-template-columns: 1fr 3.3fr;
}

.mock-sidebar {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 18px 14px;
  border-right: 1px solid var(--delta-border);
}

.mock-square {
  width: 22px;
  height: 22px;
  margin-bottom: 10px;
  border-radius: 4px;
  background: var(--delta-cyan);
}

.mock-line {
  display: block;
  height: 6px;
  width: 70%;
  border-radius: 3px;
  background: #2a3034;
}

.mock-line--cyan {
  width: 90%;
  background: var(--delta-cyan);
}

.mock-line--short {
  width: 55%;
}

.mock-line--tiny {
  width: 45%;
  height: 4px;
}

.mock-line--full {
  width: 100%;
  margin-top: 10px;
  height: 5px;
}

.mock-line--90 {
  width: 90%;
}

.mock-line--95 {
  width: 96%;
}

.mock-main {
  padding: 14px;
}

.mock-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}

.mock-stat {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px;
  border: 1px solid var(--delta-border);
  border-radius: 6px;
  background: #000000;
}

.mock-value {
  display: block;
  height: 9px;
  width: 80%;
  border-radius: 2px;
  background: #e6eaed;
}

.mock-value--cyan {
  background: var(--delta-cyan);
}

.mock-chart {
  display: flex;
  align-items: flex-end;
  gap: 7px;
  height: 104px;
  margin: 10px 0 8px;
  padding: 12px;
  border: 1px solid var(--delta-border);
  border-radius: 6px;
  background: #000000;
}

.mock-bar {
  flex: 1;
  border-radius: 2px;
  background: #2a3034;
}

.mock-bar--cyan {
  background: var(--delta-cyan);
}

/* ---------- Mock do pipeline ---------- */
.pipeline-steps {
  display: flex;
  align-items: center;
  gap: 12px;
}

.pipeline-step {
  display: inline-flex;
  flex: 1;
  align-items: center;
  gap: 8px;
  padding: 12px 14px;
  border: 1px solid var(--delta-border);
  border-radius: 6px;
  background: var(--delta-card);
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 600;
}

.pipeline-step .v-icon {
  color: var(--delta-cyan);
}

.pipeline-step--active {
  border-color: var(--delta-cyan);
  box-shadow: 0 0 0 1px rgba(1, 185, 224, 0.25), 0 0 24px rgba(1, 185, 224, 0.12);
}

.pipeline-arrow {
  color: #5d656a;
}

.pipeline-log {
  margin-top: 18px;
  padding: 14px 18px;
  border: 1px solid var(--delta-border);
  border-radius: 6px;
  background: var(--delta-card);
  font-size: 0.82rem;
}

.pipeline-log p {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0;
  padding: 6px 0;
  color: #b9c0c4;
}

.log-check {
  color: var(--delta-cyan);
}

.log-time {
  color: #6f777c;
}

.log-highlight {
  color: #ffffff;
}

/* ---------- Mock da palestra ---------- */
.talk-slide {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  aspect-ratio: 16 / 9;
  padding: 24px;
  border: 1px solid var(--delta-border);
  border-radius: 10px;
  background: var(--delta-card);
}

.talk-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid #2c3337;
  border-radius: 4px;
  background: #000000;
  color: var(--delta-cyan);
  font-weight: 500;
}

.talk-lines {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.talk-line {
  display: block;
  height: 10px;
  border-radius: 3px;
  background: #e6eaed;
}

.talk-line--long {
  width: 63%;
}

.talk-line--mid {
  width: 43%;
}

.talk-line--cyan {
  width: 30%;
  height: 6px;
  background: var(--delta-cyan);
}

.talk-dots {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 9px;
  max-width: 200px;
  margin: 20px auto 0;
}

.talk-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #2a3034;
}

.talk-dot--active {
  background: var(--delta-cyan);
}

@media (max-width: 960px) {
  .project,
  .project--reverse {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .project--reverse .project-visual {
    order: 0;
  }

  .project + .project {
    margin-top: 72px;
  }
}

@media (max-width: 600px) {
  .project-visual {
    padding: 18px;
    border-radius: 18px;
  }

  .pipeline-steps {
    gap: 6px;
  }

  .pipeline-step {
    padding: 10px 8px;
    font-size: 0.75rem;
    gap: 4px;
  }

  .pipeline-step .v-icon {
    display: none;
  }

  .pipeline-log {
    font-size: 0.72rem;
    padding: 10px 12px;
  }
}
</style>
