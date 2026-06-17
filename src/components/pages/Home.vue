<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import BackgroundLines from "../UI/BackgroundLines.vue";
import Navbar from "../UI/Navbar.vue";
import Footer from "../UI/Footer.vue";

import { useCursor } from "../../composables/useCursor.js";
const { grow, growS, reset, video } = useCursor();

const router = useRouter();
const hovered = ref(false);
const hovered1 = ref(false);
const hovered2 = ref(false);

function goto(url) {
  window.open(url, "_blank");
}
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
      <div
        class="container"
        @click="router.push('/JakZaczac')"
        @mouseover="grow"
        @mouseleave="reset"
      >
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

  <section class="info">
    <div class="heading">
      <h2><strong>Czym</strong> jest penspinning <strong>?</strong></h2>
    </div>
    <div class="content-container">
      <div class="text-content">
        <h4>Istota penspinningu</h4>
        <p>
          Penspinning (ang. „pen spinning” – kręcenie długopisem) to forma
          manipulacji długopisem, ołówkiem lub innym podobnym przedmiotem za
          pomocą palców. Jest odmianą żonglerki kontaktowej, polegającą na
          wykonywaniu obrotów, płynnych przejść między palcami oraz różnych
          kombinacji trików. Łączy w sobie elementy zręczności, precyzji,
          kreatywności i ekspresji artystycznej. Penspinning może być uprawiany
          zarówno rekreacyjnie, jako forma relaksu i rozwijania umiejętności
          manualnych, jak i w formie rywalizacji. Osoba zajmująca się
          penspinningiem nazywana jest pen spinnerem.
        </p>
      </div>
      <div class="video-content">
        <div
          class="vid"
          @mouseenter="hovered = true"
          @mouseleave="hovered = false"
          @click="goto('https://youtu.be/o8KDwr80joE?si=XlRpOeRIz6KC2S0u')"
          @mouseover="video"
          @mouseout="reset"
        >
          <video
            v-if="hovered"
            src="../../assets/bula.mp4"
            autoplay
            loop
            muted
            playsinline
          ></video>
          <img v-else src="../../assets/bula.png" />
        </div>
        <div class="vid-text" v-if="hovered === true">Obejrzyj całość</div>
        <div class="vid-text" v-if="hovered === false" style="opacity: 0">
          Obejrzyj całość
        </div>
        <div class="triple-box-container">
          <div class="box g"></div>
          <div class="box g"></div>
          <div class="box g"></div>
        </div>
      </div>
    </div>
  </section>

  <section class="history">
    <div class="video-content">
      <div
        class="vid"
        @mouseenter="hovered1 = true"
        @mouseleave="hovered1 = false"
        @click="goto('https://youtu.be/gwMx_X5vjYc?si=gH8JKQxf8auk1zSK')"
        @mouseover="video"
        @mouseout="reset"
      >
        <video
          v-if="hovered1"
          src="../../assets/meeting1.mp4"
          autoplay
          loop
          muted
          playsinline
        ></video>
        <img v-else src="../../assets/meeting1.png" />
      </div>
      <div class="vid-text" v-if="hovered1 === true">Obejrzyj całość</div>
      <div class="vid-text" v-if="hovered1 === false" style="opacity: 0">
        Obejrzyj całość
      </div>
    </div>
    <div class="container">
      <div class="text-content">
        <h4>Powstanie portalu</h4>
        <p>
          Portal Polskich Pen Spinnerów powstał 28 kwietnia 2006 roku z
          inicjatywy trzech osób: dantego, Kmibara oraz Hakana którzy poznali
          się na nieistniejącym już forum dotyczącym żonglerki 11fingers.glt.pl.
          Na początku była to grupka zapaleńców chcących nauczyć się efektownych
          trików długopisem. Z czasem rozrosła się do ogólnopolskiej
          społeczności, do której co roku dołączają nowi pen spinnerzy.
          Efektowne kręcenie długopisem mimo to nadal zostaje zajęciem niszowym
          i wyjątkowym.
        </p>
      </div>
      <div class="heading">
        <h2>
          Powstanie <strong>P</strong>ortalu <strong>P</strong>olskich
          <strong>P</strong>enspinnerów
        </h2>
        <div class="triple-box-container">
          <div class="box w"></div>
          <div class="box g"></div>
          <div class="box g"></div>
        </div>
      </div>
    </div>
  </section>

  <section class="how-to-start">
    <h2><strong>S</strong>ztuka kombinacji</h2>
    <div class="content-container">
      <div class="video-content">
        <div
          class="vid"
          @mouseenter="hovered2 = true"
          @mouseleave="hovered2 = false"
          @click="goto('https://youtu.be/Mf7GMTU4M0M?si=Gu4_Nq8kmg2YH07n')"
          @mouseover="video"
          @mouseout="reset"
        >
          <video
            v-if="hovered2"
            src="../../assets/meeting2.mp4"
            autoplay
            loop
            muted
            playsinline
          ></video>
          <img v-else src="../../assets/meeting2.png" />
        </div>
        <div class="vid-text" v-if="hovered2 === true">Obejrzyj całość</div>
        <div class="vid-text" v-if="hovered2 === false" style="opacity: 0">
          Obejrzyj całość
        </div>
      </div>
      <div class="text-content">
        <h4>Od początku</h4>
        <p>
          Pen spinning można porównać do nauki gry na instrumencie. Pojedyncze
          triki są jak dźwięki. Dopiero połączone tworzą płynną sekwencję ruchu.
          Aby wykonać combo, czyli kombinację kilku trików, trzeba opanować jego
          elementy składowe. Najczęściej naukę zaczyna się od czterech
          podstawowych trików, zwanych fundamentalami: Thumb Around, Sonic,
          Charge i Fingerpass. Nie są one jednak obowiązkowe. Tak jak w muzyce
          nikt nie narzuca, jaką melodię masz grać, tak w pen spinningu uczysz
          się tych trików, które najbardziej Ci odpowiadają i pasują do Twojego
          stylu.
        </p>
      </div>
    </div>
    <div class="triple-box-container">
      <div class="box g"></div>
      <div class="box w"></div>
      <div class="box w"></div>
    </div>
  </section>
  <Footer />
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
      margin-top: 10%;
      height: 70%;
      background-image: url("../../assets/ppp-raczka-white.png");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      // border: red 1px dashed;
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

