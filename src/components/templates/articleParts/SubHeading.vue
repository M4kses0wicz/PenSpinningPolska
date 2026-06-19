<script setup>
const props = defineProps({
  text: String,
  tag: {
    type: String,
    default: "h2",
  },
  margin: {
    type: String,
    default: "margin",
  },
});
</script>

<template>
  <component :is="tag" :class="margin">{{ text }}</component>
</template>

<style lang="scss" scoped>
@use "../../../styles/base.scss" as *;

h2,
h3 {
  width: 60%;
  font-family: "inter", sans-serif;
  color: $white;

  &.margin {
    margin-left: 20%;
  }
}

h2 {
  font-size: $font-size-heading-m;
  margin: 50px 0px 25px 0px;
}

h3 {
  font-size: $font-size-title;
  margin: 20px 0px 10px 0px;
}
</style>
