<script setup>
import { useCursor } from "../../../composables/useCursor.js";
const { grow, growS, reset, video } = useCursor();

defineProps({
  src1: {
    type: String,
    default: null,
  },
  alt1: {
    type: String,
    default: "",
  },
  text1: {
    type: String,
    default: "",
  },
  src2: {
    type: String,
    default: null,
  },
  alt2: {
    type: String,
    default: "",
  },
  text2: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="block">
    <div class="wrapper" @mouseover="grow" @mouseleave="reset">
      <img v-if="src1" :src="src1" :alt="alt1" class="image" />
      <p>{{ text1 }}</p>
    </div>
    <div class="wrapper" @mouseover="grow" @mouseleave="reset">
      <img v-if="src2" :src="src2" :alt="alt2" class="image" />
      <p>{{ text2 }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../../styles/base.scss" as *;

* {
  color: $white;
  font-family: "inter", sans-serif;
}

.block {
  width: 60%;
  margin: 50px 20%;

  .wrapper {
    width: 33.33%;

    img {
      width: 100%;
      // aspect-ratio: 16/9;
      object-fit: contain;
    }
  }
}
</style>
