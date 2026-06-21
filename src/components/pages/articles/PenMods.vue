<script setup>
import BackgroundLines from "../../UI/BackgroundLines.vue";
import Navbar from "../../UI/Navbar.vue";
import Footer from "../../UI/Footer.vue";

import Heading from "../../templates/articleParts/ArticleHeading.vue";
import WideTextBlock from "../../templates/articleParts/WideTextBlock.vue";
import SubHeading from "../../templates/articleParts/SubHeading.vue";
import TextBlock from "../../templates/articleParts/TextBlock.vue";
import ArticleFooter from "../../templates/articleParts/ArticleFooter.vue";
import PhotosSection from "../../templates/articleParts/PhotosSection.vue";

import neoIvan from "../../../assets/Neoivanmod.jpg";
import apogeumM8 from "../../../assets/Apogeum-m8.jpg";

import { useRouter } from "vue-router";
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
  <WideTextBlock>
    Rozróżniamy dwa rodzaje modyfikacji, jednostronne (<strong
      >SC – Single Capped, Single Sided</strong
    >) oraz dwustronne (<strong>DC – Double Capped, Double Sided</strong>). Z
    reguły modyfikacje jednostronne zachowują postać normalnego długopisu, są
    jednak dłuższe oraz ładnie ozdobione. Mody dwustronne są zbudowane
    przeważnie z różnych pisaków, zmazików oraz są łatwiejsze w opanowaniu, z
    reguły są lepiej wyważone.
  </WideTextBlock>
  <TextBlock
    align="right"
    :src="neoIvan"
    alt="ilustracja przedstawiająca sloty"
    fit="c"
  >
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
  <PhotosSection
    :src1="apogeumM8"
    alt1="zdjęcie modyfikacji apogeum m8"
    text1="Apogeum M8"
    :src2="neoIvan"
    alt2="zdjęcie modyfikacji neo ivan"
    text2="Neo Ivan"
  ></PhotosSection>
</template>

<style lang="scss" scoped>
@use "../../../styles/base.scss" as *;
</style>
