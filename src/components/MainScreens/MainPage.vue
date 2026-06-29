<script setup lang="ts">
// @ts-ignore: suppress missing declaration for .vue modules
import DisplayCompetenze from '../Utils/DisplayCompetenze.vue';
// @ts-ignore: suppress missing declaration for .vue modules
import InteractivePriceCalc from '../Utils/InteractivePriceCalc.vue';
// @ts-ignore: suppress missing declaration for .vue modules
import TabCollaborazione from '../Utils/TabCollaborazione.vue';
// @ts-ignore: suppress missing declaration for .vue modules
import TabOfferte from '../Utils/TabOfferte.vue';
// @ts-ignore: suppress missing declaration for .vue modules
import TabResoconto from '../Utils/TabResoconto.vue';

</script>

<template>
  <main class="home">

    <!-- HERO -->
    <div class="hero my-4 md:my-12">
      <div class="container w-screen flex flex-row justify-start relative">

        <div class="hero-content w-100 md:w-3/5 z-1 flex flex-col gap-8 p-2">
          <span class="eyebrow">FREELANCE FULL STACK DEVELOPER </span>

          <h3>
            Realizzo applicazioni web e mobile su misura
            per aziende, startup e professionisti.
          </h3>

          <p>
            Ciao, sono <b class="eyebrow">Nome</b>.
            Da oltre 7 anni progetto e sviluppo soluzioni software complete,
            seguendo l'intero ciclo di sviluppo: dall'analisi dei requisiti
            fino alla pubblicazione in produzione.
            Collaboro con aziende e startup per realizzare piattaforme web,
            applicazioni mobile e software enterprise scalabili,
            affidabili e pensati per crescere nel tempo.
          </p>

          <div class="hero-actions flex-row ">
            <a href="#projects" class="btn-primary">
              Scopri i progetti
            </a>

            <div class="btn-secondary">
              <router-link to="/contact">Richiedi una consulenza</router-link>
            </div>
          </div>

        </div>

        <div class="absolute flex flex-row flex-center w- top-0">
          <video class="relative aspect-video overflow-hiddenblock w-full h-auto" autoplay muted loop playsinline>
            <source src="../../assets/Portfolio Preview.mov" type="video/mp4">
          </video>

          <div class="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-transparent">
          </div>
        </div>

      </div>
    </div>

    <!-- QUICK STATS -->
    <section class="stats z-1 ">
      <div class="container flex flex-col gap-4 ">
        <span class="eyebrow mb-4">PERCHÉ SCEGLIERMI</span>

        <div class="stats-grid">

          <div class="stat-card ">
            <h3 class="eyebrow font-bold">7+</h3>
            <span>Anni di esperienza</span>
          </div>

          <div class="stat-card">
            <h3 class="eyebrow font-bold">Full Stack</h3>
            <span>Sviluppo Web & Mobile</span>
          </div>

          <div class="stat-card">
            <h3 class="eyebrow font-bold">Enterprise Stack</h3>
            <span>Angular + Spring Boot + AWS</span>
          </div>

          <div class="stat-card">
            <h3 class="eyebrow font-bold">Startup Stack</h3>
            <span>Vue + React + FastAPI</span>
          </div>

        </div>

      </div>
    </section>

    <!-- FEATURED PROJECT -->
    <section id="projects" class="featured-project z-1">
      <div class="container flex flex-col gap-4">

        <span class="eyebrow mb-4">PROGETTI IN EVIDENZA</span>

        <div class="project-grid">

          <div class="project-content">
            <h3 class="eyebrow font-bold">Dreelo</h3>

            <p>
              Piattaforma mobile sviluppata con React Native e backend Laravel che
              semplifica l'incontro tra clienti e professionisti del settore
              edilizio, consentendo la richiesta, la gestione e il monitoraggio di
              interventi di ristrutturazione in modo rapido e trasparente.
              L'infrastruttura è ospitata su AWS con pipeline CI/CD automatizzate,
              garantendo scalabilità, affidabilità e rilasci continui.
            </p>

            <ul>
              <li>React Native & Laravel</li>
              <li>Architettura cloud su AWS</li>
              <li>Integrazione API e servizi di terze parti</li>
              <li>Pipeline CI/CD e deploy automatizzato</li>
            </ul>
          </div>

          <div>
            <img class="project-media rounded-xl" src="../../assets/images/IMMAGINE PORTFOLIO 1.png" />
          </div>

        </div>

        <div class="project-grid">

          <div class="project-content">
            <h3 class="eyebrow">Lunica</h3>

            <p>
              Piattaforma web e mobile sviluppata con Angular e Laravel per la gestione
              centralizzata di lavoratori, mezzi industriali e gare d'appalto.
              La soluzione digitalizza i processi operativi e amministrativi,
              consentendo un monitoraggio completo delle risorse, una gestione
              efficiente della documentazione e una pianificazione ottimizzata
              delle attività. Progettata con un'architettura scalabile e
              performante, garantisce elevati standard di affidabilità e
              manutenibilità.
            </p>

            <ul>
              <li>Angular & Laravel</li>
              <li>Architettura cloud su AWS</li>
              <li>Workflow per gare d'appalto</li>
              <li>Sviluppo parallelo web - mobile</li>
              <li>Architettura scalabile e integrazione API</li>
            </ul>
          </div>


          <div>
            <img class="project-media rounded-xl" src="../../assets/images/PREVIEW 2.png" />
          </div>

        </div>

      </div>
    </section>

    <!-- WHAT I DO -->
    <section class="services z-1">
      <div class="container flex flex-col gap-4">

        <span class="eyebrow mb-4">SERVIZI</span>

        <div class="services-grid">

          <div class="service-card">
            <h3 class="eyebrow">Frontend Development</h3>

            <p>
              Sviluppo di applicazioni web e mobile moderne, performanti e responsive.
              Realizzo interfacce intuitive, dashboard, portali aziendali e applicazioni
              multipiattaforma con particolare attenzione all'esperienza utente,
              all'accessibilità e alla qualità del codice.
            </p>

            <ul>
              <li>Angular</li>
              <li>Vue</li>
              <li>React</li>
              <li>React Native</li>
            </ul>
          </div>

          <div class="service-card">
            <h3 class="eyebrow">Full Stack Development</h3>

            <p>
              Progettazione e sviluppo completo di applicazioni web e mobile,
              dall'interfaccia utente ai servizi backend, API e database.
              Realizzo soluzioni scalabili, sicure e progettate per crescere
              insieme al business.
            </p>

            <ul>
              <li>Spring Boot & Java</li>
              <li>Laravel</li>
              <li>FastAPI</li>
              <li>PostgreSQL</li>
            </ul>
          </div>

          <div class="service-card">
            <h3 class="eyebrow">DevOps & Cloud Deployment</h3>

            <p>
              Gestione dell'intero ciclo di rilascio dell'applicazione con
              infrastrutture cloud o on-premise. Configuro ambienti di sviluppo,
              staging e produzione, automatizzando i processi di deploy per
              garantire affidabilità, sicurezza e scalabilità.
            </p>

            <ul>
              <li>Docker</li>
              <li>AWS / Cloud</li>
              <li>Deploy On-Premise</li>
              <li>CI/CD</li>
            </ul>
          </div>

        </div>

      </div>
    </section>

    <!-- OFFERINGS -->
    <section id="projects" class="projects z-1 flex flex-col gap-12">

      <div class="container">
        <span class="eyebrow mb-4">SERVIZI OFFERTI</span>
        <tab-offerte />
      </div>  

      <div class="container">
        <span class="eyebrow mb-4">MODELLI DI COLLABORAZIONE</span>
        <tab-collaborazione />
      </div>  

      <div class="container">
        <span class="eyebrow mb-4">STRUTTURA COSTI</span>
        <tab-resoconto />
      </div> 

    </section>

    <!-- PRICE PREVIEW -->
    <section class="container quote-calculator">
      <interactive-price-calc />
    </section>

    <!-- TECH STACK -->
    <section class="container stack z-1">
      <display-competenze />
    </section>

    <!-- CTA -->
    <section class="cta z-1">
      <div class="container">

        <h2>Hai un progetto da realizzare?</h2>

        <p>
          Se stai cercando un partner tecnico per sviluppare un nuovo prodotto,
          modernizzare un'applicazione esistente o trasformare un'idea in una
          soluzione concreta, sarò felice di aiutarti.
        </p>

        <a href="#contact" class="btn-primary">
          Richiedi una consulenza
        </a>

      </div>
    </section>

  </main>
