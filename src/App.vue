<script setup>
import LoadingScreen from "./components/UI/LoadingScreen.vue";
import Lenis from "lenis";
import { ref } from "vue";
import { useRouter } from "vue-router";

const isLoading = ref(true);
const router = useRouter();
let isFirstLoad = true;

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

const MIN_LOADING_TIME = 1250;
const FADE_IN_DURATION = 400;
let navStart = 0;

router.beforeEach(() => {
  navStart = Date.now();
  isLoading.value = true;

  if (isFirstLoad) {
    isFirstLoad = false;
    return;
  }

  return new Promise((resolve) => {
    setTimeout(resolve, FADE_IN_DURATION);
  });
});

router.afterEach(() => {
  const elapsed = Date.now() - navStart;
  const remaining = Math.max(0, MIN_LOADING_TIME - elapsed);

  setTimeout(() => {
    isLoading.value = false;
  }, remaining);
});
</script>

<template>
  <Transition name="fade">
    <LoadingScreen v-if="isLoading" />
  </Transition>
  <RouterView />
</template>

<style lang="scss">
.fade-enter-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from {
  opacity: 0;
}
.fade-leave-active {
  transition: opacity 0.6s ease;
}
.fade-leave-to {
  opacity: 0;
}
</style>
