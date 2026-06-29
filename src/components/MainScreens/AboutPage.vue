<template>
  <section id="about" class="about">
    <div class="container">
      <div class="content">
        <p class="section-label">ABOUT ME</p>

        <h2>
          Building digital experiences for web and mobile.
        </h2>

        <p class="description">
          I'm a full-stack web and mobile developer specializing in
          modern frontend technologies and scalable backend solutions.
          I enjoy turning ideas into polished products that are fast,
          accessible, and enjoyable to use.
        </p>

        <p class="description">
          My focus is on creating applications that solve real-world
          problems while maintaining clean architecture and excellent
          user experiences.
        </p>

        <div class="stats">
          <div class="stat-card">
            <h3>3+</h3>
            <span>Years Experience</span>
          </div>

          <div class="stat-card">
            <h3>20+</h3>
            <span>Projects Built</span>
          </div>

          <div class="stat-card">
            <h3>10+</h3>
            <span>Technologies</span>
          </div>
        </div>

        <div class="tech-stack">
          <span>Vue</span>
          <span>Nuxt</span>
          <span>Flutter</span>
          <span>Node.js</span>
          <span>TypeScript</span>
          <span>Firebase</span>
          <span>PostgreSQL</span>
          <span>Docker</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 6rem 0;
  background: #0f172a;
  color: white;
}

.container {
  width: min(1100px, 90%);
  margin: auto;
}

.section-label {
  color: #38bdf8;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 1rem;
}

h2 {
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 1.5rem;
}

.description {
  color: #94a3b8;
  line-height: 1.8;
  max-width: 800px;
  margin-bottom: 1rem;
}

.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  margin-top: 3rem;
}

.stat-card {
  background: #1e293b;
  padding: 1.5rem;
  border-radius: 16px;
  text-align: center;
}

.stat-card h3 {
  font-size: 2rem;
  color: #38bdf8;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 3rem;
}

.tech-stack span {
  padding: 0.6rem 1rem;
  border-radius: 999px;
  background: #1e293b;
  color: #cbd5e1;
}
</style>