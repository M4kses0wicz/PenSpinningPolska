<script setup></script>

<template>
  <div class="container">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>
</template>

<style scoped lang="scss">
@use "../../styles/base.scss" as *;

.container {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  .line {
    width: 1px;
    opacity: 0.15;
    height: 100%;
    background-color: $white;
  }
}
</style>
