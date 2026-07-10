<script setup lang="ts">
// @ts-ignore: suppress missing declaration for .vue modules
import DisplayCompetenze from '../Utils/DisplayCompetenze.vue';
import HomePageCardCompetenze from '../Utils/HomePageCardCompetenze.vue';
import HomePageCV from '../Utils/HomePageCV.vue';
import HomePageFeaturedProjects from '../Utils/HomePageFeaturedProjects.vue';
import HomePageHero from '../Utils/HomePageHero.vue';
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
      <home-page-hero />
    </div>

    <!-- QUICK STATS -->
    <section class="stats z-1 ">
      <home-page-card-competenze />
    </section>

    <!-- FEATURED PROJECT -->
    <section id="projects" class="featured-project z-1">
      <home-page-featured-projects />
    </section>

    <!-- CV CARDS -->
    <section class="services z-1">
      <home-page-c-v />
    </section>

    <!-- OFFERINGS -->
    <section id="projects" class="projects z-1 flex flex-col gap-12">
      <div class="container">
        <span class="eyebrow mb-4">SERVIZI OFFERTI</span>
        <tab-offerte />
      </div>
    </section>

    <section class="projects z-1 flex flex-col gap-12">
      <div class="container">
        <span class="eyebrow mb-4">MODELLI DI COLLABORAZIONE</span>
        <tab-collaborazione />
      </div>
    </section>

    <section class="projects z-1 flex flex-col gap-12">

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
    <section id="skills" class="container stack z-1">
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