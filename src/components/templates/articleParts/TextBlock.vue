<script setup>
defineProps({
  align: {
    type: String,
    default: "left",
  },
  src: {
    type: String,
    default: null,
  },
  alt: {
    type: String,
    default: "",
  },
  fit: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="block" :class="align">
    <img v-if="src" :src="src" :alt="alt" class="image" :id="fit" />
    <div class="text">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../../styles/base.scss" as *;

.block {
  width: 60%;
  margin: 50px auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: start;
  position: relative;
}

#c {
  object-fit: contain !important;
}

.text {
  font-family: "inter", sans-serif;
  color: $white;
  font-size: $font-size-body;
  font-weight: 300;

  p {
    margin: 0 0 10px 0;
  }

  ul,
  ol {
    margin: 0 0 10px 0;
    padding-left: 1.2em;
  }
}

.image {
  width: 70%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 1px;
  margin: 0 15%;
  // filter: contrast(150%) brightness(95%);

  position: absolute;
  top: 50%;
  transform: translateY(calc(-50% - 20px));

  animation: img-anim ease forwards;
  animation-timeline: view();
  animation-range: entry 10% cover 150%;
}

.block.left {
  grid-template-areas: "text text image";

  .text {
    grid-area: text;
    text-align: left;
  }
  .image {
    grid-area: image;
  }
}

.block.right {
  grid-template-areas: "image text text";

  .text {
    grid-area: text;
  }
  .image {
    grid-area: image;
  }
}

@keyframes img-anim {
  0% {
    transform: translateY(calc(-50% - 20px));
  }
  100% {
    transform: translateY(calc(-50% + 25px));
  }
}
</style>
