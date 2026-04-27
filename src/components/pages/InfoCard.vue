<script setup></script>

<template>
  <main>
    <div class="graphic">
      <div class="box g"></div>
      <div class="box"></div>
      <div class="box"></div>
    </div>
    <div class="container c-1">
      <p class="bigger">Chociaż tutaj jest jeszcze cisza...</p>
      <p class="smaller">To za kulisami dzieje się więcej, niż myślisz.</p>
    </div>
    <div class="date">01.06.2026</div>
    <div class="container c-2">
      <p class="bigger">Jeszcze chwila cierpliwości...</p>
      <p class="smaller">Składamy coś, czego nie scrolluje się obojętnie.</p>
    </div>
    <div class="graphic g-2">
      <div class="box"></div>
      <div class="box"></div>
      <div class="box g"></div>
    </div>
  </main>
  <div class="wrapper">
    <img
      src="../../assets/ppp-raczka-white.png"
      alt="logo portalu polskich pen spinnerow"
    />
  </div>
</template>

<style scoped lang="scss">
@use "../../styles/base.scss" as *;

* {
  color: $white;
  font-family: "inter", sans-serif;
  pointer-events: none;
}

main {
  height: 100vh;
  width: 100vw;
  padding: 5%;
  @include FlexCenter;

  .container {
    display: flex;
    flex-direction: column;
    width: 100%;

    &.c-2 {
      align-items: flex-end;
      text-align: right;
    }
  }

  p.bigger {
    font-size: 100px;
    font-weight: 900;

    @include Media("<", 1880px) {
      font-size: 75px;
    }

    @include Media("<", 1400px) {
      font-size: 50px;
    }

    @include Media("<", 1000px) {
      font-size: 40px;
    }

    @include Media("<", 750px) {
      font-size: 30px;
    }
  }

  p.smaller {
    font-size: 25px;
    opacity: 75%;
    font-weight: 700;

    @include Media("<", 1400px) {
      font-size: 20px;
    }

    @include Media("<", 1000px) {
      font-size: 18px;
    }

    @include Media("<", 750px) {
      font-size: 13px;
    }
  }

  .date {
    font-size: 20px;
    font-weight: 900;
    letter-spacing: 10px;
    margin: 100px 0px;

    @include Media("<", 750px) {
      font-size: 17px;
    }
  }
}
.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  img {
    height: 125%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    opacity: 10%;
    z-index: -1;
  }
}

.graphic {
  width: 100%;
  display: flex;
  align-items: flex-end;
  margin-bottom: 75px;

  &.g-2 {
    align-items: flex-start;
    margin-top: 75px;
    margin-bottom: 0px;
    justify-content: flex-end;
  }

  .box {
    width: 55px;
    height: 55px;

    @include Media("<", 750px) {
      width: 25px;
      height: 25px;
    }

    background: $white;
    margin-right: 20px;

    &.g {
      width: 80px;
      height: 80px;

      @include Media("<", 750px) {
        width: 35px;
        height: 35px;
      }

      background: $green;
    }
  }
}
</style>
