<script setup>
const props = defineProps({
  title: String,
  date: String,
  topic: String,
  context: String,
});
</script>

<template>
  <div class="event-card">
    <div class="top-text">
      <p>{{ context }}</p>
      <p>{{ date }}</p>
    </div>
    <div class="middle-text">
      <h2>{{ title }}</h2>
    </div>
    <div class="bottom-text">
      <p>Zobacz więcej &#8599;</p>
      <p>{{ topic }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../../styles/base.scss" as *;

.event-card {
  width: 100%;
  margin: 150px 0px 0px 0px;
  cursor: pointer;

  &:nth-of-type(2n) {
    text-align: right;

    p:first-of-type {
      margin-left: 33.3%;
    }
  }

  * {
    color: $white;
    transition: 0.25s;
  }

  &:hover {
    * {
      color: $green;
    }
  }

  .top-text,
  .bottom-text {
    width: 100%;
    // border: 1px dashed red;
    display: flex;

    p {
      width: 33.4%;
      font-size: $font-size-body;

      @include Media("<", 1750px) {
        font-size: $font-size-body-m;
      }
    }
  }

  .middle-text {
    width: 100%;
    // border: 1px dashed red;
    margin: 50px 0px;

    @include Media("<", 1750px) {
      margin: 35px 0px;
    }

    h2 {
      font-size: $font-size-heading;
      margin-bottom: 5px;

      @include Media("<", 1750px) {
        font-size: $font-size-heading-m;
      }
    }

    p {
      font-size: $font-size-body;
      width: 100%;
      margin: 0 !important;

      @include Media("<", 1750px) {
        font-size: $font-size-body-m;
      }
    }
  }
}
</style>
