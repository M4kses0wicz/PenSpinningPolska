<script setup></script>

<template>
  <nav>
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
  </nav>
  <div class="socials"></div>
  <div class="copy">
    &copy; 2026 Portal Polskich Penspinnerów. Wszystkie prawa zastrzeżone.
  </div>
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
  justify-content: space-evenly;

  .navitem {
    margin-top: 25px;
    width: 20%;
    cursor: pointer;

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
    }
    dd {
      font-size: $font-size-body;
      opacity: 0.75;
      max-width: 300px;
    }
  }
}
</style>
