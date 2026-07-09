<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";

import { useCursor } from "../../composables/useCursor.js";
const { grow, growS, reset } = useCursor();

const router = useRouter();
const scrollingDown = ref(false);
let lastScrollY = 0;

function handleScroll() {
  const currentY = window.scrollY;
  scrollingDown.value = currentY > lastScrollY;
  lastScrollY = currentY;
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <nav :class="{ 'scrolled-down': scrollingDown }">
    <div class="wrapper">
      <div class="navitem">
        <p @click="router.push('/')" @mouseover="grow" @mouseleave="reset">
          <strong class="s">P</strong>ortal <strong class="s">P</strong>olskich
          <strong class="s">P</strong>enspinnerów
        </p>
      </div>
      <div class="navitem">
        <dt></dt>
        <dd></dd>
      </div>
      <div class="navitem">
        <dt
          @click="router.push('/Historia')"
          @mouseover="grow"
          @mouseleave="reset"
        >
          <strong class="l">H</strong>istoria
        </dt>
        <dd>Poznaj historię penspinningu sięgającą roku 2005</dd>
      </div>
      <div class="navitem">
        <dt
          @click="router.push('/Wydarzenia')"
          @mouseover="grow"
          @mouseleave="reset"
        >
          <strong class="l">W</strong>ydarzenia
        </dt>
        <dd>Bądź na bierząco z nadchodzącymi wydarzeniami</dd>
      </div>
      <div class="navitem">
        <dt
          @click="router.push('/Artykuly')"
          @mouseover="grow"
          @mouseleave="reset"
        >
          <strong class="l">A</strong>rtykuły
        </dt>
        <dd>Dowiedz się więcej na temat pen spinningu</dd>
      </div>
    </div>

    <div class="bottom-content-wrapper">
      <div class="socials">
        <a
          href="https://www.facebook.com/groups/penspinningpl"
          target="_blank"
          title="Nasza grupa na Facebooku"
        >
          <i
            class="fa-brands fa-facebook"
            @mouseover="grow"
            @mouseleave="reset"
          ></i>
        </a>
        <a
          href="https://discord.gg/MCXEnkh"
          target="_blank"
          title="Dołącz do naszego Discorda"
        >
          <i
            class="fa-brands fa-discord"
            @mouseover="grow"
            @mouseleave="reset"
          ></i>
        </a>
        <a
          href="https://www.youtube.com/channel/UCX5b5jV6V5Q5Q5Q5Q5Q5Q5Q"
          target="_blank"
          title="Zobacz nasz kanał na YouTube"
        >
          <i
            class="fa-brands fa-youtube"
            @mouseover="grow"
            @mouseleave="reset"
          ></i>
        </a>
      </div>
      <div class="copy">
        <p>
          Strona stworzona przez: <br />
          <a
            href="https://klemensowicz.pl"
            target="_blank"
            title="Developer"
            @mouseover="growS"
            @mouseleave="reset"
            >Klemensowicz - M4k</a
          >
        </p>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@use "../../styles/base.scss" as *;

* {
  color: $white;
  font-family: "Inter", sans-serif;
}

dt {
  @include Media("<", 1650px) {
    font-size: $font-size-subheading-m !important;
  }
  @include Media("<", 1300px) {
    font-size: $font-size-subheading-s !important;
  }
  @include Media("<", 900px) {
    font-size: $font-size-title-m !important;
  }
}

dd {
  @include Media("<", 1650px) {
    font-size: $font-size-body-m !important;
    width: 75% !important;
  }
  @include Media("<", 1300px) {
    font-size: $font-size-body-s !important;
    width: 85% !important;
  }
  @include Media("<", 1000px) {
    font-size: $font-size-small-m !important;
  }
}

.navitem p {
  @include Media("<", 1650px) {
    font-size: $font-size-subheading-m !important;
  }
  @include Media("<", 1300px) {
    font-size: $font-size-subheading-s !important;
  }
  @include Media("<", 900px) {
    font-size: $font-size-title-m !important;
  }
}

.socials {
  i {
    @include Media("<", 1650px) {
      font-size: $font-size-title-m !important;
    }
    @include Media("<", 1300px) {
      font-size: $font-size-title-s !important;
    }
  }

  @include Media("<", 1650px) {
    gap: 30px !important;
  }

  @include Media("<", 1300px) {
    gap: 15px !important;
  }
}

nav {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100svh;
  // mix-blend-mode: difference;
  pointer-events: none;

  .wrapper {
    display: flex;
    justify-content: space-evenly;
    pointer-events: all;

    .navitem {
      margin-top: 25px;
      width: 20%;

      p {
        font-size: $font-size-subheading;
        max-width: 300px;
        margin-left: 20px;
        cursor: pointer;

        strong {
          font-weight: 900;
        }
      }

      dt {
        font-size: $font-size-subheading;
        font-weight: bold;
        cursor: pointer;
        width: max-content;
      }

      dd {
        font-size: $font-size-body;
        max-width: 300px;
        opacity: 0.75;
        transform: translateY(0px);
        transition:
          opacity 0.5s ease,
          transform 0.4s ease;
        cursor: default;
      }
    }
  }

  .bottom-content-wrapper {
    display: flex;
    justify-content: space-between;
    pointer-events: none;
    padding: 20px;

    .socials {
      display: flex;
      flex-direction: column;
      gap: 50px;
      font-size: $font-size-title;
      pointer-events: all;

      i {
        transition: 0.25s ease;
        // filter: drop-shadow(0 0 0px $black);
      }

      i:hover {
        // color: $green;
        // filter: drop-shadow(0 0 5px $black);
        scale: 1.1;
      }
    }

    .copy {
      font-size: $font-size-small;

      @include Media("<", 1750px) {
        font-size: $font-size-small-m;
      }
      @include Media("<", 900px) {
        font-size: $font-size-small-s;
      }

      opacity: 0.5;
      text-align: right;
      align-self: flex-end;
      pointer-events: all;

      a {
        font-size: calc($font-size-small * 0.9);

        @include Media("<", 1750px) {
          font-size: calc($font-size-small-m * 0.9);
        }

        @include Media("<", 900px) {
          font-size: calc($font-size-small-s * 0.9);
        }
      }

      a:hover {
        text-decoration: none;
      }
    }
  }
}

nav.scrolled-down {
  .wrapper .navitem dd {
    opacity: 0;
  }
}
</style>