section {
  width: 60%;
  margin: 300px 0px 400px 20%;
  color: $white;
  font-family: "Inter", sans-serif;

  &.info {
    .heading {
      h2 {
        font-size: $font-size-big;
        font-weight: 900;
        width: 66%;
        transform: translateY(35px);
        position: relative;
        z-index: 1;
      }
    }

    .content-container {
      display: flex;
      justify-content: space-between;
      width: 100%;
      // border: 1px dashed red;

      .text-content {
        width: 33%;
        margin-top: 200px;

        animation: text-margin ease forwards;
        animation-timeline: view();
        animation-range: entry 10% cover 150%;

        h4 {
          font-size: $font-size-subheading;
          font-weight: 900;
          margin-bottom: 10px;
        }

        p {
          font-size: $font-size-body;
          font-weight: 300;
          word-spacing: 2px;
          letter-spacing: 0.5px;
          // opacity: 0.75;
        }
      }

      .video-content {
        width: 66.666%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        .vid {
          width: 100%;
          aspect-ratio: 16/8;
          overflow: hidden;
          cursor: pointer;

          &::before {
            content: "Buła: some things never change - same spot, same guys, same hobby, 9 years later";
            opacity: 0.75;
            display: block;
            font-size: $font-size-small;
            text-align: right;
            width: 100%;
          }

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: brightness(70%);
          }

          video {
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: brightness(100%);
          }
        }

        .vid-text {
          font-size: $font-size-small;
          margin-top: 10px;
          display: flex;
          transform: translate(0%, -120%);
          mix-blend-mode: color-dodge;
          pointer-events: none;

          &::after {
            content: "";
            width: 20px;
            height: 20px;
            display: block;
            z-index: -1;
            background: url(../../assets/arrow.svg);
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            filter: brightness(2);
            transition: 0.1s ease-in-out;
            rotate: -45deg;
            opacity: 1;
            animation: moves 10s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
            margin-left: 10px;
            margin-top: 5px;
          }
        }
      }
    }
  }

  &.history {
    // margin-bottom: 2000px;
    .video-content {
      width: 100%;

      .vid {
        width: 100%;
        aspect-ratio: 16/7;
        overflow: hidden;
        cursor: pointer;

        &::before {
          content: "Penspinning meeting with Ian Jenson - Kraków 2.08.2017";
          opacity: 0.75;
          display: block;
          font-size: $font-size-small;
          text-align: left;
          width: 100%;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(70%);
        }

        video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(100%);
        }
      }

      .vid-text {
        font-size: $font-size-small;
        margin-top: 10px;
        margin-left: 5px;
        display: flex;
        transform: translate(0%, -120%);
        mix-blend-mode: color-dodge;
        pointer-events: none;

        &::after {
          content: "";
          width: 20px;
          height: 20px;
          display: block;
          z-index: -1;
          background: url(../../assets/arrow.svg);
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          filter: brightness(2);
          transition: 0.1s ease-in-out;
          rotate: -45deg;
          opacity: 1;
          animation: moves 10s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
          margin-left: 10px;
          margin-top: 5px;
        }
      }
    }

    .container {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    .heading {
      width: 66%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      h2 {
        font-size: $font-size-big;
        font-weight: 900;
        text-align: right;
        transform: translateY(-105px);
        position: relative;
        z-index: 1;
      }

      .triple-box-container {
        transform: translateY(-105px);
      }
    }

    .text-content {
      width: 33%;
      margin-top: 50px;

      animation: text-margin1 ease forwards;
      animation-timeline: view();
      animation-range: entry 10% cover 150%;

      h4 {
        font-size: $font-size-subheading;
        font-weight: 900;
        margin-bottom: 10px;
      }

      p {
        font-size: $font-size-body;
        font-weight: 300;
        word-spacing: 2px;
        letter-spacing: 0.5px;
        // opacity: 0.75;
      }
    }
  }

  &.how-to-start {
    .triple-box-container {
      margin-top: 25px;
    }

    h2 {
      font-size: $font-size-big;
      font-weight: 900;
      width: 100%;
      text-align: right;
      position: relative;
      z-index: 1;
    }

    .video-content {
      width: 66.666%;
    }

    .text-content {
      width: 33%;
      margin-top: 0px;
      text-align: right;

      animation: text-margin2 ease forwards;
      animation-timeline: view();
      animation-range: entry 10% cover 150%;

      h4 {
        font-size: $font-size-subheading;
        font-weight: 900;
        margin-bottom: 10px;
      }

      p {
        font-size: $font-size-body;
        font-weight: 300;
        word-spacing: 2px;
        letter-spacing: 0.5px;
        // opacity: 0.75;
      }
    }

    .vid {
      width: 100%;
      aspect-ratio: 8/5;
      // overflow: hidden;
      cursor: pointer;

      &::after {
        content: "Penspinning meeting - Warszawa 28.02.2016";
        opacity: 0.75;
        display: block;
        font-size: $font-size-small;
        text-align: right;
        width: 100%;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: brightness(70%);
      }

      video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: brightness(100%);
      }
    }

    .vid-text {
      font-size: $font-size-small;
      // margin-top: 10px;
      margin-left: 5px;
      display: flex;
      transform: translate(0%, -150%);
      mix-blend-mode: color-dodge;
      pointer-events: none;

      &::after {
        content: "";
        width: 20px;
        height: 20px;
        display: block;
        z-index: -1;
        background: url(../../assets/arrow.svg);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        filter: brightness(2);
        transition: 0.1s ease-in-out;
        rotate: -45deg;
        opacity: 1;
        animation: moves 10s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
        margin-left: 10px;
        margin-top: 5px;
      }
    }

    .content-container {
      display: flex;
    }
  }
}

@keyframes text-margin {
  0% {
    margin-top: 200px;
  }
  100% {
    margin-top: 350px;
  }
}

@keyframes text-margin1 {
  0% {
    margin-top: 50px;
  }
  100% {
    margin-top: 200px;
  }
}

@keyframes text-margin2 {
  0% {
    margin-top: 0px;
  }
  100% {
    margin-top: 150px;
  }
}
</style>
