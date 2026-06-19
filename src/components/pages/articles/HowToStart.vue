<script setup>
import BackgroundLines from "../../UI/BackgroundLines.vue";
import Navbar from "../../UI/Navbar.vue";
import Heading from "../../templates/ArticleHeading.vue";
import WideTextBlock from "../../templates/articleParts/WideTextBlock.vue";
import SubHeading from "../../templates/articleParts/SubHeading.vue";

import { useRouter } from "vue-router";
</script>

<template>
  <Navbar />
  <BackgroundLines />
  <Heading
    title="Rozpocznij swoją przygodę z pen spinningiem!"
    topic="Dla początkujących"
    context="Od zera do penspinnera"
  />
  <SubHeading text="Witaj na Pen Spinning Polska!" tag="h3" />
  <WideTextBlock>
    Bardzo cieszymy się z tego że tu jesteś, i mamy nadzieję że zostaniesz z
    nami na jakiś czas. Na początku wypadałoby powiedzieć kim jesteśmy. Nasze
    community nosi nazwę <strong>ppp</strong> (portal polskich penspinnerów) i
    zrzesza pen spinnerow z calej Polski – mozna powiedziec ze jestesmy
    reprezentacją Polski w pen spinningu.
  </WideTextBlock>
</template>

<style lang="scss" scoped>
@use "../../../styles/base.scss" as *;
</style>
