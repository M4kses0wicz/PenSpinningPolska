<script setup>
import { useCursor } from "../../composables/useCursor.js";
const { cursorX, cursorY, cursorScale, cursorType } = useCursor();
</script>

<template>
  <div class="container">
    <div
      class="border"
      :style="{
        left: cursorX + 'px',
        top: cursorY + 'px',
        transform: `translate(-50%, -50%) rotate(0deg)`,
      }"
    ></div>
    <div
      class="cursor"
      :class="{ arrow: cursorType === 'arrow' }"
      :style="{
        left: cursorX + 'px',
        top: cursorY + 'px',
        transform: `translate(-50%, -50%) scale(${cursorScale})`,
      }"
    ></div>
  </div>
</template>

<style scoped lang="scss">
@use "../../styles/base.scss" as *;

.container {
  pointer-events: none;

  &:has(.arrow) {
    .border {
      border-color: $white;
    }
  }

  @include Media("<", 810px) {
    display: none;
  }
}
.cursor {
  position: fixed;
  z-index: 101;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: $white;
  pointer-events: none;
  mix-blend-mode: difference;
  transition: transform 0.25s ease;

  &.arrow {
    clip-path: polygon(15% 0%, 100% 48%, 15% 100%);
  }
}

.border {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 101;
  height: 30px;
  width: 30px;
  padding: 20px;
  border: 3px dashed transparent;
  border-radius: 30px;
  pointer-events: none;
  mix-blend-mode: difference;
  animation: rotate 4s linear infinite;

  transition: border-color 0.2s ease;
}

@keyframes rotate {
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>
