/**
 * Conteúdo da landing page Delta.io.
 *
 * Por enquanto o conteúdo é estático e fica todo neste arquivo. A estrutura foi
 * pensada para, no futuro, ser substituída por chamadas à API do Directus:
 * - objetos "singleton" (ex.: `hero`, `about`, `contact`) viram coleções singleton;
 * - arrays (ex.: `blogPosts`, `projects`, `testimonials`, `clients`, `services`,
 *   `socialLinks`) viram coleções com os nomes indicados em cada comentário.
 * Os campos usam snake_case, como no Directus, e cada item tem um `id`.
 */

// Configurações gerais (singleton: site_settings)
export const site = {
  name: 'Delta',
  tld: '.io',
  copyright: '© 2026 Delta.io. Todos os direitos reservados.',
  cta: { label: 'Fale com a gente', href: '#contato' },
}

// Coleção: navigation_links
export const navLinks = [
  { id: 1, label: 'Sobre', href: '#sobre' },
  { id: 2, label: 'Blog', href: '#blog' },
  { id: 3, label: 'Clientes', href: '#clientes' },
  { id: 4, label: 'Projetos', href: '#projetos' },
]

// Coleção: hero_slides (abas do carrossel do topo)
export const hero = {
  autoplay_ms: 8000,
  tabs_label: 'Áreas da Delta.io',
  slides: [
    {
      id: 1,
      tab_title: 'delta sistemas',
      tab_subtitle: 'Desenvolvimento de sistemas',
      label: '> delta sistemas',
      title: 'Sistemas feitos para o dia a dia de quem usa',
      text: 'Desenvolvemos sistemas web e aplicações sob medida, do levantamento de requisitos à entrega em produção.',
      primary_button: { label: 'Falar sobre um projeto', href: '#contato' },
      secondary_button: { label: 'Ver projetos', href: '#projetos' },
      code_file: 'matricula.js',
      code_branch: 'main',
      code_lines: [
        '// matrícula on-line',
        'async function matricular(aluno) {',
        '  const turma = await turmas.buscar(aluno)',
        '  if (!turma.temVaga()) {',
        '    return fila.adicionar(aluno)',
        '  }',
        '  await turma.incluir(aluno)',
        "  return { status: 'confirmada' }",
        '}',
      ],
      status_text: 'Deploy concluído em produção',
      status_time: 'há 2 min',
    },
    {
      id: 2,
      tab_title: 'delta soluções',
      tab_subtitle: 'Soluções tecnológicas',
      label: '> delta soluções',
      title: 'Soluções para problemas reais',
      text: 'Criamos automações, integrações e ferramentas para problemas reais, com menos tarefas manuais e mais tempo para o que importa.',
      primary_button: { label: 'Falar sobre um projeto', href: '#contato' },
      secondary_button: { label: 'Ver projetos', href: '#projetos' },
      code_file: 'relatorio.js',
      code_branch: 'automacao',
      code_lines: [
        '// relatório diário automático',
        'async function gerarRelatorio(dia) {',
        '  const dados = await planilhas.importar(dia)',
        '  const validos = dados.filter(validar)',
        '',
        '  await relatorio.gerar(validos)',
        "  await email.enviar('equipe', relatorio)",
        "  return { status: 'enviado' }",
        '}',
      ],
      status_text: 'Automação executada com sucesso',
      status_time: 'hoje, 08:00',
    },
    {
      id: 3,
      tab_title: 'delta palestras',
      tab_subtitle: 'Palestras sobre tecnologia',
      label: '> delta palestras',
      title: 'Tecnologia explicada para todos',
      text: 'Palestras sobre inteligência artificial, inovação e transformação digital para eventos, escolas e empresas.',
      primary_button: { label: 'Convidar para uma palestra', href: '#contato' },
      secondary_button: { label: 'Ver palestras', href: '#projetos' },
      code_file: 'palestra.js',
      code_branch: 'main',
      code_lines: [
        '// palestra: IA no dia a dia',
        'const palestra = {',
        "  tema: 'inteligência artificial',",
        "  publico: ['eventos', 'escolas', 'empresas'],",
        "  formato: 'presencial ou on-line',",
        '}',
        '',
        'await palestra.adaptar(publico)',
        'return palestra.apresentar()',
      ],
      status_text: 'Palestra confirmada no evento',
      status_time: 'próxima semana',
    },
  ],
}

// Singleton: about
export const about = {
  title_lines: ['Sobre a', 'Delta.io'],
  lead: 'A Delta.io é uma empresa e iniciativa de tecnologia que desenvolve sistemas, cria soluções tecnológicas e realiza palestras sobre tecnologia.',
  text: '[Conte aqui como a Delta.io começou, quem está à frente e o que move o trabalho da equipe.]',
}