</template>


<style scoped>

  .quote-calculator {
    background: #0f172a;
    padding: 2rem;
    border-radius: 16px;
    margin-top: 2rem;
  }

  .quote-calculator h3 {
    color: #38bdf8;
    margin-bottom: 1.5rem;
  }
html {
  scroll-behavior: smooth;
}

.hero {
  position: relative;
}

.hero-video {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg,
      rgba(15, 23, 42, 0.98) 0%,
      rgba(15, 23, 42, 0.9) 30%,
      rgba(15, 23, 42, 0.6) 55%,
      rgba(15, 23, 42, 0.2) 75%,
      rgba(15, 23, 42, 0) 100%);
}

.home {
  background: #020617;
  color: white;
}

.container {
  width: min(1200px, 90%);
  margin: auto;
}

section {
  padding: 6rem 0;
}

.hero-grid,
.project-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.hero h3 {
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  line-height: 1;
}

.eyebrow {
  color: #38bdf8;
  font-weight: 700;
}

.hero-actions {
  display: flex;
  gap: 1rem;
}

.btn-primary,
.btn-secondary {
  padding: 1rem 1.5rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
}

ul {
  list-style-type: disc;
  padding: 10px 0 !important;
  padding-left: 20px !important;
}

.btn-primary {
  background: #38bdf8;
  color: black;
  z-index: 9999;
}

.btn-secondary {
  border: 1px solid #334155;
  color: white;
}

.media-placeholder,
.video-placeholder {
  border: 2px dashed #334155;
  border-radius: 16px;
  min-height: 300px;
  display: grid;
  place-items: center;
  color: #64748b;
}

.stats-grid,
.services-grid,
.projects-grid {
  display: grid;
  gap: 1.5rem;
}

.stats-grid {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.services-grid,
.projects-grid {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.stat-card,
.service-card,
.project-card {
  background: #0f172a;
  padding: 1.5rem;
  border-radius: 16px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.tags span {
  background: #1e293b;
  padding: 0.75rem 1rem;
  border-radius: 999px;
}

.video-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.cta {
  text-align: center;
}

.cta p {
  color: #94a3b8;
  margin: 1rem 0 2rem;
}

@media (max-width: 768px) {

  .hero-grid,
  .project-grid,
  .video-grid {
    grid-template-columns: 1fr;
  }
  .hero h1 {
    font-size: 2.5rem;
  }
}





</style>