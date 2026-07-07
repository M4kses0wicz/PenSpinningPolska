<script setup>
import { ref } from "vue";

import BackgroundLines from "../../UI/BackgroundLines.vue";
import Navbar from "../../UI/Navbar.vue";
import Footer from "../../UI/Footer.vue";

import Heading from "../../templates/articleParts/ArticleHeading.vue";
import WideTextBlock from "../../templates/articleParts/WideTextBlock.vue";
import SubHeading from "../../templates/articleParts/SubHeading.vue";
import TextBlock from "../../templates/articleParts/TextBlock.vue";
import ArticleFooter from "../../templates/articleParts/ArticleFooter.vue";

import penMods from "../../../assets/penmods.jpg";
import neoIvan from "../../../assets/Neoivanmod.jpg";
import apogeumM8 from "../../../assets/Apogeum-m8.jpg";
import gmod from "../../../assets/gmod.jpg";
import linestyle from "../../../assets/linestyle.jpg";
import mrz from "../../../assets/mrz.jpg";
import zolty from "../../../assets/żółty.jpg";

import { useCursor } from "../../../composables/useCursor.js";
const { grow, growS, reset, video } = useCursor();

import { useRouter } from "vue-router";
const router = useRouter();

const hoveredMod = ref(neoIvan);

const setHovered = (event, src) => {
  grow(event);
  hoveredMod.value = src;
};
</script>

<template>
  <Navbar />
  <BackgroundLines />
  <Heading
    title="Poradniki tworzenia najpopularniejszych Pen Modów."
    topic="Pen Modding"
    context="Nerd Talk"
  />
  <SubHeading text="Czym kręcić?" tag="h3" />
  <WideTextBlock>
    Na pewno na wielu filmach pen spinnerów zauważyłeś już, że nie używają oni
    zwykłych długopisów. To co widzisz w ich rękach to modyfikacje (w skrócie
    <strong>mody</strong>). Są to długopisy złożone specjalnie do pen spinningu.
    Składają się przeważnie z kilku do kilkunastu różnych elementów wyjętych z
    innych pisaków, markerów, długopisów. Gdyby nie modyfikacje pen spinning nie
    rozwijał by się tak szybko. Dłuższa, lepiej wyważona modyfikacja pomaga w
    nauce trików, sprawia, że wykonywanie ewolucji jest bardziej komfortowe oraz
    efektowne.
  </WideTextBlock>
  <TextBlock
    align="right"
    :src="penMods"
    alt="ilustracja przedstawiająca sloty"
  >
    <p>
      Rozróżniamy dwa rodzaje modyfikacji, jednostronne (<strong
        >SC – Single Capped, Single Sided</strong
      >) oraz dwustronne (<strong>DC – Double Capped, Double Sided</strong>). Z
      reguły modyfikacje jednostronne zachowują postać normalnego długopisu, są
      jednak dłuższe oraz ładnie ozdobione. Mody dwustronne są zbudowane
      przeważnie z różnych pisaków, zmazików oraz są łatwiejsze w opanowaniu, z
      reguły są lepiej wyważone.
    </p>
    <br />
    <p>
      To którą modyfikacją kręci pen spinner zależy głównie od jego preferencji,
      stylu, przyzwyczajenia. Nie ma modyfikacji najlepszych, każdemu pasuje co
      innego. Składanie długopisów do pen spinnigu to modding, a pen spinner
      wykonujący tę czynność to modder.
    </p>
    <br />

    <p>
      Początkującym pen spinnerom nie są potrzebne jakieś wymyślne mody,
      wystarczy pisak, dwie gumki (<strong>gripy</strong>) na końcach oraz
      metalowe końcówki długopisu do dociążenia (<strong>tipy</strong>) i
      modyfikacja jest gotowa, można już zacząć uczyć się pierwszych trików.
      Jeżeli złożenie własnej modyfikacji wydaje się trudne, można oczywiście
      zakupić taką w sklepie lub od innego użytkownika forum. W świecie pen
      spinningu istnieją setki różnych modyfikacji, wiele osób dzieli się swoimi
      pomysłami. Na forum, w odpowiednim dziale, znajdziesz tutoriale do
      przeróżnych modyfikacji oraz recenzje na ich temat.
    </p></TextBlock
  >

  <SubHeading text="Poradniki do Polskich Modów:" tag="h2" />

  <div class="mods-section">
    <div class="line"><div class="w"></div></div>

    <ul class="mods-list">
      <li
        class="mod-item"
        @mouseenter="(e) => setHovered(e, neoIvan)"
        @mouseleave="reset"
        @click=""
      >
        <div class="mod-text">
          <span class="mod-name"><span class="accent">N</span>eo Ivan</span>
        </div>
      </li>

      <li
        class="mod-item"
        @mouseenter="(e) => setHovered(e, apogeumM8)"
        @mouseleave="reset"
        @click="router.push('/Artykuly/Modyfikacje/ApogeumM8')"
      >
        <div class="mod-text">
          <span class="mod-name"><span class="accent">A</span>pogeum M8</span>
        </div>
      </li>

      <li
        class="mod-item"
        @mouseenter="(e) => setHovered(e, linestyle)"
        @mouseleave="reset"
        @click=""
      >
        <div class="mod-text">
          <span class="mod-name"><span class="accent">L</span>ine Style</span>
        </div>
      </li>

      <li
        class="mod-item"
        @mouseenter="(e) => setHovered(e, gmod)"
        @mouseleave="reset"
        @click="router.push('/Artykuly/Modyfikacje/G-mod')"
      >
        <div class="mod-text">
          <span class="mod-name"><span class="accent">G</span>-Mod</span>
        </div>
      </li>

      <li
        class="mod-item"
        @mouseenter="(e) => setHovered(e, mrz)"
        @mouseleave="reset"
        @click="router.push('/Artykuly/Modyfikacje/Mr-Z')"
      >
        <div class="mod-text">
          <span class="mod-name"><span class="accent">M</span>r. Z</span>
        </div>
      </li>

      <li
        class="mod-item"
        @mouseenter="(e) => setHovered(e, zolty)"
        @mouseleave="reset"
        @click="router.push('/Artykuly/Modyfikacje/Zolty')"
      >
        <div class="mod-text">
          <span class="mod-name"><span class="accent">Ż</span>ółty</span>
        </div>
      </li>
    </ul>

    <div class="mod-display">
      <transition name="fade" mode="out-in">
        <img :key="hoveredMod" :src="hoveredMod" class="mod-display-img" />
      </transition>
    </div>
  </div>
  <Footer></Footer>
</template>

<style lang="scss" scoped>
@use "../../../styles/base.scss" as *;

* {
  font-family: "inter", sans-serif;
}

.mods-section {
  width: 60%;
  margin: 0 0 50px 20%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
}

.line {
  grid-column: 1 / -1;
  width: 100%;
  display: flex;
  margin-bottom: 20px;

  div {
    width: 100%;
    height: 3px;

    &.g {
      background: $green;
    }

    &.w {
      background: $white;
    }
  }
}

.mods-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.mod-item {
  padding: 0;
  cursor: pointer;
}

.mod-text {
  padding: 8px 8px 8px 0;
}

.mod-name {
  font-size: $font-size-subheading;
  font-weight: 700;
  color: $white;
  transition: color 0.25s ease;

  .accent {
    color: $green;
  }
}

.mod-item:hover .mod-name {
  color: $green;
}

.mod-display {
  position: sticky;
  top: 60px;
  height: 480px;
  overflow: hidden;
  background-color: rgba($white, 0.05);
  padding: 15px;
}

.mod-display-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
