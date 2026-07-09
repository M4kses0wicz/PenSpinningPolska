<script setup>
import { ref, onMounted, onUnmounted } from "vue";
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

const mainRef = ref(null);

const MAX_OFFSET_PX = 14;

let rafId = null;
let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;

function handleMouseMove(e) {
  const nx = (e.clientX / window.innerWidth) * 2 - 1;
  const ny = (e.clientY / window.innerHeight) * 2 - 1;

  targetX = Math.max(-1, Math.min(1, nx)) * MAX_OFFSET_PX;
  targetY = Math.max(-1, Math.min(1, ny)) * MAX_OFFSET_PX;
}

function animate() {
  currentX += (targetX - currentX) * 0.08;
  currentY += (targetY - currentY) * 0.08;

  if (mainRef.value) {
    mainRef.value.style.setProperty("--mx", `${currentX.toFixed(2)}px`);
    mainRef.value.style.setProperty("--my", `${currentY.toFixed(2)}px`);
  }

  rafId = requestAnimationFrame(animate);
}

onMounted(() => {
  window.addEventListener("mousemove", handleMouseMove, { passive: true });
  rafId = requestAnimationFrame(animate);
});

onUnmounted(() => {
  window.removeEventListener("mousemove", handleMouseMove);
  if (rafId) cancelAnimationFrame(rafId);
});
</script>

