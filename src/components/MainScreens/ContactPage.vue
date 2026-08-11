<script setup lang="ts">
import { Icon } from '@iconify/vue';

const contacts = [
  {
    name: "Email",
    description: "Richieste commerciali e nuovi progetti",
    value: "s.bendahmani@swantech.it",
    icon: "lucide:mail",
    link: "mailto:s.bendahmani@swantech.it"
  },
  {
    name: "LinkedIn",
    description: "Networking professionale e Curriculum",
    value: "linkedin.com/in/me",
    icon: "simple-icons:linkedin",
    link: "https://www.linkedin.com/in/sabri-bendahmani-4b4582375/",
    color: "#0A66C2",
  },
  {
    name: "GitHub",
    description: "Repository e progetti open source",
    value: "github.com/me",
    icon: "simple-icons:github",
    link: "https://github.com/SemXK?tab=overview&from=2025-12-01&to=2025-12-31"
  },
  {
    name: "CV",
    description: "Curriculum aggiornato",
    value: "Scarica PDF",
    icon: "lucide:file-text",
    link: "src/assets/documents/sb_cv.pdf",
    color: "#38bdf8",
  },
  {
    name: "WhatsApp",
    description: "Contatto rapido",
    value: "Scrivimi direttamente",
    icon: "simple-icons:whatsapp",
    link: "https://wa.me/ 3501667774",
    color: "#25D366",
  },
  // {
  //   name: "Disponibilità",
  //   description: "Collaborazioni freelance",
  //   value: "Disponibile per nuovi progetti",
  //   icon: "lucide:calendar-check",
  //   link: "#",
  //   color: "#006BFF",
  // }
]
</script>


<template>
  <div class="fullScreenHeight">
    <section class="contact">
      <div class="container">

        <div class="section-header">
          <span class="eyebrow">CONTATTI</span>

          <h2>
            Hai un progetto da sviluppare o un team da supportare?
          </h2>

          <p class="intro">
            Che tu debba creare un nuovo prodotto digitale, migliorare
            un'applicazione esistente o integrare una figura tecnica nel
            tuo team, posso aiutarti a trovare una soluzione concreta.
          </p>
        </div>

        <div class="contact-reasons">
          <div class="card">
            <h3>Nuovi prodotti digitali</h3>
            <p>
              Dall'idea alla produzione: progettazione, sviluppo
              e rilascio di applicazioni scalabili.
            </p>
          </div>

          <div class="card">
            <h3>Modernizzazione software</h3>
            <p>
              Miglioramento di applicazioni esistenti, architetture
              obsolete e processi inefficienti.
            </p>
          </div>

          <div class="card">
            <h3>Supporto al team tecnico</h3>
            <p>
              Collaborazione con team interni per accelerare lo sviluppo
              e introdurre competenze Full Stack e DevOps.
            </p>
          </div>
        </div>

        <div class="contact-grid">
          <a v-for="contact in contacts" :key="contact.name" :href="contact.link" target="_blank" class="contact-card">
            <div class="icon">
              <Icon :icon="contact.icon" :style="{ color: contact.color || '#fff' }" width="55" />
            </div>

            <div>
              <h3>{{ contact.name }}</h3>
              <p>{{ contact.description }}</p>
              <span>{{ contact.value }}</span>
            </div>
          </a>
        </div>

      </div>
    </section>
  </div>
</template>



<style scoped>
.contact {

  background: #020617;
  color: white;
  padding: 6rem 0;

}

.fullScreenHeight {
  min-height: 90vh;
}


.section-header {

  max-width: 900px;
  margin-bottom: 4rem;

}



.intro {

  margin-top: 1.5rem;
  color: #94a3b8;
  font-size: 1.1rem;
  line-height: 1.8;

}




.contact-reasons {

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 4rem;

}



.reason-card {

  background: #0f172a;
  border: 1px solid #1e293b;
  border-radius: 16px;
  padding: 1.5rem;

  transition: .25s ease;

}



.reason-card:hover {

  border-color: #38bdf8;
  transform: translateY(-5px);

}



.reason-card h3 {

  color: #38bdf8;
  margin-bottom: .8rem;

}



.reason-card p {

  color: #94a3b8;
  line-height: 1.7;

}





.contact-grid {

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;

}




.contact-card {

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;

  background: linear-gradient(180deg,
      #0f172a,
      #020617);

  border: 1px solid #1e293b;
  border-radius: 16px;

  text-decoration: none;
  color: white;

  transition: .25s ease;

}



.contact-card:hover {

  border-color: #38bdf8;
  transform: translateY(-5px);

  box-shadow:
    0 10px 30px rgba(56, 189, 248, .1);

}



.icon {
  aspect-ratio: 1/1;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  font-size: 1.6rem;

}



.contact-card h3 {

  margin-bottom: .3rem;

}



.contact-card p {

  color: #94a3b8;
  font-size: .9rem;

}



.contact-card span {

  color: #38bdf8;
  font-size: .9rem;

}



@media(max-width:900px) {

  .contact-reasons {

    grid-template-columns: 1fr;

  }

}

.card {
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
</style>