<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <span>JD.</span>
      </div>

      <button
        class="menu-btn"
        @click="menuOpen = !menuOpen"
        aria-label="Toggle Menu"
      >
        ☰
      </button>

      <nav :class="{ open: menuOpen }">
        <router-link to="/">Home</router-link>
        <a href="#projects">Projects</a>
        <a href="#skills">Tech Stack</a>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: #0f172a;
  border-bottom: 1px solid #1e293b;
}

.container {
  max-width: 1200px;
  margin: auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  color: white;
  font-weight: 700;
  font-size: 1.4rem;
}

nav {
  display: flex;
  gap: 1.5rem;
}

nav a {
  color: #cbd5e1;
  text-decoration: none;
}

nav a:hover {
  color: #38bdf8;
}

.menu-btn {
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.6rem;
}

@media (max-width: 768px) {
  .menu-btn {
    display: block;
  }

  nav {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background: #0f172a;
    display: none;
    padding: 1rem;
  }

  nav.open {
    display: flex;
  }
}
</style>