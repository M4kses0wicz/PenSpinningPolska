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

const src = "https://www.youtube.com/embed/zxJ8ePPvrDM?si=I9lD6AiDxb35KXoP";
const src1 = "https://www.youtube.com/embed/CN3rFEUozvE?si=rqSsw7HD2-ouJEKd";

import GMod from "../../../../assets/gibkimod.jpg";

import { useCursor } from "../../../../composables/useCursor.js";
const { grow, growS, reset, video } = useCursor();

import { useRouter } from "vue-router";
</script>

<template>
  <Navbar />
  <BackgroundLines />
  <HeadingWImg
    title="G-mod – Instrukcja Video"
    topic="Pen Modding"
    context="Nerd Talk"
    :src="GMod"
    alt="zdjęcie modyfikacji"
  />
  <div class="margin-block"></div>
  <WideTextBlock>
    <strong>[Gibki]:</strong> Zrobiłem tego moda, ponieważ potrzebowałem pena z
    dużo powierzchnią kręcenia, który nie będzie ani za długi, ani za krótki.
    Miał to być uniwersalny długopis, który bedzie idealny do kręcenia
    wszelkiego rodzaju trików. Tak powstał G-mod, którym mogę kręcić i triangle
    passy i stylowe hybrydy i triki fingerless. Nawet power triki. Teraz mogę
    kręcić wszystkie triki, jednocześnie formując swój własny styl wg własnych
    upodobań, a nie możliwości długopisu. Juz po pierwszym nagranym combie oraz
    po meetingu dużo osób prosiło mnie o tutorial, więc zamieszczam go, żebyście
    Wy też mogli się cieszyć tym modem ;)
  </WideTextBlock>
  <div class="margin-block"></div>

  <Video :src="src" text="Tutorial" align="right" />
  <div class="margin-block"></div>
  <Video :src="src1" text="Dodatkowy Tutorial" line="g" />
  <div class="margin-block"></div>
  <Footer />
</template>

<style lang="scss" scoped>
@use "../../../../styles/base.scss" as *;

.margin-block {
  margin: 25px 0px;
}
</style>
