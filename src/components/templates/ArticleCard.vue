<script setup>
const props = defineProps({
  title: String,
  description: String,
  author: String,
  date: String,
});
</script>

<template>
  <div class="article-card"></div>
</template>

<style scoped lang="scss">
@use "../../styles/base.scss" as *;
</style>
