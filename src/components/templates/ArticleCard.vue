<script setup>
const props = defineProps({
  title: String,
  description: String,
});
</script>

<template>
  <div class="article-card"></div>
</template>

<style scoped lang="scss">
@use "../../styles/base.scss" as *;
</style>
