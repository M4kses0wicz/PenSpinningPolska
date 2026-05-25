<script setup>
import BackgroundLines from "../UI/BackgroundLines.vue";
import Navbar from "../UI/Navbar.vue";
</script>

<template>
  <Navbar />
  <BackgroundLines />
  <main>
    <div class="logo"></div>
  </main>
</template>

<style lang="scss" scoped>
@use "../../styles/base.scss" as *;
main {
  width: 100vw;
  height: 100svh;
  @include FlexCenter;

  .logo {
    aspect-ratio: 1/1;
    height: 70%;
    background-image: url("../../assets/ppp-raczka-white.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
}
</style>
