<script setup>
import BackgroundLines from "../../UI/BackgroundLines.vue";
import Navbar from "../../UI/Navbar.vue";
import Heading from "../../templates/articleParts/ArticleHeading.vue";

import { useRouter } from "vue-router";
</script>

<template>
  <Navbar />
  <BackgroundLines />
  <Heading
    title="Standardy zapisów  tricków - Podstawy notacji Angielskiej."
    topic="Notacja"
    context="Nerd Talk"
  />
</template>

<style lang="scss" scoped>
@use "../../../styles/base.scss" as *;
</style>
