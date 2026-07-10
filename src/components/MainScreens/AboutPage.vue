<script setup lang="ts">
// @ts-ignore: No declaration file for Vue SFC
import DisplayCompetenze from '../Utils/DisplayCompetenze.vue';
import TabCollaborazione from '../Utils/TabCollaborazione.vue';

</script>

<template>
  <div class="fullScreenHeight">

    <section id="about" class="about">
      <div class="container">
        <div class="section-header">
          <span class="eyebrow">CHI SONO</span>

          <h2>
            Full Stack Engineer con oltre 7 anni di esperienza nello sviluppo
            di soluzioni digitali, da MVP per startup a piattaforme enterprise.
          </h2>
        </div>

        <div class="bio">

          <p class="lead">
            Aiuto aziende, startup e professionisti a progettare, sviluppare e
            mettere in produzione applicazioni web moderne, affidabili e scalabili.
          </p>

          <div class="bio-points">

            <div class="bio-item">
              <span class="eyebrow">ESPERIENZA COMPLETA</span>
              <p>
                Seguo l'intero ciclo di vita del software: analisi, progettazione,
                sviluppo, deployment e manutenzione evolutiva.
              </p>
            </div>

            <div class="bio-item">
              <span class="eyebrow">APPROCCIO ORIENTATO AL BUSINESS</span>
              <p>
                Ogni soluzione nasce dagli obiettivi del progetto: velocità di sviluppo,
                affidabilità, scalabilità e facilità di manutenzione.
              </p>
            </div>

            <div class="bio-item">
              <span class="eyebrow">COLLABORAZIONE CON TEAM ESISTENTI</span>
              <p>
                Mi integro rapidamente in team già strutturati oppure seguo
                autonomamente lo sviluppo di un prodotto, adattandomi ai processi
                e agli strumenti già in uso.
              </p>
            </div>

          </div>

        </div>
        <!-- <div class="content-grid">

        </div> -->
        <div class="flex flex-row justify-between">
          <div class="card">
            <h3>7+</h3>
            <p>Anni di esperienza</p>
          </div>

          <div class="card">
            <h3>Full Stack</h3>
            <p>Sviluppo Web, Backend e Mobile</p>
          </div>

          <div class="card">
            <h3>Enterprise</h3>
            <p>Esperienza in contesti aziendali complessi</p>
          </div>

          <div class="card">
            <h3>Dall'idea al rilascio</h3>
            <p>Dall'MVP alla messa in produzione</p>
          </div>
        </div>

        <div class="expertise">
          <DisplayCompetenze />
        </div>
      </div>
    </section>

    <section class="projects z-1 flex flex-col gap-12">
      <div class="container">
        <span class="eyebrow mb-4">MODELLI DI COLLABORAZIONE</span>
        <TabCollaborazione />
      </div>
    </section>
  </div>

</template>


<style scoped>
.about {
  color: white;
  padding: 6rem 0;
}

.container {
  width: min(1200px, 90%);
  margin: 0 auto;
}

.section-header {
  max-width: 900px;
  margin-bottom: 4rem;
}

h2 {
  margin-top: 1rem;
  font-size: clamp(2rem, 4vw, 3.5rem);
  line-height: 1.2;
}

.content-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
}

.bio p {
  color: #94a3b8;
  line-height: 1.9;
  margin-bottom: 1.5rem;
}

.card {
  width: 22%;
  background: #1e293b;
  border-radius: 16px;
  padding: 1.5rem;
}

.card h3 {
  color: #38bdf8;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.card p {
  color: #cbd5e1;
}

.expertise {
  margin-top: 4rem;
  display: grid;
  gap: 2rem;
}

.expertise-group h3 {
  margin-bottom: 1rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.tags span {
  background: #1e293b;
  color: #cbd5e1;
  padding: 0.7rem 1rem;
  border-radius: 999px;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr;
  }

  h2 {
    font-size: 2rem;
  }

  .lead {
    font-size: 1.2rem;
    color: #e2e8f0;
    line-height: 1.8;
    max-width: 900px;
    margin-bottom: 3rem;
  }

  .bio-points {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  .bio-item {
    background: #1e293b;
    border-left: 4px solid #38bdf8;
    padding: 1.5rem;
    border-radius: 12px;
  }

  .bio-item h3 {
    margin-bottom: .8rem;
    color: white;
  }

  .bio-item p {
    margin: 0;
    color: #94a3b8;
    line-height: 1.7;
  }

  @media (max-width: 900px) {
    .bio-points {
      grid-template-columns: 1fr;
    }
  }


}
</style>