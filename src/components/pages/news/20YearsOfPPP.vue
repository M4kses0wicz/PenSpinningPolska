<script setup>
import BackgroundLines from "../../UI/BackgroundLines.vue";
import Navbar from "../../UI/Navbar.vue";
import Footer from "../../UI/Footer.vue";

import Heading from "../../templates/articleParts/ArticleHeading.vue";
import WideTextBlock from "../../templates/articleParts/WideTextBlock.vue";
import SubHeading from "../../templates/articleParts/SubHeading.vue";
import TextBlock from "../../templates/articleParts/TextBlock.vue";
import ArticleFooter from "../../templates/articleParts/ArticleFooter.vue";
import VideoBlock from "../../templates/articleParts/Video.vue";

const src = "https://www.youtube.com/embed/BFoTeOp3cgI?si=0WtwM52Wi6gm6XOw";

import { useCursor } from "../../../composables/useCursor.js";
const { grow, growS, reset, video } = useCursor();

import { useRouter } from "vue-router";
import ArticleHeading from "../../templates/articleParts/ArticleHeading.vue";
</script>

<template>
  <Navbar />
  <BackgroundLines />
  <ArticleHeading
    title="20 urodziny Portalu Polskich Penspinnerów!"
    topic="Historia"
    context="28 kwietnia 2026"
  ></ArticleHeading>
  <WideTextBlock>
    18 kwietnia 2026 roku Polski Portal Pen Spinnerów (PPP) obchodził swoje
    <strong>20-lecie.</strong> Z tej okazji powstał specjalny film kolaboracyjny
    pod tytułem "Trapped in Motion" ("Uwięzieni w ruchu/kręceniu"), który
    zmontował MAksesOwicz (M4k). W projekcie udział wzięli: Rarka, KaD, Mervo,
    Gibki, Fenix, MosieQ, MAksesOwicz oraz Buła.
    <br />
    <br />
    Tytuł filmu nie jest przypadkowy – w produkcji można zobaczyć, od kiedy
    każdy z uczestniczących pen spinnerów jest "uwięziony" w tym hobby, czyli
    kiedy dokładnie zaczęła się jego przygoda z kręceniem długopisem. Film stał
    się tym samym nie tylko artystycznym podsumowaniem dorobku społeczności, ale
    i swoistą kroniką dokumentującą dwie dekady historii polskiego pen spinningu
    poprzez doświadczenia jego najbardziej zaangażowanych przedstawicieli.
  </WideTextBlock>
  <div class="margin-block"></div>
  <VideoBlock :src="src" text="Trapped in Motion" align="right" />
  <div class="margin-block"></div>
  <Footer />
</template>

<style lang="scss" scoped>
@use "../../../styles/base.scss" as *;

li {
  margin: 25px 0px !important;
}
a {
  font-size: $font-size-subheading-m;
}

.margin-block {
  width: 100%;
  height: 100px;
}
</style>
