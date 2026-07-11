<script setup>
import BackgroundLines from "../UI/BackgroundLines.vue";
import Navbar from "../UI/Navbar.vue";
import Footer from "../UI/Footer.vue";

import { useRouter } from "vue-router";
</script>

<template>
  <Navbar />
  <BackgroundLines />
  <div class="wrapper">
    <h1><strong>Już</strong> wkrótce...</h1>
  </div>
  <Footer />
</template>

<style scoped lang="scss">
@use "../../styles/base.scss" as *;

* {
  color: $white;
  font-family: "Inter", sans-serif;
}

.wrapper {
  @include FlexCenter;
  width: 100%;
  height: calc(100vh - 17.5px);
}

h1 {
  font-size: $font-size-heading;
}
</style>
