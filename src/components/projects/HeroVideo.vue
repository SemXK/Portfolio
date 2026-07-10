<template>
  <section class="hero">

    <video class="hero-video" autoplay muted loop playsinline>
      <source src="https://www.pexels.com/video/a-man-programming-on-a-computer-7989386/" type="video/mp4">
    </video>

    <div class="overlay"></div>

    <div class="content">

      <span class="eyebrow">
        PROGETTI
      </span>

      <h1>
        Dal concept alla produzione.
      </h1>

      <p>
        Una selezione di applicazioni web, mobile e software enterprise
        sviluppati per startup, aziende e clienti privati.
      </p>

      <div class="scroll-indicator">

        <span>Scorri per esplorare</span>

        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path d="M12 5v14m0 0l-6-6m6 6l6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>

      </div>

    </div>

  </section>
</template>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.hero-video {
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;

  object-fit: cover;

  z-index: 0;
}

.overlay {
  position: absolute;
  inset: 0;

  background:
    linear-gradient(90deg,
      rgba(2, 6, 23, .95) 0%,
      rgba(2, 6, 23, .8) 40%,
      rgba(2, 6, 23, .35) 100%);

  z-index: 1;
}

.content {
  position: relative;

  z-index: 2;

  width: min(700px, 90%);

  margin-left: 8%;

  display: flex;
  flex-direction: column;

  gap: 1.5rem;
}

h1 {
  font-size: clamp(3rem, 6vw, 6rem);

  line-height: .95;

  color: white;
}

p {
  color: #cbd5e1;

  font-size: 1.15rem;

  line-height: 1.7;
}

.scroll-indicator {
  margin-top: 5rem;

  display: flex;
  flex-direction: column;

  align-items: flex-start;

  gap: .75rem;

  color: white;

  animation: bounce 2s infinite;
}

.scroll-indicator svg {
  color: #38bdf8;
}

@keyframes bounce {

  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(10px);
  }

  60% {
    transform: translateY(5px);
  }

}

@media (max-width:768px) {

  .content {
    margin: auto;
    width: 90%;
  }

}
</style>