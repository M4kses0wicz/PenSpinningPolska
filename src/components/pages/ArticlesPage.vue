<script setup>
import BackgroundLines from "../UI/BackgroundLines.vue";
import Navbar from "../UI/Navbar.vue";

import { useRouter } from "vue-router";
</script>

<template>
  <Navbar />
  <BackgroundLines />
  <section class="content">
    <h1><strong>A</strong>rtykuły</h1>
  </section>
</template>

<style scoped lang="scss">
@use "../../styles/base.scss" as *;

* {
  color: $white;
  font-family: "Inter", sans-serif;
}

section {
  margin-left: 20%;
  margin-top: 25vh;
  width: 60%;

  h1 {
    font-size: $font-size-big;
  }
}
</style>
