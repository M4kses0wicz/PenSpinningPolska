<script setup>
import { useRouter } from "vue-router";
import BackgroundLines from "../UI/BackgroundLines.vue";
import Footer from "../UI/Footer.vue";

import { useCursor } from "../../composables/useCursor.js";
const { grow, growS, reset } = useCursor();

const router = useRouter();
</script>

<template>
  <BackgroundLines />
  <section class="content">
    <h1><strong>4</strong>04</h1>
    <p>Nie znaleziono strony, której szukasz.</p>
    <button @click="router.push('/')" @mouseenter="grow" @mouseleave="reset">
      Wróć na stronę główną
    </button>
  </section>
  <Footer />
  <div class="wrapper">
    <img
      src="../../assets/ppp-raczka-white.png"
      alt="logo portalu polskich pen spinnerow"
    />
  </div>
</template>

<style scoped lang="scss">
@use "../../styles/base.scss" as *;

* {
  color: $white;
  font-family: "inter", sans-serif;
}

section {
  width: 100%;
  height: calc(100vh - 17.5px);
  color: $white;
  @include FlexCenter(column);
}

h1 {
  font-size: $font-size-big;
  margin-bottom: 20px;
}

button {
  border: 2px $white solid;
  background: transparent;
  color: $white;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 50px;
  font-size: $font-size-body;
  margin-top: 20px;
  transition: 0.25s;

  &:hover {
    background: $white;
    color: $black;
  }
}

.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  pointer-events: none;

  img {
    height: 125%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    opacity: 10%;
    z-index: -1;
  }
}
</style>
