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

// const src = "";

import { useCursor } from "../../../composables/useCursor.js";
const { grow, growS, reset, video } = useCursor();

import { useRouter } from "vue-router";
import ArticleHeading from "../../templates/articleParts/ArticleHeading.vue";
</script>

<template>
  <Navbar />
  <BackgroundLines />
  <ArticleHeading
    title="XII Mistrzostwa w Pen Spinningu 2026"
    topic="Mistrzostwa Polski"
    context="czerwiec-sierpień 2026"
  ></ArticleHeading>
  <WideTextBlock>
    W 2026 roku odbywa się kolejna edycja Mistrzostw Polski w Pen Spinningu.
    Mistrzostwa są właśnie w trakcie. Sędziowie to
    <strong>tilt</strong>, <strong>Mumm3y</strong> i <strong>Zefia</strong>.
    <br />
    <br />
  </WideTextBlock>
  <TextBlock align="right">
    <ul>
      <li>
        <a
          @mouseover="grow"
          @mouseleave="reset"
          target="_blank"
          href="https://docs.google.com/spreadsheets/d/1xX5wk3D_QbUrOPXfRo5FSqXNvFGHeHAHHGu9YIAAaQ8/edit?usp=sharing"
          >Arkusz Informacyjny</a
        >
      </li>
      <li>
        <a
          @mouseover="grow"
          @mouseleave="reset"
          target="_blank"
          href="https://docs.google.com/spreadsheets/d/1uJMx2SBKdfffEvGP0TN6Mk39QUdGLcFgLCA-XNdGUdw/edit?usp=sharing"
          >Runda 1</a
        >
      </li>
      <li>Runda 2 - w trakcie</li>
      <li>Runda 3 - w trakcie</li>
    </ul>
  </TextBlock>
  <!-- <VideoBlock :src="src" text="Mistrzostwa Polski 2026" /> -->
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
