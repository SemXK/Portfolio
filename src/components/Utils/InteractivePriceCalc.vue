<template>
  <section class="quote-modern">

    <div class="quote-header">
      <h3 class="eyebrow">Stima Costi</h3>
      <p>Seleziona i servizi e ottieni una stima immediata</p>
    </div>

    <!-- SERVICES -->
    <div class="services-modern">

      <div
        v-for="s in services"
        :key="s.key"
        class="chip"
        :class="{ active: selected[s.key] }"
        @click="toggleService(s.key)"
      >
        <span>{{ s.label }}</span>
        <small>{{ s.desc }}</small>
      </div>

    </div>

    <!-- CONTROLS -->
    <div class="controls-modern">

      <div class="control">
        <label>Schermate: <span>{{ screens }}</span></label>
        <input type="range" min="1" max="30" v-model="screens" />
      </div>

      <div class="control">
        <label>Durata (settimane): <span>{{ weeks }}</span></label>
        <input type="range" min="1" max="12" v-model="weeks" />
      </div>

    </div>

    <!-- RESULT -->
    <div class="result-modern">

      <div class="price-modern">
        € {{ totalPrice}}
        <span class="text-[16px]">
          .00*
        </span>
      </div>

      <div class="hint">*Stima indicativa, non vincolante</div>

    </div>

  </section>
</template>

<script>
export default {
  data() {
    return {
      screens: 5,
      weeks: 3,

      selected: {
        frontend: false,
        backend: false,
        devops: false,
        maintenance: false
      },

      services: [
        { key: "frontend", label: "Frontend", desc: "UI & Web Apps", price: 1200 },
        { key: "backend", label: "Backend", desc: "API & Logic", price: 1500 },
        { key: "devops", label: "DevOps", desc: "Cloud & Deploy", price: 800 },
        { key: "maintenance", label: "Maintenance", desc: "Support & Fix", price: 400 }
      ]
    };
  },

  computed: {
    totalPrice() {
      let base = 0;

      this.services.forEach(s => {
        if (this.selected[s.key]) {
          base += s.price;
        }
      });

      base += this.screens * 90;
      base += (12 - this.weeks) * 180;

      return Math.round(base) ;
    }
  },

  methods: {
    toggleService(key) {
      this.selected[key] = !this.selected[key];
    }
  }
};
</script>

<style scoped>
.quote-modern {
  background: linear-gradient(180deg, #0f172a, #020617);
  padding: 2.5rem;
  border-radius: 20px;
  color: white;
  border: 1px solid #1e293b;
}

/* HEADER */
.quote-header h3 {
  font-size: 1.6rem;
  margin: 0;
}

.quote-header p {
  color: #94a3b8;
}

/* SERVICES */
.services-modern {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}

.chip {
  padding: 1rem;
  border-radius: 14px;
  border: 1px solid #334155;
  background: rgba(2, 6, 23, 0.6);
  cursor: pointer;
  transition: 0.2s;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.chip:hover {
  transform: translateY(-3px);
  border-color: #38bdf8;
}

.chip.active {
  border-color: #38bdf8;
  background: rgba(56, 189, 248, 0.08);
}

/* CONTROLS */
.controls-modern {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.2rem;
}

.control label {
  font-size: 0.85rem;
  color: #94a3b8;
  display: block;
  margin-bottom: 0.4rem;
}

input[type="range"] {
  width: 100%;
  accent-color: #38bdf8;
}

/* RESULT */
.result-modern {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid #1e293b;
}

.price-modern {
  font-size: 2.2rem;
  font-weight: 700;
  color: #38bdf8;
}

.hint {
  font-size: 0.85rem;
  color: #64748b;
}
</style>