<template>
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

          <div class="absolute inset-0 bg-linear-to-r from-slate-950/95 via-slate-950/70 to-transparent">
          </div>
        </div>

      </div>
</template>