<template>
  <div class="tech-section">

    <h2 class="eyebrow mb-4">Tecnologie</h2>

    <div class="tech-grid">

      <div
        v-for="tech in technologies"
        :key="tech.name"
        class="tech-card"
      >
        <img :src="tech.icon" :alt="tech.name" />
        <span>{{ tech.name }}</span>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      technologies: [
        { name: "Angular", icon: "https://cdn.simpleicons.org/angular/DD0031" },
        { name: "Spring Boot", icon: "https://cdn.simpleicons.org/springboot/6DB33F" },
        { name: "Java", icon: "https://upload.wikimedia.org/wikipedia/it/2/2e/Java_Logo.svg" },
        { name: "Vue", icon: "https://cdn.simpleicons.org/vuedotjs/42B883" },
        { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
        { name: "React Native", icon: "https://cdn.simpleicons.org/react/61DAFB" },
        { name: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi/009688" },
        { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel/FF2D20" },
        { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
        { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
        { name: "MariaDB", icon: "https://cdn.simpleicons.org/mariadb/003545" },
        { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
        { name: "InfluxDB", icon: "https://cdn.simpleicons.org/influxdb/22ADF6" },
        { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
        { name: "AWS", icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
        { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
        { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
        { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
        { name: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4" }
      ]
    };
  }
};
</script>

<style scoped>
  .tech-section {
    padding: 2rem 0;
  }

  .title {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    color: #e2e8f0;
  }

  /* GRID */
  .tech-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 1rem;
  }

  /* CARD */
  .tech-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 1.2rem;
    border-radius: 14px;

    background: linear-gradient(180deg, #0f172a, #020617);
    border: 1px solid #1e293b;

    cursor: pointer;

    transition: all 0.25s ease;

    opacity: 0;
    transform: translateY(10px);
    animation: fadeIn 0.6s forwards;
  }

  /* ICON */
  .tech-card img {
    width: 42px;
    height: 42px;
    margin-bottom: 0.5rem;

    transition: transform 0.25s ease;
  }

  /* TEXT */
  .tech-card span {
    font-size: 0.9rem;
    color: #cbd5e1;
  }

  /* HOVER */
  .tech-card:hover {
    transform: translateY(-5px);
    border-color: #38bdf8;
    box-shadow: 0 10px 30px rgba(56, 189, 248, 0.1);
  }

  .tech-card:hover img {
    transform: scale(1.15);
  }

  /* ENTRY ANIMATION */
  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* stagger effect */
  .tech-card:nth-child(1) { animation-delay: 0.05s; }
  .tech-card:nth-child(2) { animation-delay: 0.1s; }
  .tech-card:nth-child(3) { animation-delay: 0.15s; }
  .tech-card:nth-child(4) { animation-delay: 0.2s; }
  .tech-card:nth-child(5) { animation-delay: 0.25s; }
  .tech-card:nth-child(6) { animation-delay: 0.3s; }
  .tech-card:nth-child(7) { animation-delay: 0.35s; }
  .tech-card:nth-child(8) { animation-delay: 0.4s; }
  .tech-card:nth-child(9) { animation-delay: 0.45s; }
  .tech-card:nth-child(10) { animation-delay: 0.5s; }
</style>