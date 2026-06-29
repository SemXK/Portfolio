<template>
  <footer class="footer">
    <div class="container">
      <div>
        <h3>John Doe</h3>
        <p>Web & Mobile Developer</p>
      </div>

      <div class="links">
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
        <a href="mailto:hello@example.com">Email</a>
      </div>
    </div>

    <div class="copyright">
      © {{ year }} John Doe. All rights reserved.
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background: #0f172a;
  color: white;
  padding: 3rem 1rem;
  border-top: 1px solid #1e293b;
}

.container {
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
}

.links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.links a {
  color: #cbd5e1;
  text-decoration: none;
}

.links a:hover {
  color: #38bdf8;
}

.copyright {
  margin-top: 2rem;
  text-align: center;
  color: #64748b;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}
</style>