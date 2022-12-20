
<template>
  <div 
  :class="[ theme === 'dark' ? 'after:bg-[#111]' : 'after:bg-[#fff]']"
  class="fixed top-0 left-0 right-0 bottom-0 z-[30] flex justify-center items-center  after:z-[10] after:bg-opacity-50  after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0">
    <div id="loader" ></div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps < {
    theme: string
} > ()
</script>

<style>
:root {
  --animation-duration: 0.8s;
  --circle-diameter: 50px;
  --circle-scale-percent: 0.2;
}

#loader {
  position: relative;
  z-index: 20;
  left: calc(var(--circle-diameter) * -1);
}

#loader:before,
#loader:after {
  content: " ";
  display: table-cell;
  width: var(--circle-diameter);
  height: var(--circle-diameter);
  border-radius: 50%;
  position: absolute;
  animation-duration: var(--animation-duration);
  animation-name: revolve;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  mix-blend-mode: darken;
}

#loader:before {
  background: rgb(77, 232, 244);
}

#loader:after {
  background: rgb(253, 62, 62);
  animation-delay: calc(var(--animation-duration) / -2);
}

@keyframes revolve {
  0% {
    left: 0;
  }
  25% {
    transform: scale(calc(1 + var(--circle-scale-percent)));
  }
  50% {
    left: var(--circle-diameter);
  }
  75% {
    transform: scale(calc(1 - var(--circle-scale-percent)));
  }
  100% {
    left: 0;
  }
}
</style>