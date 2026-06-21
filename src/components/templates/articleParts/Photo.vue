<script setup>
const props = defineProps({
  src: {
    type: String,
    default: null,
  },
  alt: {
    type: String,
    default: null,
  },
  text: {
    type: String,
    default: "",
  },
  align: {
    type: String,
    default: "",
  },
  line: {
    type: String,
    default: "w",
  },
});
</script>

<template>
  <div class="wrapper" :id="align">
    <div class="top-text">
      <p>
        {{ text }}
      </p>
    </div>
    <div class="line">
      <div :class="line"></div>
    </div>
    <img :src="src" :alt="alt"></img>
  </div>
</template>

<style lang="scss" scoped>
@use "../../../styles/base.scss" as *;

* {
  color: $white;
  font-family: "inter", sans-serif;
}

.wrapper {
  width: 40%;
  margin-left: 20%;

  &#right {
    margin-left: 40%;

    p {
      width: 100%;
      text-align: right;
    }
  }
}

img {
  width: 100%;
  aspect-ratio: 16/9;
  margin-top: 10px;
}

p {
  font-size: $font-size-small;
}

.line {
  width: 100%;
  display: flex;

  div {
    width: 100%;
    height: 3px;

    &.g {
      background: $green;
    }

    &.w {
      background: $white;
    }
  }
}
</style>
