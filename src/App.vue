<script setup>
import InfoCard from "./components/pages/InfoCard.vue";
import Lenis from "lenis";

const lenis = new Lenis({
  duration: 1.3,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothTouch: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
</script>

<template>
  <RouterView />
  <!-- <InfoCard /> -->
</template>

<style scoped lang="scss"></style>
