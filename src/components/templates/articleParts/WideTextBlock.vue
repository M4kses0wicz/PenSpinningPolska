<script setup></script>

<template>
  <p>
    <slot />
  </p>
</template>

<style lang="scss" scoped>
@use "../../../styles/base.scss" as *;

p {
  margin: 10px 0px 10px 20%;
  width: 60%;
  font-family: "inter", sans-serif;
  color: $white;
  font-size: $font-size-body;
}
</style>
