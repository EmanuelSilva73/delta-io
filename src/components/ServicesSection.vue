<template>
    <section id="servicos" class="services-section">
        <v-container max-width="1200" class="services-container">
            <div class="section-header">
                <span class="section-label">
                    Serviços
                </span>

                <h2 class="section-title">
                    Tecnologia pensada para
                    <span>resolver problemas reais.</span>
                </h2>

                <p class="section-description">
                    Desenvolvemos soluções sob medida para transformar
                    necessidades em sistemas, automações e experiências
                    tecnológicas.
                </p>
            </div>

            <div class="services-grid">

                <!-- Serviço 01 -->
                <v-card class="service-card" flat>
                    <div class="service-number">
                        01
                    </div>

                    <v-icon icon="mdi-code-tags" size="42" class="service-icon" />

                    <h3 class="service-title">
                        Desenvolvimento de sistemas
                    </h3>

                    <p class="service-description">
                        Sistemas web e aplicações sob medida,
                        do requisito à produção.
                    </p>

                    <v-btn href="#contato" variant="text" class="service-link" append-icon="mdi-arrow-right">
                        Falar sobre um projeto
                    </v-btn>
                </v-card>

                <!-- Serviço 02 -->
                <v-card class="service-card" flat>
                    <div class="service-number">
                        02
                    </div>

                    <v-icon icon="mdi-lightning-bolt-outline" size="42" class="service-icon" />

                    <h3 class="service-title">
                        Soluções tecnológicas
                    </h3>

                    <p class="service-description">
                        Automação, integrações e ferramentas
                        para problemas reais.
                    </p>

                    <v-btn href="#contato" variant="text" class="service-link" append-icon="mdi-arrow-right">
                        Conhecer soluções
                    </v-btn>
                </v-card>

                <!-- Serviço 03 -->
                <v-card class="service-card" flat>
                    <div class="service-number">
                        03
                    </div>

                    <v-icon icon="mdi-presentation" size="42" class="service-icon" />

                    <h3 class="service-title">
                        Palestras sobre tecnologia
                    </h3>

                    <p class="service-description">
                        IA, inovação e transformação digital
                        para eventos, escolas e empresas.
                    </p>

                    <v-btn href="#contato" variant="text" class="service-link" append-icon="mdi-arrow-right">
                        Convidar para uma palestra
                    </v-btn>
                </v-card>

            </div>
        </v-container>
    </section>
</template>

<style scoped>
.services-section {
    padding: 140px 0;
    background: #ffffff;
}

.services-container {
    width: 100%;
}

.section-header {
    max-width: 760px;
    margin-bottom: 70px;
}

.section-label {
    display: inline-block;
    margin-bottom: 20px;
    color: #777777;
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
}

.section-title {
    margin: 0;
    color: #111111;
    font-size: clamp(2.5rem, 5vw, 4.5rem);
    font-weight: 800;
    line-height: 1;
    letter-spacing: -0.06em;
}

.section-title span {
    display: block;
    color: #888888;
}

.section-description {
    max-width: 620px;
    margin-top: 28px;
    color: #666666;
    font-size: 1.05rem;
    line-height: 1.7;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 24px;
}

.service-card {
    display: flex;
    flex-direction: column;
    min-height: 420px;
    padding: 36px;
    border: 1px solid #e5e5e5;
    border-radius: 18px;
    background: #fafafa;
    transition:
        transform 0.25s ease,
        border-color 0.25s ease,
        box-shadow 0.25s ease;
}

.service-card:hover {
    transform: translateY(-6px);
    border-color: #cccccc;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
}

.service-number {
    margin-bottom: 48px;
    color: #aaaaaa;
    font-family: monospace;
    font-size: 0.8rem;
}

.service-icon {
    margin-bottom: 28px;
    color: #111111;
}

.service-title {
    margin: 0;
    color: #111111;
    font-size: 1.35rem;
    font-weight: 700;
    line-height: 1.25;
}

.service-description {
    margin-top: 16px;
    color: #666666;
    font-size: 0.98rem;
    line-height: 1.6;
}

.service-link {
    align-self: flex-start;
    margin-top: auto;
    margin-left: -8px;
    color: #111111;
    font-weight: 600;
}

@media (max-width: 900px) {
    .services-grid {
        grid-template-columns: 1fr;
    }

    .service-card {
        min-height: 360px;
    }
}

@media (max-width: 600px) {
    .services-section {
        padding: 80px 0;
    }

    .section-header {
        margin-bottom: 45px;
    }

    .service-card {
        padding: 30px;
    }
}
</style>