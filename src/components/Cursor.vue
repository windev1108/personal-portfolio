<template>
  <div
      ref="cursorRef"
      className="w-10 h-10 bg-primary bg-opacity-60 rounded-full fixed z-[1000] -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden transition duration-0"
    ></div>

</template>

<script setup lang="ts">
import { ref , onMounted , onUnmounted } from 'vue'
  const isFirstMove = ref<boolean>(true);
  const cursorRef = ref<any>(null);

const realMouse = ref({
  x: 0,
  y: 0,
});
const displayedMouse = ref({
  x: 0,
  y: 0,
});

const handleCursor = (e : any) => {
  if (cursorRef.value) {
    if (isFirstMove.value) {
      cursorRef.value.style.display = "block";
      displayedMouse.value.x = e.clientX;
      displayedMouse.value.y = e.clientY;
      isFirstMove.value = false;
    }

    realMouse.value.x = e.clientX;
    realMouse.value.y = e.clientY;
  }
}

onMounted(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

window.addEventListener("mousemove", handleCursor );

const updateMouse = () => {
  requestAnimationFrame(updateMouse);

  displayedMouse.value.x +=
    (realMouse.value.x - displayedMouse.value.x) * 0.1;
  displayedMouse.value.y +=
    (realMouse.value.y - displayedMouse.value.y) * 0.1;

  if (cursorRef.value) {
    cursorRef.value.style.left = `${displayedMouse.value.x}px`;
    cursorRef.value.style.top = `${displayedMouse.value.y}px`;
  }
};

updateMouse();
})

onUnmounted(() => {
    window.removeEventListener("resize", handleCursor)
})

</script>