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
      <strong>1.</strong> Spiłuj krawędzie obu śrub M8, zaokrąglając ich rogi,
      aby nie przecinały gripów. Pomijanie tego kroku spowoduje rozcinane gripów
      przez śruby
    </p>
  </TextBlock>
  <Image
    :src="apogeumM8_2"
    alt="zdjęcie numer 2"
    line="g"
    size="sm"
    @mouseenter="growS()"
    @mouseleave="reset()"
  />

  <TextBlock align="right">
    <p>
      <strong>2.</strong> Wyjmij tylne backplugi z dwóch markerów Giotto Turbo
      Maxi i wkręć po jednej śrubie M8 do każdego backpluga. Pasowanie jest
      bardzo ciasne, więc w razie potrzeby rozpiłuj wnętrze backpluga okrągłym
      pilnikiem.
    </p>
  </TextBlock>
  <Image
    :src="apogeumM8_3"
    alt="zdjęcie numer 3"
    align="right"
    size="sm"
    @mouseenter="growS()"
    @mouseleave="reset()"
  />

  <TextBlock>
    <p>
      <strong>3.</strong> Wytnij dwa odcinki body Giotto o długości ok. 1,5 cm-2
      cm, w zależności od pożądanej długości moda. Nasuń przygotowane odcinki
      Giotto na backpluga z śrubą. To są nasze capy.
    </p>
  </TextBlock>
  <Image
    :src="apogeumM8_4"
    alt="zdjęcie numer 4"
    size="sm"
    @mouseenter="growS()"
    @mouseleave="reset()"
  />
  <div class="margin-block"></div>
  <TextBlock align="right">
    <strong>4.</strong>Owiń dolną część backplugów taśmą papierową, jeśli jest
    to potrzebne do uzyskania ciasnego pasowania w Body.<br /><br />
    <strong>5.</strong>Przygotuj element środkowy: <br />
    - wytnij ok. 1 cm body Giotto,<br />
    - wytnij ok. 4 cm body ST, który będzie naszym connectorem<br /><br />
    <strong>6.</strong>Nasuń przygotowany odcinek Giotto na connector. Jeśli
    pasowanie jest zbyt ciasne, użyj pilnika okrągłego.<br />
  </TextBlock>
  <Image
    :src="apogeumM8_5"
    alt="zdjęcie numer 5"
    size="sm"
    align="right"
    @mouseenter="growS()"
    @mouseleave="reset()"
  />
  <div class="margin-block"></div>
  <TextBlock>
    <strong>7.</strong> Połącz dwa body Giotto za pomocą naszego connectora
  </TextBlock>
  <Image
    :src="apogeumM8_6"
    alt="zdjęcie numer 6"
    @mouseenter="growS()"
    @mouseleave="reset()"
  />
  <div class="margin-block"></div>

  <TextBlock align="right">
    <strong>8.</strong> Włóż oba capy do końców naszego body
  </TextBlock>
  <Image
    :src="apogeumM8_7"
    alt="zdjęcie numer 7"
    align="right"
    @mouseenter="growS()"
    @mouseleave="reset()"
  />
  <TextBlock>
    <strong>9.</strong> Połącz dwa body Giotto za pomocą naszego connectora
  </TextBlock>
  <Image
    :src="apogeumM8_8"
    alt="zdjęcie numer 8"
    size="sm"
    @mouseenter="growS()"
    @mouseleave="reset()"
  />
  <Footer />
</template>

<style lang="scss" scoped>
@use "../../../../styles/base.scss" as *;

.margin-block {
  margin: 25px 0px;
}
</style>
