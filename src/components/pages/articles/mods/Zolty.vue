<script setup>
import BackgroundLines from "../../../UI/BackgroundLines.vue";
import Navbar from "../../../UI/Navbar.vue";
import Footer from "../../../UI/Footer.vue";

import Heading from "../../../templates/articleParts/ArticleHeading.vue";
import HeadingWImg from "../../../templates/articleParts/HeadingWImg.vue";
import WideTextBlock from "../../../templates/articleParts/WideTextBlock.vue";
import SubHeading from "../../../templates/articleParts/SubHeading.vue";
import TextBlock from "../../../templates/articleParts/TextBlock.vue";
import ArticleFooter from "../../../templates/articleParts/ArticleFooter.vue";
import Image from "../../../templates/articleParts/Photo.vue";
import Video from "../../../templates/articleParts/Video.vue";

const src = "https://www.youtube.com/embed/9mcKR7ewv4U?si=5rFddGSd2G-EXFQH";

import Zolty from "../../../../assets/żółty.jpg";

import { useCursor } from "../../../../composables/useCursor.js";
const { grow, growS, reset, video } = useCursor();

import { useRouter } from "vue-router";
</script>

<template>
  <Navbar />
  <BackgroundLines />
  <HeadingWImg
    title="Żółty – Instrukcja Video"
    topic="Pen Modding"
    context="Nerd Talk"
    :src="Zolty"
    alt="zdjęcie modyfikacji"
  />
  <div class="margin-block"></div>

  <Video :src="src" text="Tutorial" align="right" />
  <div class="margin-block"></div>
  <Footer />
</template>

<style lang="scss" scoped>
@use "../../../../styles/base.scss" as *;

.margin-block {
  margin: 25px 0px;
}
</style>
