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

const src = "https://www.youtube.com/embed/v10hcOwqrY4?si=tTFUrw9zb4Cf3yaj";

import { useCursor } from "../../../composables/useCursor.js";
const { grow, growS, reset, video } = useCursor();

import { useRouter } from "vue-router";
import ArticleHeading from "../../templates/articleParts/ArticleHeading.vue";
</script>

<template>
  <Navbar />
  <BackgroundLines />
  <ArticleHeading
    title="XII Mistrzostwa w Pen Spinningu 2024"
    topic="Mistrzostwa Polski"
    context="lipiec-wrzesień 2024"
  ></ArticleHeading>
  <WideTextBlock>
    W 2024 roku odbyła się kolejna edycja Mistrzostw Polski w Pen Spinningu, w
    której o tytuł najlepszego zawodnika rywalizowało 16 uczestników: Bagieta,
    Banan, Buła, Cysiu, Czern 43, dejv, doktorek, Freze, KaD, Lx, Macbar,
    MAksesOwicz, Mervo, MosieQ, Nefo oraz przemgo100. Nad prawidłowym
    przebiegiem zawodów i oceną zgłoszonych comb czuwało jury w składzie:
    <strong>tilt</strong>, <strong>zeGentleman</strong>,
    <strong>DArKT</strong> i sędzia rezerwowy <strong>Crowsu!</strong>.
    <br />
    <br />
    Format rywalizacji obejmował cztery rundy. W rundach 1 i 2 wszyscy zawodnicy
    startowali w jednej grupie, nagrywając i przesyłając swoje combo. Pierwsza
    runda startowała 22 lipca, a wyniki ogłoszono 5 sierpnia – tego samego dnia
    rozpoczęła się runda druga, zakończona wynikami 19 sierpnia. Na podstawie
    wyników obu rund do dalszej fazy awansowała czwórka najlepszych zawodników,
    którzy w rundzie 3 (start 19 sierpnia, wyniki 7 września) zmierzyli się
    systemem pucharowym: T1 vs T4 oraz T2 vs T3. Zwycięzcy tych pojedynków
    przeszli do wielkiego finału, a przegrani powalczyli o trzecie miejsce –
    obie te walki rozegrano w rundzie 4, startującej 7 września, z wynikami
    ogłoszonymi 26 września.
    <br />
    <br />
    Każde zgłoszone combo musiało być autorskie, niepublikowane wcześniej i
    trwać od 10 do 25 sekund, licząc od pierwszego do ostatniego triku, a filmy
    nie mogły być zmontowane (poza dozwolonym przycinaniem, edycją dźwięku czy
    dodaniem zwolnionego tempa). Sędziowie oceniali występy w pięciu
    kategoriach: Difficulty, Execution, Presentation, Originality oraz
    Recycling, przyznając punkty według ustalonej skali – od 0 do 10 w
    większości kategorii, maksymalnie 2 punkty za prezentację oraz od 0 do 5
    punktów karnych za recykling trików z poprzednich rund. Złamanie regulaminu
    skutkowało dyskwalifikacją z mistrzostw.
  </WideTextBlock>
  <TextBlock align="right">
    <ul>
      <li>
        <a
          @mouseover="grow"
          @mouseleave="reset"
          target="_blank"
          href="https://docs.google.com/spreadsheets/d/1VHfVUFraM-O4AoaIbT9xJgK-Io_6Sqfgn4xbZohyunM/edit?usp=sharing"
          >Arkusz Informacyjny</a
        >
      </li>
      <li>
        <a
          @mouseover="grow"
          @mouseleave="reset"
          target="_blank"
          href="https://docs.google.com/spreadsheets/d/1GP63Js41McXy__Y6JkJJzgPXy3pOXH-ECroIsm-SYvA/edit?usp=sharing"
          >Runda 1</a
        >
      </li>
      <li>
        <a
          @mouseover="grow"
          @mouseleave="reset"
          target="_blank"
          href="https://docs.google.com/spreadsheets/d/1ZD2poQr_LsqrKFQDxgGm_mC5QSZ4SBHlaC-q0nbteZQ/edit?usp=sharing"
          >Runda 2</a
        >
      </li>
      <li>
        <a
          @mouseover="grow"
          @mouseleave="reset"
          target="_blank"
          href="https://docs.google.com/spreadsheets/d/1ugIPR8Q3QknAlfOnKwifF9mDz-8Mx_imCMc6byzJHiM/edit?usp=sharing"
          >Runda 3</a
        >
      </li>
      <li>
        <a
          @mouseover="grow"
          @mouseleave="reset"
          target="_blank"
          href="https://docs.google.com/spreadsheets/d/1lDb3Qs4j51RWDj6gIC80ddJs5MNWVoY99kif-3uvA8k/edit?usp=sharing"
          >Runda 4</a
        >
      </li>
    </ul>
  </TextBlock>
  <VideoBlock :src="src" text="Mistrzostwa Polski 2024" />
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
