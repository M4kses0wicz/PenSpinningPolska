<script setup></script>

<template>
  <nav>
    <div class="navitem">
      <dt></dt>
      <dd></dd>
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
    width: 20%;

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
