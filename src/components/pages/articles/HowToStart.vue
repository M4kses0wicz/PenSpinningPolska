<script setup>
import BackgroundLines from "../../UI/BackgroundLines.vue";
import Navbar from "../../UI/Navbar.vue";

import { useRouter } from "vue-router";
</script>

<template>
  <Navbar />
  <BackgroundLines />
  <h1>Jak zaczac</h1>
</template>

<style lang="scss" scoped>
@use "../../../styles/base.scss" as *;
</style>
