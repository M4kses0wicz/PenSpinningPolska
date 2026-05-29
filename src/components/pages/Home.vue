<script setup>
import router from "../../routes/index.js";
import BackgroundLines from "../UI/BackgroundLines.vue";
import Navbar from "../UI/Navbar.vue";

import { useRouter } from "vue-router";
</script>

<template>
  <Navbar />
  <BackgroundLines />
  <main>
    <div class="block"></div>
    <div class="logo-container">
      <div class="logo"></div>
    </div>
    <div class="wrapper">
      <div class="container" @click="router.push('/JakZaczac')">
        <p>Rozpocznij naukę penspinningu</p>
        <h2><strong>Jak</strong> zacząć?</h2>
        <div class="arrow">
          <div class="line"></div>
          <div class="arr">
            <div class="arr1 l"></div>
            <div class="arr2 l"></div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use "../../styles/base.scss" as *;
main {
  width: 100vw;
  height: 100svh;
  @include FlexCenter(row);

  .block {
    height: 100%;
    width: 20%;
  }

  .logo-container {
    height: 100%;
    width: 60%;
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

  .wrapper {
    height: 100%;
    width: 20%;
    color: $white;
    @include FlexCenter(column);
    align-items: start;
    font-family: "Inter", sans-serif;

    .container {
      cursor: pointer;
      @include FlexCenter(column);
      align-items: start;

      &:hover {
        .arrow .line {
          width: 100px;
        }
      }

      h2 {
        font-size: $font-size-heading;
        font-weight: 900;
      }

      p {
        font-size: $font-size-small;
        opacity: 0.75;
      }
    }

    .arrow {
      @include FlexCenter(row);
      height: 30px;
      cursor: pointer;
      margin-left: 10px;

      .line {
        width: 30px;
        height: 5px;
        background: $white;
        border-radius: 5px;
        transition: 0.4s ease-in-out;
      }

      .arr {
        display: flex;
        flex-direction: column;
        gap: 7px;
        transform: translateX(-13px);

        .l {
          width: 21px;
          height: 5px;
          background: $white;
          border-radius: 5px;
        }

        .arr1 {
          transform: rotate(45deg);
        }

        .arr2 {
          transform: rotate(-45deg);
        }
      }
    }
  }
}
</style>