// Coleção: services (itens da seção "Sobre")
export const services = [
  {
    id: 1,
    icon: 'mdi-code-tags',
    title: 'Desenvolvimento de sistemas',
    description: 'Sistemas web e aplicações sob medida, do requisito à produção.',
  },
  {
    id: 2,
    icon: 'mdi-chip',
    title: 'Soluções tecnológicas',
    description: 'Automação, integrações e ferramentas para problemas reais.',
  },
  {
    id: 3,
    icon: 'mdi-presentation',
    title: 'Palestras sobre tecnologia',
    description: 'IA, inovação e transformação digital para eventos, escolas e empresas.',
  },
]

// Singleton: blog_section
export const blogSection = {
  title: 'Blog',
  subtitle:
    'Artigos sobre desenvolvimento, automação, inteligência artificial e tecnologia no setor público.',
  link: { label: 'Ver todos os artigos', href: '#blog' },
}

// Coleção: blog_posts
// `illustration`: network | layers | flow | shield | building | terminal
export const blogPosts = [
  {
    id: 1,
    slug: 'ia-no-dia-a-dia',
    illustration: 'network',
    category: 'Inteligência artificial',
    title: 'IA no dia a dia: por onde começar sem complicar',
    excerpt:
      'Um roteiro simples para identificar as tarefas que a inteligência artificial pode acelerar no seu negócio.',
    read_time: '6 min de leitura',
    url: '#blog',
  },
  {
    id: 2,
    slug: 'como-escolher-a-tecnologia-certa',
    illustration: 'layers',
    category: 'Desenvolvimento',
    title: 'Como escolher a tecnologia certa para o seu sistema',
    excerpt:
      'O que considerar antes de decidir: equipe, prazo, manutenção e custo ao longo do tempo.',
    read_time: '7 min de leitura',
    url: '#blog',
  },
  {
    id: 3,
    slug: 'cinco-tarefas-que-nao-precisam-ser-manuais',
    illustration: 'flow',
    category: 'Automação',
    title: 'Cinco tarefas da sua rotina que não precisam ser manuais',
    excerpt:
      'Planilhas, relatórios e conferências repetitivas: veja onde a automação traz ganho rápido.',
    read_time: '5 min de leitura',
    url: '#blog',
  },
  {
    id: 4,
    slug: 'seguranca-em-sistemas-web',
    illustration: 'shield',
    category: 'Segurança',
    title: 'Segurança em sistemas web: o básico que não pode faltar',
    excerpt:
      'Autenticação, backups e atualizações para proteger os dados e as pessoas que usam o sistema.',
    read_time: '6 min de leitura',
    url: '#blog',
  },
  {
    id: 5,
    slug: 'tecnologia-na-gestao-publica',
    illustration: 'building',
    category: 'Setor público',
    title: 'Tecnologia na gestão pública: transparência que funciona',
    excerpt:
      'Como sistemas bem pensados aproximam o poder público do cidadão e simplificam processos.',
    read_time: '8 min de leitura',
    url: '#blog',
  },
  {
    id: 6,
    slug: 'como-explicar-tecnologia',
    illustration: 'terminal',
    category: 'Palestras',
    title: 'Como explicar tecnologia para quem não é da área',
    excerpt:
      'O que aprendemos sobre tornar temas técnicos claros, práticos e interessantes para qualquer público.',
    read_time: '4 min de leitura',
    url: '#blog',
  },
]

// Singleton: clients_section
export const clientsSection = {
  title: 'Clientes e feedbacks',
  subtitle: 'Empresas, instituições e eventos que já trabalharam com a Delta.io.',
  logo_placeholder: 'Logo do cliente',
}

// Coleção: clients (`logo`: URL da imagem; null mostra o placeholder)
export const clients = [
  { id: 1, name: '[Cliente 1]', logo: null, url: null },
  { id: 2, name: '[Cliente 2]', logo: null, url: null },
  { id: 3, name: '[Cliente 3]', logo: null, url: null },
  { id: 4, name: '[Cliente 4]', logo: null, url: null },
  { id: 5, name: '[Cliente 5]', logo: null, url: null },
  { id: 6, name: '[Cliente 6]', logo: null, url: null },
]

