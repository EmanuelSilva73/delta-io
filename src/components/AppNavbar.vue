<template>
    <v-app-bar height="80" flat color="transparent" class="navbar">
        <v-container max-width="1200" class="navbar-container">
            <a href="#inicio" class="logo">
                delta<span>.io</span>
            </a>

            <v-spacer />

            <nav class="nav-links">
                <a href="#servicos">Serviços</a>
                <a href="#projetos">Projetos</a>
                <a href="#blog">Blog</a>
                <a href="#contato">Contato</a>
            </nav>

            <v-btn href="#contato" color="primary" variant="flat" class="navbar-button" rounded="lg">
                Falar sobre um projeto
            </v-btn>
        </v-container>
    </v-app-bar>
</template>

<style scoped>
.navbar {
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.navbar-container {
    display: flex;
    align-items: center;
    width: 100%;
}

.logo {
    flex-shrink: 0;
    color: #111111;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 800;
    letter-spacing: -0.06em;
}

.logo span {
    font-weight: 400;
}

.nav-links {
    display: flex;
    align-items: center;
    gap: 32px;
    margin-left: auto;
}

.nav-links a {
    color: #333333;
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 500;
    white-space: nowrap;
    transition: opacity 0.2s ease;
}

.nav-links a:hover {
    opacity: 0.6;
}

.navbar-button {
    margin-left: 40px;
    white-space: nowrap;
}

@media (max-width: 800px) {

    .nav-links,
    .navbar-button {
        display: none;
    }
}
</style>