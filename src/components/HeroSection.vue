<template>
    <section id="inicio" class="hero">
        <v-container max-width="1200" class="hero-container">
            <v-row align="center" class="hero-row">
                <v-col cols="12" md="7">
                    <div class="hero-content">
                        <div class="hero-label">
                            <span class="hero-dot"></span>
                            Tecnologia para problemas reais
                        </div>

                        <h1 class="hero-title">
                            Sistemas feitos para o
                            <span>dia a dia de quem usa.</span>
                        </h1>

                        <p class="hero-description">
                            Desenvolvemos sistemas web e aplicações sob medida,
                            do levantamento de requisitos à entrega em produção.
                        </p>

                        <div class="hero-actions">
                            <v-btn href="#contato" color="primary" size="large" rounded="lg" class="hero-button">
                                Falar sobre um projeto
                            </v-btn>

                            <v-btn href="#projetos" variant="outlined" size="large" rounded="lg"
                                class="hero-button-secondary">
                                Ver projetos
                            </v-btn>
                        </div>
                    </div>
                </v-col>

                <v-col cols="12" md="5">
                    <div class="hero-terminal">
                        <div class="terminal-header">
                            <div class="terminal-dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            <span class="terminal-title">
                                delta-sistemas
                            </span>
                        </div>

                        <div class="terminal-body">
                            <div>
                                <span class="code-muted">$</span>
                                <span class="code-command"> deploy</span>
                                <span class="code-white"> sistema</span>
                            </div>

                            <div class="code-success">
                                ✓ Build concluído
                            </div>

                            <div class="code-success">
                                ✓ Testes executados
                            </div>

                            <div class="code-success">
                                ✓ Deploy realizado
                            </div>

                            <div class="terminal-status">
                                Deploy concluído em produção há 2 min
                            </div>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<style scoped>
.hero {
    min-height: calc(100vh - 80px);
    display: flex;
    align-items: center;
    background: #f8f8f6;
}

.hero-container {
    width: 100%;
}

.hero-row {
    min-height: calc(100vh - 80px);
}

.hero-content {
    max-width: 700px;
}

.hero-label {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    margin-bottom: 24px;
    color: #666666;
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 0.02em;
}

.hero-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #111111;
}

.hero-title {
    margin: 0;
    color: #111111;
    font-size: clamp(3rem, 6vw, 5.5rem);
    font-weight: 800;
    line-height: 0.98;
    letter-spacing: -0.065em;
}

.hero-title span {
    display: block;
    color: #777777;
}

.hero-description {
    max-width: 600px;
    margin-top: 32px;
    color: #555555;
    font-size: 1.15rem;
    line-height: 1.7;
}

.hero-actions {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-top: 40px;
}

.hero-button {
    min-height: 52px;
    padding: 0 24px;
}

.hero-button-secondary {
    min-height: 52px;
    padding: 0 24px;
    border-color: #cccccc;
}

.hero-terminal {
    overflow: hidden;
    border: 1px solid #292929;
    border-radius: 16px;
    background: #111111;
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.15);
}

.terminal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 18px;
    border-bottom: 1px solid #292929;
    background: #171717;
}

.terminal-dots {
    display: flex;
    gap: 6px;
}

.terminal-dots span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #555555;
}

.terminal-title {
    color: #777777;
    font-family: monospace;
    font-size: 0.75rem;
}

.terminal-body {
    min-height: 280px;
    padding: 28px;
    color: #cccccc;
    font-family: monospace;
    font-size: 0.9rem;
    line-height: 2;
}

.code-muted {
    color: #777777;
}

.code-command {
    color: #ffffff;
}

.code-white {
    color: #cccccc;
}

.code-success {
    color: #aaaaaa;
}

.terminal-status {
    margin-top: 24px;
    padding-top: 18px;
    border-top: 1px solid #292929;
    color: #777777;
    font-size: 0.75rem;
}

@media (max-width: 960px) {
    .hero {
        padding: 70px 0;
    }

    .hero-row {
        min-height: auto;
    }

    .hero-terminal {
        margin-top: 40px;
    }
}

@media (max-width: 600px) {
    .hero {
        padding: 50px 0;
    }

    .hero-title {
        font-size: 3.2rem;
    }

    .hero-description {
        font-size: 1rem;
    }

    .hero-actions {
        align-items: stretch;
        flex-direction: column;
    }

    .hero-button,
    .hero-button-secondary {
        width: 100%;
    }
}
</style>