// Coleção: testimonials (`featured: true` = cartão grande à esquerda)
export const testimonials = [
  {
    id: 1,
    featured: true,
    quote:
      '[Depoimento principal: o desafio que o cliente tinha, o que a Delta.io entregou e o resultado percebido, em até quatro linhas.]',
    author_name: '[Nome do cliente]',
    author_role: '[Cargo, empresa]',
    avatar: null,
  },
  {
    id: 2,
    featured: false,
    quote: '[Depoimento curto sobre um sistema ou uma automação entregue.]',
    author_name: '[Nome do cliente]',
    author_role: '[Cargo, empresa]',
    avatar: null,
  },
  {
    id: 3,
    featured: false,
    quote: '[Depoimento curto de quem organizou ou assistiu a uma palestra.]',
    author_name: '[Nome do cliente]',
    author_role: '[Cargo, evento ou instituição]',
    avatar: null,
  },
]

// Singleton: projects_section
export const projectsSection = {
  title: 'Projetos',
  subtitle: 'Trabalhos entregues pela Delta.io em sistemas, automação e palestras.',
  link: { label: 'Ver todos os projetos', href: '#projetos' },
  project_link_label: 'Ver projeto',
}

// Coleção: projects
// `type` define a ilustração: dashboard | pipeline | talk. `mock` guarda os textos dela.
export const projects = [
  {
    id: 1,
    type: 'dashboard',
    category: 'Sistema web',
    title: '[Nome do sistema]',
    meta: 'Cliente: [nome do cliente]',
    description: '[Duas frases sobre o problema do cliente e o sistema que foi entregue.]',
    highlights: ['Painel administrativo', 'Área do usuário', 'Integração com sistemas existentes'],
    url: '#projetos',
    mock: {
      address: '[endereço do sistema]',
      bars: [28, 40, 34, 52, 46, 60, 56, 70, 66, 82],
    },
  },
  {
    id: 2,
    type: 'pipeline',
    category: 'Automação',
    title: '[Nome da solução]',
    meta: 'Cliente: [nome do cliente]',
    description:
      '[Descreva o processo que foi automatizado e o tempo ou o retrabalho que deixou de existir.]',
    highlights: [
      'Importação automática de dados',
      'Validação e correção de registros',
      'Relatórios enviados por e-mail',
    ],
    url: '#projetos',
    mock: {
      steps: [
        { icon: 'mdi-file-document-outline', label: 'Coleta' },
        { icon: 'mdi-shield-check-outline', label: 'Validação', active: true },
        { icon: 'mdi-send-outline', label: 'Relatório' },
      ],
      log: [
        { time: '08:00:02', text: 'importação concluída' },
        { time: '08:00:05', text: '1.248 registros lidos' },
        { time: '08:00:09', text: '3 ajustes aplicados' },
        { time: '08:00:11', text: 'relatório enviado à equipe', highlight: true },
      ],
    },
  },
  {
    id: 3,
    type: 'talk',
    category: 'Palestra',
    title: '[Título da palestra]',
    meta: 'Evento: [nome do evento, cidade]',
    description: '[Resuma o tema, o público e o principal aprendizado compartilhado.]',
    highlights: [
      'Conteúdo adaptado ao público',
      'Demonstrações práticas',
      'Material de apoio para os participantes',
    ],
    url: '#projetos',
    mock: {
      slides: 17,
      active_slide: 4,
    },
  },
]

// Singleton: follow_section
export const followSection = {
  title: 'Acompanhe a Delta.io',
  text: 'Novidades, bastidores de projetos e conteúdo sobre tecnologia.',
}

// Coleção: social_links (substitua os `url` pelos perfis reais)
export const socialLinks = [
  { id: 1, label: 'LinkedIn', icon: 'mdi-briefcase-outline', url: '#' },
  { id: 2, label: 'Instagram', icon: 'mdi-camera-outline', url: '#' },
  { id: 3, label: 'X', icon: 'mdi-at', url: '#' },
  { id: 4, label: 'GitHub', icon: 'mdi-source-branch', url: '#' },
]

// Singleton: contact
export const contact = {
  title_lines: ['Conte o que você', 'precisa'],
  text: 'Fale sobre um sistema, uma automação ou o convite para uma palestra. Respondemos com os próximos passos.',
  primary_button: { label: 'Falar sobre um projeto', href: '#' },
  secondary_button: { label: 'Convidar para uma palestra', href: '#' },
}

// Coleção: contact_channels (substitua os placeholders pelos contatos reais)
export const contactChannels = [
  { id: 1, icon: 'mdi-email-outline', label: 'E-mail', value: '[contato@seudominio.com.br]', url: '#' },
  { id: 2, icon: 'mdi-message-outline', label: 'WhatsApp', value: '[(00) 00000-0000]', url: '#' },
  { id: 3, icon: 'mdi-at', label: 'Instagram', value: '[@perfil]', url: '#' },
]
