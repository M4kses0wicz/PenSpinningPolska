<script setup>
import { ref, onMounted, onUnmounted } from "vue";

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
        <p>
          <strong>P</strong>ortal <strong>P</strong>olskich
          <strong>P</strong>enspinnerów
        </p>
      </div>
      <div class="navitem">
        <dt></dt>
        <dd></dd>
      </div>
      <div class="navitem">
        <dt>Historia</dt>
        <dd>Poznaj historię penspinningu sięgającą roku 2005</dd>
      </div>
      <div class="navitem">
        <dt>Wydarzenia</dt>
        <dd>Bądź na bierząco z nadchodzącymi wydarzeniami</dd>
      </div>
      <div class="navitem">
        <dt>Artykuły</dt>
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
          <i class="fa-brands fa-facebook"></i>
        </a>

        <a
          href="https://discord.gg/MCXEnkh"
          target="_blank"
          title="Dołącz do naszego Discorda"
        >
          <i class="fa-brands fa-discord"></i>
        </a>

        <a
          href="https://www.youtube.com/channel/UCX5b5jV6V5Q5Q5Q5Q5Q5Q5Q"
          target="_blank"
          title="Zobacz nasz kanał na YouTube"
        >
          <i class="fa-brands fa-youtube"></i>
        </a>
      </div>
      <div class="copy">
        <p>
          Strona stworzona przez: <br />
          <a href="https://klemensowicz.pl" target="_blank" title="Developer"
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

nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100svh;
  mix-blend-mode: difference;

  .wrapper {
    display: flex;
    justify-content: space-evenly;

    .navitem {
      margin-top: 25px;
      width: 20%;

      p {
        font-size: $font-size-subheading;
        max-width: 300px;
        margin-left: 20px;
        strong {
          font-weight: 900;
        }
      }

      dt {
        font-size: $font-size-subheading;
        font-weight: bold;
        cursor: pointer;
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
    padding: 20px;

    .socials {
      display: flex;
      flex-direction: column;
      gap: 50px;
      font-size: $font-size-title;

      i {
        transition: 0.25s ease;
      }

      i:hover {
        color: $green;
      }
    }

    .copy {
      font-size: $font-size-small;
      opacity: 0.5;
      text-align: right;
      align-self: flex-end;

      a {
        font-size: calc($font-size-small * 0.9);
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
    // transform: translateY(-8px);
  }
}
</style>
