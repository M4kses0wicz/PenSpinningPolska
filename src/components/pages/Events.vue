<script setup>
import BackgroundLines from "../UI/BackgroundLines.vue";
import Navbar from "../UI/Navbar.vue";
import Footer from "../UI/Footer.vue";
import EventCard from "../templates/EventCard.vue";

import { useCursor } from "../../composables/useCursor.js";
const { grow, growS, reset, video } = useCursor();

const router = useRouter();

import { useRouter } from "vue-router";
</script>

<template>
  <Navbar />
  <BackgroundLines />
  <section class="content">
    <h1><strong>W</strong>ydarzenia</h1>
    <EventCard
      title="XIII Mistrzostwa Polski w Pen Spinningu 2026"
      date="czerwiec-sierpień 2026"
      topic="Mistrzostwa"
      context="MP 2026"
      @mouseenter="grow()"
      @mouseleave="reset()"
    />
    <EventCard
      title="20 urodziny Portalu Polskich Penspinnerów!"
      date="28 kwietnia 2026"
      topic="Urodziny"
      context="Historia"
      @mouseenter="grow()"
      @mouseleave="reset()"
    />
    <EventCard
      title="XII Mistrzostwa Polski w Pen Spinningu 2024"
      date="lipiec-wrzesień 2024"
      topic="Mistrzostwa"
      context="MP 2024"
      @mouseenter="grow()"
      @mouseleave="reset()"
    />
    <EventCard
      title="18 urodziny Portalu Polskich Penspinnerów! - Meeting we Wrocławiu"
      date="28 kwietnia 2024"
      topic="Urodziny"
      context="Historia"
      @mouseenter="grow()"
      @mouseleave="reset()"
    />
  </section>
  <div class="margin-block"></div>
  <Footer />
</template>

<style scoped lang="scss">
@use "../../styles/base.scss" as *;

* {
  color: $white;
  font-family: "Inter", sans-serif;
}

.margin-block {
  height: 100px;
  width: 100%;
}

section {
  margin-left: 20%;
  margin-top: 25vh;
  width: 60%;
  @include FlexCenter(column);

  h1 {
    font-size: $font-size-big;
    width: 100%;

    @include Media("<", 1750px) {
      font-size: $font-size-big-m !important;
    }
  }
}
</style>
