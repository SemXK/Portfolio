<script setup lang="ts">
  // @ts-ignore: no declaration file for .vue module
  import ScrollStepper from "../projects/ScrollStepper.vue";
  import HeroVideo from "../projects/HeroVideo.vue";
import projects from "@/data/projects.ts";

</script>

<template>
  <main class="projects-page">
    <HeroVideo />
    <ScrollStepper :projects="projects"/>
  </main>
</template>

