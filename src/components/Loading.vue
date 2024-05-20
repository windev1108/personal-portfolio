
<template>
  <div 
  :class="[ theme === 'dark' ? 'after:bg-[#111]' : 'after:bg-[#fff]']"
  class="fixed top-0 left-0 right-0 bottom-0 z-[30] flex justify-center items-center  after:z-[10] after:bg-opacity-50  after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0">
    <div class="loader" ></div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps < {
    theme: string
} > ()
</script>

<style>
.loader {
  width: 50px;
  aspect-ratio: 1;
  display: grid;
}
.loader::before,
.loader::after {    
  content:"";
  grid-area: 1/1;
  --c:no-repeat radial-gradient(farthest-side,#FFb400 92%,#0000);
  background: 
    var(--c) 50%  0, 
    var(--c) 50%  100%, 
    var(--c) 100% 50%, 
    var(--c) 0    50%;
  background-size: 12px 12px;
  animation: l12 1s infinite;
}
.loader::before {
  margin: 4px;
  filter: hue-rotate(45deg);
  background-size: 8px 8px;
  animation-timing-function: linear
}

@keyframes l12 { 
  100%{transform: rotate(.5turn)}
}
</style>