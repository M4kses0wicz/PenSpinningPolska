<script setup></script>

<template>
  <footer>
    <div class="lines">
      <div class="line one"></div>
      <div class="line two"></div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use "../../styles/base.scss" as *;

footer {
  width: 100%;

  .lines {
    display: flex;

    .line {
      height: 17.5px;

      &.one {
        width: 80%;
        background: $green;
      }

      &.two {
        width: 20%;
        background: $white;
      }
    }
  }
}
</style>
