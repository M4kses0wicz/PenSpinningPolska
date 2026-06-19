<script setup>
const props = defineProps({
  text: String,
  tag: {
    type: String,
    default: "h2",
  },
  align: {
    type: String,
    default: "left",
  },
});
</script>

<template>
  <component :is="tag" :class="align">{{ text }}</component>
</template>

<style lang="scss" scoped>
@use "../../../styles/base.scss" as *;

h2,
h3 {
  width: 60%;
  font-family: "inter", sans-serif;
  color: $white;

  &.left {
    margin-left: 20%;
    text-align: left;
  }

  &.right {
    margin-right: 20%;
    text-align: right;
  }
}

h2 {
  font-size: $font-size-subheading;
  margin: 50px 0px 25px 0px;
}

h3 {
  font-size: $font-size-title;
  margin: 20px 0px 10px 0px;
}
</style>
