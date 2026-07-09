<script setup>
const props = defineProps({
  title: String,
  topic: String,
  context: String,
  src: String,
  alt: String,
});
</script>

<template>
  <div class="container">
    <div class="wrapper">
      <div class="top-text">
        <p>
          <strong>{{ context }}</strong>
        </p>
        <p>{{ topic }}</p>
      </div>
      <div class="lines">
        <div class="w"></div>
        <div class="g"></div>
      </div>
      <h1>{{ title }}</h1>
    </div>
    <img :src="src" :alt="alt" />
  </div>
</template>

<style lang="scss" scoped>
@use "../../../styles/base.scss" as *;

* {
  color: $white;
  font-family: "inter", sans-serif;
}

.container {
  width: 60%;
  margin: 10% 0px 50px 20%;
  display: flex;
  // border: 1px dashed red;

  @include Media("<", 810px) {
    width: 90%;
    margin: 10% 0px 50px 5%;
  }

  img {
    position: absolute;
    top: 0%;
    width: 40%;
    z-index: -1;
    margin-left: 20%;
    opacity: 30%;

    @include Media("<", 810px) {
      width: 60%;
      margin-left: 30%;
    }
  }
}

.wrapper {
  width: 66.666%;

  @include Media("<", 810px) {
    width: 100%;
  }

  h1 {
    font-size: $font-size-big-heading;
    margin-top: 10px;

    @include Media("<", 1750px) {
      font-size: $font-size-big-heading-m;
    }

    @include Media("<", 1200px) {
      font-size: $font-size-big-heading-s;
    }

    @include Media("<", 810px) {
      font-size: $font-size-heading-m;
    }
  }

  .top-text {
    display: flex;

    p {
      width: 50%;
      font-size: $font-size-small;
      font-weight: 700;

      @include Media("<", 1200px) {
        font-size: $font-size-small-m;
      }

      @include Media("<", 810px) {
        width: 33.333%;
      }
    }
  }

  .lines {
    width: 100%;
    display: flex;

    div {
      width: 50%;
      height: 3px;

      @include Media("<", 810px) {
        width: 33.333%;
      }

      &.g {
        background: $green;
      }

      &.w {
        background: $white;
      }
    }
  }
}

@keyframes img-margin {
  to {
    top: 10%;
  }
}
</style>
