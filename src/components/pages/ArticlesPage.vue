<script setup>
import BackgroundLines from "../UI/BackgroundLines.vue";
import Navbar from "../UI/Navbar.vue";
import ArticleCard from "../templates/ArticleCard.vue";
import Footer from "../UI/Footer.vue";

import { useCursor } from "../../composables/useCursor.js";
const { grow, growS, reset, video } = useCursor();

const router = useRouter();

import { useRouter } from "vue-router";

function Soon() {
  alert("Już wkrótce!");
}
</script>

<template>
  <Navbar />
  <BackgroundLines />
  <section class="content">
    <h1><strong>A</strong>rtykuły</h1>
    <ArticleCard
      title="Rozpocznij swoją przygodę z pen spinningiem!"
      description="Jak zacząć kręcić i jak się w tym odnaleźć? W tym artykule znajdziesz wszystkie niezbędne informacje, które pomogą Ci rozpocząć swoją przygodę z pen spinningiem."
      author="MAksesOwicz"
      topic="Dla początkujących"
      context="Od zera do penspinnera"
      @mouseenter="grow()"
      @mouseleave="reset()"
      @click="router.push('/Artykuly/JakZaczac')"
    />
    <ArticleCard
      title="Poradniki tworzenia najpopularniejszych Pen Modów."
      description="Znajdź poradnik do wybranego Pen Moda i zbuduj go samodzielnie. Oto poradniki do tych najpopularniejszych! Poznaj ich budowę, właściwości oraz poziom trudności składania, a następnie wybierz model najlepiej dopasowany do swojego stylu."
      author="Wielu autorów"
      topic="Pen Modding"
      context="Nerd Talk"
      @mouseenter="grow()"
      @mouseleave="reset()"
      @click="router.push('/Artykuly/Modyfikacje')"
    />
    <ArticleCard
      title="Styl w Pen spinningu - O stylu w Pen spinningu słów kilka."
      description="Nie raz przeglądając filmy pen spinnerów natykamy się na wszelkie komentarze wychwalające lub potępiające styl kręcenia danego pen spinnera. Ale czym w ogóle jest styl w pen spinningu?"
      author="Pari"
      topic="Styl"
      context="Nerd Talk"
      @mouseenter="grow()"
      @mouseleave="reset()"
      @click="router.push('/Artykuly/StylWPenspinningu')"
    />
    <ArticleCard
      title="Standardy zapisów tricków - Podstawy Notacji Angielskiej."
      description="Ten artykuł ma na celu przybliżyć Wam standardy w zapisie tricków/combosów. Są tutaj tłumaczenia artykułów The Naming Committee. Należy się do tego stosować, aby uniknąć nieporozumień i poprawnie nazywać tricki."
      author="Krasnal, Rarka, Dercen"
      topic="Notacja"
      context="Nerd Talk"
      @mouseenter="grow()"
      @mouseleave="reset()"
      @click="router.push('/Artykuly/PodstawyNotacji')"
    />
    <ArticleCard
      title="Podstawy Pen Moddingu - Twoje małe dzieło sztuki."
      description="Chcesz mieć własnego pena, który będzie idealnie dopasowany do Twojego stylu kręcenia? Dowiedz się, jak zacząć swoją przygodę z pen moddingiem, jakie narzędzia będą Ci potrzebne oraz jakie są podstawowe techniki składania pen modów."
      author="Aguia"
      topic="Pen Modding"
      context="Nerd Talk"
      @mouseenter="grow()"
      @mouseleave="reset()"
      @click="Soon()"
    />
    <ArticleCard
      title="Zaawansowane zagadnienia notacji angielskiej."
      description="Ten artykuł jest kontynuacją podstaw notacji angielskiej. Znajdziesz tutaj bardziej zaawansowane zagadnienia, które pomogą Ci lepiej zrozumieć i stosować notację angielską w pen spinningu."
      author="KaD"
      topic="Notacja"
      context="Nerd Talk"
      @mouseenter="grow()"
      @mouseleave="reset()"
      @click="Soon()"
    />
  </section>
  <div class="margin-block"></div>
  <Footer />
</template>

<style scoped lang="scss">
@use "../../styles/base.scss" as *;

* {
  color: $white;
  font-family: "Inter", sans-serif;
}

.margin-block {
  height: 100px;
  width: 100%;
}

section {
  margin-left: 20%;
  margin-top: 25vh;
  width: 60%;
  @include FlexCenter(column);

  @include Media("<", 810px) {
    width: 90%;
    margin-left: 5%;
  }

  h1 {
    font-size: $font-size-big;
    width: 100%;

    @include Media("<", 1750px) {
      font-size: $font-size-big-m !important;
    }

    @include Media("<", 1300px) {
      font-size: $font-size-big-s !important;
    }

    @include Media("<", 810px) {
      font-size: $font-size-big-xs !important;
    }
  }
}
</style>
