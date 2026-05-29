<script setup>
import BackgroundLines from "../UI/BackgroundLines.vue";
import Navbar from "../UI/Navbar.vue";

import { useRouter } from "vue-router";
</script>

<template>
  <Navbar />
  <BackgroundLines />
  <h1>Historia</h1>
</template>

<style scoped lang="scss">
@use "../../styles/base.scss" as *;

* {
  color: $white;
}
</style>
