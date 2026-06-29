<template>
  <section id="about" class="about">
    <div class="container">
      <div class="section-header">
        <span class="eyebrow">ABOUT ME</span>

        <h2>
          Full Stack Engineer with 7 years of experience
          building products from MVPs to enterprise platforms.
        </h2>
      </div>

      <div class="content-grid">
        <div class="bio">
          <p>
            I'm a software engineer specializing in web and mobile
            application development. Over the past 7 years, I've worked
            across both enterprise environments and startup ecosystems,
            delivering everything from large-scale business platforms
            to fast-moving product launches.
          </p>

          <p>
            My experience spans the entire development lifecycle:
            architecture, backend services, API design, frontend
            implementation, mobile applications, deployment and
            long-term maintenance.
          </p>

          <p>
            For enterprise projects, I typically work with Angular,
            Spring Boot and PostgreSQL to build scalable and maintainable
            systems. For startups and small-to-medium businesses, I
            focus on rapid product delivery using Vue, React,
            React Native, FastAPI and Laravel.
          </p>

          <p>
            I enjoy solving complex technical problems, improving
            developer workflows and building software that creates
            measurable value for users and businesses.
          </p>
        </div>

        <div class="highlights">
          <div class="card">
            <h3>7+</h3>
            <p>Years of Development Experience</p>
          </div>

          <div class="card">
            <h3>Full Stack</h3>
            <p>Frontend, Backend & Mobile</p>
          </div>

          <div class="card">
            <h3>Enterprise</h3>
            <p>Angular & Spring Ecosystems</p>
          </div>

          <div class="card">
            <h3>Product</h3>
            <p>MVP to Production Delivery</p>
          </div>
        </div>
      </div>

      <div class="expertise">
        <div class="expertise-group">
          <h3>Enterprise Development</h3>

          <div class="tags">
            <span>Angular</span>
            <span>Spring Boot</span>
            <span>Java</span>
            <span>PostgreSQL</span>
            <span>REST APIs</span>
          </div>
        </div>

        <div class="expertise-group">
          <h3>Product Development</h3>

          <div class="tags">
            <span>Vue</span>
            <span>React</span>
            <span>React Native</span>
            <span>FastAPI</span>
            <span>Laravel</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  background: #0f172a;
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

.eyebrow {
  color: #38bdf8;
  font-weight: 700;
  letter-spacing: 2px;
  font-size: 0.9rem;
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

.highlights {
  display: grid;
  gap: 1rem;
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
}
</style>