<script setup></script>

<template>
  <div class="container">
    <div class="wrapper">
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../../styles/base.scss" as *;

.container {
  @include FlexCenter(row);
  height: 100vh;
  width: 100vw;

  .wrapper {
    @include FlexCenter(row);
    gap: 100px;

    @include Media("<", 1080px) {
      gap: 25px;
    }

    @include Media("<", 500px) {
      gap: 10px;
    }
  }

  .box {
    height: 50px;
    width: 50px;

    @include Media("<", 1080px) {
      height: 25px;
      width: 25px;
    }
    @include Media("<", 500px) {
      height: 15px;
      width: 15px;
    }

    background-color: $white;
    animation: loadingAnim 3s ease-in-out infinite;

    @for $i from 1 through 5 {
      &:nth-child(#{$i}) {
        animation-delay: ($i - 1) * 2.5s;
      }
    }
  }
}

@keyframes loadingAnim {
  0%,
  100% {
    background: $white;
  }
  10% {
    // height: 100px;
    background: $green;
    transform: translateY(50px);
  }
  25% {
    background: $white;
  }
}
</style>
