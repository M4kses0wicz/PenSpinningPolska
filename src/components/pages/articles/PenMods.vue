<script setup>
import BackgroundLines from "../../UI/BackgroundLines.vue";
import Navbar from "../../UI/Navbar.vue";
import Heading from "../../templates/ArticleHeading.vue";

import { useRouter } from "vue-router";
</script>

<template>
  <Navbar />
  <BackgroundLines />
  <Heading
    title="Poradniki tworzenia najpopularniejszych Pen Modów."
    topic="Pen Modding"
    context="Nerd Talk"
  />
</template>

<style lang="scss" scoped>
@use "../../../styles/base.scss" as *;
</style>
