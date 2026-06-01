import { ref, onMounted } from "vue";

const mouseX = ref(0);
const mouseY = ref(0);
const cursorX = ref(0);
const cursorY = ref(0);
const cursorScale = ref(1);
const cursorType = ref("default");

if (typeof window !== "undefined") {
  window.addEventListener("mousemove", (e) => {
    mouseX.value = e.clientX;
    mouseY.value = e.clientY;
  });

  function animate() {
    cursorX.value += (mouseX.value - cursorX.value) * 0.2;
    cursorY.value += (mouseY.value - cursorY.value) * 0.2;
    requestAnimationFrame(animate);
  }
  animate();
}

export function useCursor() {
  function grow() {
    cursorScale.value = 2.5;
  }
  function growS() {
    cursorScale.value = 1.75;
  }
  function reset() {
    cursorScale.value = 1;
    cursorType.value = "default";
  }
  function video() {
    cursorScale.value = 2;
    cursorType.value = "arrow";
  }

  return {
    cursorX,
    cursorY,
    cursorScale,
    cursorType,
    grow,
    growS,
    reset,
    video,
  };
}
