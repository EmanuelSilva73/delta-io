import { createRouter, createWebHistory } from 'vue-router'

// A landing page é composta diretamente no App.vue (uma seção por componente).
// A rota "/" existe para o router reconhecer a página inicial; a navegação
// interna usa âncoras (#sobre, #blog, #clientes, #projetos, #contato).
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: { render: () => null },
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  },
})

export default router
