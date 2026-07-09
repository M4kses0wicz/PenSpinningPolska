<script setup>
const props = defineProps({
  author: String,
  align: {
    type: String,
    default: "left",
  },
});
</script>

<template>
  <div class="wrapper" :id="align">
    <div class="lines">
      <div class="w"></div>
      <div class="g"></div>
    </div>
    <div class="bottom-text">
      <p>
        <strong>Autor:</strong>
      </p>
      <p>{{ author }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../../styles/base.scss" as *;

* {
  color: $white;
  font-family: "inter", sans-serif;
}

.wrapper {
  margin: 5% 0px 50px 20%;
  width: 40%;
  //   border: 1px red dashed;

  @include Media("<", 810px) {
    width: 60%;
    margin: 5% 0px 50px 5%;
  }

  &#right {
    margin: 5% 0px 50px 40%;

    @include Media("<", 810px) {
      width: 60%;
      margin: 5% 0px 50px 35%;
    }
  }

  .bottom-text {
    display: flex;

    p {
      width: 50%;
      font-size: $font-size-small;
      font-weight: 700;
    }
  }

  .lines {
    width: 100%;
    display: flex;

    div {
      width: 50%;
      height: 3px;

      &.g {
        background: $green;
      }

      &.w {
        background: $white;
      }
    }
  }
}
</style>