<template>
  <Navbar />
  <BackgroundLines />
  <main ref="mainRef">
    <div class="block"></div>
    <div class="logo-container">
      <div class="logo"></div>
      <div class="wrapper-s">
        <div class="logo-s"></div>
      </div>
    </div>
    <div class="wrapper">
      <div
        class="container"
        @click="router.push('/Artykuly/JakZaczac')"
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
      <h2><strong>Czym</strong> jest penspinning<strong>?</strong></h2>
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
          kreatywności i ekspresji artystycznej. Osoba zajmująca się
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
      margin-top: 5%;
      height: 80%;
      background-image: url("../../assets/ppp-raczka-white.png");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      // border: red 1px dashed;
      position: absolute;
      opacity: 0.75;
      z-index: -1;
      // filter: drop-shadow(0px 0px 10px #ffffff50);

      --logo-strength: 1.4;
      transform: translate(
        calc(var(--mx, 0px) * var(--logo-strength)),
        calc(var(--my, 0px) * var(--logo-strength))
      );
      transition: transform 0.5s ease-out;
      will-change: transform;
    }

    .wrapper-s {
      width: 20%;
      height: 100%;
      position: absolute;
      @include FlexCenter(column);
      overflow: hidden;
      background: $black;
    }

    .logo-s {
      aspect-ratio: 1/1;
      height: 65%;
      margin-top: 30%;
      background-image: url("../../assets/ppp-raczka-white.png");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      position: absolute;
      // border: red 1px dashed;

      --logo-s-strength: 0.6;
      transform: translate(
        calc(var(--mx, 0px) * var(--logo-s-strength)),
        calc(var(--my, 0px) * var(--logo-s-strength))
      );
      transition: transform 0.6s ease-out;
      will-change: transform;
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

        @include Media("<", 1750px) {
          font-size: $font-size-heading-m !important;
        }
        @include Media("<", 1370px) {
          font-size: $font-size-heading-s !important;
        }
        @include Media("<", 900px) {
          font-size: $font-size-title-m !important;
        }
      }

      p {
        font-size: $font-size-small;
        opacity: 0.75;

        @include Media("<", 900px) {
          font-size: $font-size-small-m;
          width: 100px;
          margin-bottom: 2.5px;
        }
      }
    }

    .arrow {
      @include FlexCenter(row);
      height: 30px;
      cursor: pointer;
      margin-left: 10px;

      @include Media("<", 900px) {
        scale: 0.5;
        transform: translate(-40px, -10px);
      }

      .line {
        width: 30px;
        height: 5px;
        background: $white;
        border-radius: 5px;
        transition: 0.4s cubic-bezier(0.45, -0.29, 0.46, 1.27);

        @include Media("<", 900px) {
          transition: 0.7s cubic-bezier(0.45, -0.29, 0.46, 1.27);
        }
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

  @include Media("<", 1750px) {
    margin: 150px 0px 200px 20%;
  }

  @include Media("<", 1750px) {
    margin: 150px 0px 50px 20%;
  }

  color: $white;
  font-family: "Inter", sans-serif;

  h2 {
    @include Media("<", 2080px) {
      font-size: $font-size-big-m !important;
    }
    @include Media("<", 1750px) {
      font-size: $font-size-big-s !important;
      font-weight: 700 !important;
    }
    @include Media("<", 1350px) {
      font-size: $font-size-big-xs !important;
      font-weight: 700 !important;
    }
    @include Media("<", 1070px) {
      font-size: $font-size-big-heading !important;
    }
  }

  h4 {
    @include Media("<", 1350px) {
      font-size: $font-size-subheading-m !important;
    }
    @include Media("<", 1070px) {
      font-size: $font-size-subheading-s !important;
    }
  }

  p {
    @include Media("<", 2080px) {
      font-size: $font-size-body-m !important;
    }
    @include Media("<", 1300px) {
      font-size: $font-size-body-s !important;
    }
  }

  .vid {
    @include Media("<", 2080px) {
      &::before,
      &::after {
        font-size: $font-size-small-m !important;
      }
    }
  }

  .triple-box-container {
    .box {
      @include Media("<", 1070px) {
        width: 35px;
        height: 35px;
      }

      @include Media("<", 1000px) {
        display: none;
      }
    }
  }

  &.info {
    .heading {
      h2 {
        font-size: $font-size-big;
        font-weight: 900;
        width: 66%;
        transform: translateY(35px);
        position: relative;
        z-index: 1;

        @include Media("<", 1000px) {
          transform: translateY(20px);
          width: 100%;
        }
      }
    }

    .content-container {
      display: flex;
      justify-content: space-between;
      width: 100%;
      // border: 1px dashed red;

      @include Media("<", 1000px) {
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
      }

      .text-content {
        width: 33%;
        margin-top: 200px;

        @include Media("<", 1000px) {
          width: 100%;
          margin-top: 0px;
          transform: translateY(-100px);
        }

        animation: text-margin ease forwards;
        animation-timeline: view();
        animation-range: entry 10% cover 150%;

        @include Media("<", 1750px) {
          animation-name: text-margin-m !important;
          margin-top: 100px;
        }

        @include Media("<", 1350px) {
          animation-name: text-margin-m2 !important;
          margin-top: 50px;
        }

        @include Media("<", 1000px) {
          animation-name: none !important;
          margin-top: 0px;
        }

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

        @include Media("<", 1000px) {
          width: 100%;
        }

        .vid {
          width: 100%;
          aspect-ratio: 16/8;
          // overflow: hidden;
          cursor: pointer;

          &::after {
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
            aspect-ratio: 16/8;
            object-fit: cover;
            filter: brightness(70%);
          }

          video {
            width: 100%;
            height: 100%;
            aspect-ratio: 16/8;
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

      @include Media("<", 1000px) {
        flex-direction: column-reverse;
      }
    }

    .heading {
      width: 66%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      @include Media("<", 1000px) {
        width: 100%;
        height: 150px;
      }

      h2 {
        font-size: $font-size-big;
        font-weight: 900;
        text-align: right;
        transform: translateY(-105px);
        position: relative;
        z-index: 1;

        @include Media("<", 1000px) {
          text-align: right;
          transform: translateY(-75px);
        }
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

      @include Media("<", 1750px) {
        animation-name: text-margin1-m !important;
        margin-top: 10px;
      }

      @include Media("<", 1000px) {
        width: 100%;
        animation-name: none !important;
        margin-top: 0px;
      }

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

      @include Media("<", 1100px) {
        margin: 0px;
        transform: translateY(-25px);
      }
    }

    h2 {
      font-size: $font-size-big;
      font-weight: 900;
      width: 100%;
      text-align: right;
      position: relative;
      z-index: 1;

      @include Media("<", 1000px) {
        text-align: left;
        width: 70%;
        transform: translateY(15px);
      }
    }

    .video-content {
      width: 66.666%;

      @include Media("<", 1370px) {
        margin-bottom: 50px;
      }
      @include Media("<", 1100px) {
        margin-bottom: 100px;
      }

      @include Media("<", 1000px) {
        margin-bottom: 0px;
        width: 100%;
      }
    }

    .text-content {
      width: 33%;
      margin-top: 0px;
      text-align: right;

      animation: text-margin2 ease forwards;
      animation-timeline: view();
      animation-range: entry 10% cover 150%;

      @include Media("<", 1750px) {
        animation-name: text-margin3 !important;
      }

      @include Media("<", 1000px) {
        animation: none !important;
        width: 100%;
      }

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

      @include Media("<", 1000px) {
        margin-top: 25px;
      }

      &::after {
        content: "Penspinning meeting - Warszawa 28.02.2016";
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

      @include Media("<", 1000px) {
        flex-direction: column-reverse;
      }
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

@keyframes text-margin-m {
  0% {
    margin-top: 100px;
  }
  100% {
    margin-top: 200px;
  }
}

@keyframes text-margin-m2 {
  0% {
    margin-top: 50px;
  }
  100% {
    margin-top: 125px;
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

@keyframes text-margin1-m {
  0% {
    margin-top: 10px;
  }
  100% {
    margin-top: 100px;
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
@keyframes text-margin3 {
  0% {
    margin-top: 0px;
  }
  100% {
    margin-top: 100px;
  }
}
</style>
