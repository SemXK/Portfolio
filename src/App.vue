<script setup lang="ts">
// @ts-ignore
import Footer from './components/Layout/Footer.vue';
// @ts-ignore
import Header from './components/Layout/Header.vue';
</script>

<template>
  <div class="h-screen">
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<style scoped></style>
