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

import apogeumM8 from "../../../../assets/Apogeum-m8.jpg";
import apogeumM8_2 from "../../../../assets/m8-2.png";
import apogeumM8_3 from "../../../../assets/m8-3.png";
import apogeumM8_4 from "../../../../assets/m8-4.png";
import apogeumM8_5 from "../../../../assets/m8-5.png";
import apogeumM8_6 from "../../../../assets/m8-6.png";
import apogeumM8_7 from "../../../../assets/m8-7.png";
import apogeumM8_8 from "../../../../assets/m8-8.png";
import apogeumM8_9 from "../../../../assets/m8-9.png";

import { useCursor } from "../../../../composables/useCursor.js";
const { grow, growS, reset, video } = useCursor();

import { useRouter } from "vue-router";
</script>

<template>
  <Navbar />
  <BackgroundLines />
  <HeadingWImg
    title="Apogeum M8 (Lego Mod) – Instrukcja krok po kroku"
    topic="Pen Modding"
    context="Nerd Talk"
    :src="apogeumM8"
    alt="zdjęcie modyfikacji"
  />
  <TextBlock>
    <SubHeading text="Specyfikacja:" margin="" />
    <ul>
      <li>Waga: <strong>~50g</strong></li>
      <li>
        Długość: <strong>26–27,5 cm</strong> (w zależności od długości użytych
        odcinków Giotto)
      </li>
    </ul>
  </TextBlock>
  <TextBlock align="right">
    <SubHeading text="Materiały:" margin="" tag="h3" />
    <ol>
      <li>3 markery Giotto Turbo Maxi</li>
      <li>2 śruby M8 × 30 mm</li>
      <li>ok. 4 cm body Crayola Super Tipa lub podobnego connectora</li>
      <li>2 gripy od Temu Moda</li>
      <li>pilnik okrągły i płaski</li>
      <li>obcinak do rur</li>
      <li>Kombinerki lub klucz francuski</li>
    </ol>
  </TextBlock>
  <TextBlock>
    <p>
      1. Spiłuj krawędzie obu śrub M8, zaokrąglając ich rogi, aby nie przecinały
      gripów. Pomijanie tego kroku spowoduje rozcinane gripów przez śruby
    </p>
  </TextBlock>
  <Image :src="apogeumM8_2" alt="zdjęcie numer 2" line="g" size="sm" />

  <TextBlock align="right">
    <p>
      2. Wyjmij tylne backplugi z dwóch markerów Giotto Turbo Maxi i wkręć po
      jednej śrubie M8 do każdego backpluga. Pasowanie jest bardzo ciasne, więc
      w razie potrzeby rozpiłuj wnętrze backpluga okrągłym pilnikiem.
    </p>
  </TextBlock>
  <Image :src="apogeumM8_3" alt="zdjęcie numer 3" align="right" />
  <Footer />
</template>

<style lang="scss" scoped>
@use "../../../../styles/base.scss" as *;
</style>
