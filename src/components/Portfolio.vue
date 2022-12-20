<template>
<div class="fixed top-0 left-0 right-0 bottom-0 z-[20]">
    <div
    :class="[  isFadeIn  ? 'translate-y-0 opacity-100' : 'translate-y-[10%] opacity-0' ]" class="transition-all duration-1000 ease-in-out scrollbar-track-[#333] scrollbar-thumb-[#666] scrollbar-thumb-rounded-lg scrollbar-thin overflow-x-hidden h-screen overflow-y-scroll">
        <div class="relative z-[100] flex justify-center py-[80px] space-x-4">
            <div class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <span :class="[ theme === 'dark' ? 'text-[hsla(0,0%,100%,.07)]' : 'text-[rgba(30,37,48,.07)]']" class="lg:text-[110px] text-6xl uppercase font-extrabold text-[hsla(0,0%,100%,.07)] transition-all duration-1000">Works</span>
            </div>
            <h1
            :class="[ theme === 'dark' ? 'text-[#fff]' : 'text-[#666]']" 
            class="lg:text-[60px] text-4xl font-extrabold  uppercase transition-all duration-1000">My</h1>
            <h1 class="lg:text-[60px] text-4xl font-extrabold text-primary uppercase">Portfolio</h1>
        </div>
        <div 
        class="gap-4 lg:px-36 px-4">
            <div
            v-for="project in projects" v-bind:key="project.name" 
            id="project"
            class="lg:flex block lg:space-y-0 space-y-6 gap-12 h-screen lg:py-20 py-10 opacity-0 transition-all duration-[2000ms] delay-200 ease-in-out"
            :class="[ project.id % 2  === 0 ?'flex-row-reverse translate-x-[30%]' : 'translate-x-[-30%] ' ]"
            >
                <div class="lg:w-[50%] w-full space-y-4">
                    <div>
                        <h1 
                        :class="[ theme === 'dark' ? 'text-[#fff]' : 'text-[#666]']" 
                        class="text-4xl transition-all duration-1000">{{project.name}}</h1>
                    </div>
                    <div>
                        <span 
                        :class="[ theme === 'dark' ? 'text-[#fff]' : 'text-[#666]']" 
                        class="transition-all duration-1000">{{project.desc}}</span>
                    </div>
                    <div class="flex space-x-2">
                        <a class="group relative" v-bind:href="lang.src" target="_blank" v-bind:key="lang.name" v-for="lang in handleFilterLanguage(project.languages)">
                            <img class="object-cover cursor-pointer w-10 h-10 hover:scale-125 transition-all duration-300 ease-in-out" v-bind:src="lang.img" v-bind:alt="lang.name" />
                            <div class="group-hover:scale-100 group-hover:opacity-100  scale-0 opacity-0 transition-all duration-500 ease-in-out absolute top-[-100%]  px-2 py-1 rounded-lg shadow-md bg-[#333] whitespace-nowrap translate-x-[-20%]">
                                <span class="text-[#fff]">{{lang.name}}</span>
                            </div>
                        </a>
                    </div>

                    <div class="flex space-x-4">
                        <a v-bind:href="project.preview" target="_blank" class="flex items-center space-x-2 bg-[#1876d2] h-10 text-white  px-4 rounded-md">
                            <font-awesome-icon icon="fa-solid fa-desktop" />
                            <span>Live Demo</span>
                        </a>

                        <!-- <a v-bind:href="project.github" target="_blank" class="flex items-center space-x-2 bg-[#1b222b] h-10 text-white  px-4 rounded-md">
                            <font-awesome-icon  icon="fa-brands fa-github" />
                            <span>View Github</span>
                        </a> -->
                    </div>
                </div>
                <div class="lg:w-[50%] w-full rounded-lg">
                    <swiper 
                    :effect="'cube'"
                     :grabCursor="true"
                    :cubeEffect="{
                       shadow: true,
                       slideShadows: true,
                       shadowOffset: 20,
                       shadowScale: 0.94,
                    }" 
                    :pagination="true"
                    :navigation="true"
                     :modules="modules" 
                     :class="['flex overflow-hidden' , project.platform === 'web' ? 'w-full lg:h-[20rem] h-[15rem]' : 'lg:w-[15rem] w-[10rem] lg:h-[28rem] h-[20rem]' ]"
                     >
                        <swiper-slide
                        class="relative rounded-lg overflow-hidden"
                        v-for="img in project.imgs" v-bind:key="img">
                           <img class="absolute top-0 left-0 right-0 bottom-0 z-10 object-fill h-full w-full" v-bind:src="img" alt=""/>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script setup lang="ts" >
import {
    onMounted,
    onUnmounted,
    ref,
} from 'vue';
// Import Swiper Vue.js components
import {
    Swiper,
    SwiperSlide
} from "swiper/vue";

// import required modules
import {
    EffectCube,
    Pagination,
    Navigation
} from "swiper";
import dataJson from '../../data/user.json'

const modules = ref([EffectCube, Pagination , Navigation ])

const user : any = dataJson
const { projects } = user
const isFadeIn = ref(false)

const handleFilterLanguage = (langs : string[]) => {
    return langs.map((lang) => {
         return user.skills.find((skill : any) => skill.name === lang)
    })
}

let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.replace("translate-x-[-30%]" , "translate-x-0")
            entry.target.classList.replace("translate-x-[30%]" , "translate-x-[0px]")
            entry.target.classList.replace("opacity-0" , "opacity-100")
        }else{
            entry.target.classList.replace("translate-x-0" , "translate-x-[-30%]")
            entry.target.classList.replace("translate-x-[0px]" , "translate-x-[30%]")
            entry.target.classList.replace("opacity-100" , "opacity-0")

        }
      });
    });


onMounted(() => {
    setTimeout(() => {
        isFadeIn.value = true
    }, 200)
    const elements = document.querySelectorAll("#project")
    elements.forEach((element) => {
    observer.observe(element);
  })
})
onUnmounted(() => {
    isFadeIn.value = false
})

const props = defineProps < {
    theme: string
} > ()
</script>


<style>
.swiper-button-prev {
    transform: translateX(-190%);
    color: #FFb400
}

.swiper-button-next {
     transform: translateX(190%);
    color: #FFb400
}
.swiper-pagination{
    transform: translateY(150%);
}
.swiper-pagination-bullet {
    background-color: #FFb400 
}
</style>
