<script setup lang="ts">
import { ref , onMounted } from 'vue';
import Loading from '../components/Loading.vue'
import Portfolio from '../components/Portfolio.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'
import Cursor from '../components/Cursor.vue'
import dataJson from '../../data/user.json'
import { env } from '../utils/const';

  const focused  = ref(0)
  const isLoading = ref<boolean>(true)
  const fadeOut = ref<boolean>(false)
  const isOpenAbout = ref<boolean>(false)
  const isOpenPortfolio = ref<boolean>(false)
  const isOpenContact = ref<boolean>(false)
  const theme = ref(localStorage.getItem("theme") || 'dark')
  const scrollY = ref(0)
  const user : any = dataJson



  onMounted(() => {
    fadeOut.value = true
    setTimeout(() => {
    isLoading.value = false
    fadeOut.value = false
    },1000)
  })


  const handleCloseAbout = () => {
    isOpenAbout.value = false
  } 

  const handleClosePortfolio = () => {
    isOpenPortfolio.value = false
  } 

  const handleCloseContact = () => {
    isOpenContact.value = false
  } 

  const handleToggleTheme = () => {
    if(theme.value === "dark"){
      theme.value = "light"
      localStorage.setItem("theme", "light") 
    }else{
      theme.value = "dark"
      localStorage.setItem("theme", "dark")
    }
  }
  
 const handleFocused = (focus : number ) => {
  focused.value = focus
  switch (focus) {
    case 0 : {
      isLoading.value = true
      isOpenPortfolio.value = false
      isOpenAbout.value = false
      isOpenContact.value = false
      setTimeout(() => {
        isLoading.value = false
        fadeOut.value = false
      },500)
      break
    }
    case 1 : {
      isLoading.value = true
      isOpenPortfolio.value = false
      isOpenContact.value = false
      setTimeout(() => {
        isLoading.value = false
      },500)
      isOpenAbout.value = true
      fadeOut.value = true
      break
    }
    case 2 : {
      isLoading.value = true
      isOpenAbout.value = false
      isOpenContact.value = false
      setTimeout(() => {
        isLoading.value = false
      },500)
      isOpenPortfolio.value = true
      fadeOut.value = true
      break
    }
    case 3 : {
      isLoading.value = true
      isOpenAbout.value = false
      isOpenPortfolio.value = false
      setTimeout(() => {
        isLoading.value = false
      },500)
      isOpenContact.value = true
      fadeOut.value = true
      break
    }
  } 
 }
</script>

<template>
  <div 
  class="relative h-screen w-screen overflow-hidden">
  <Portfolio v-if="isOpenPortfolio"  :theme="theme" @handleClose="handleClosePortfolio"/>
  <About v-if="isOpenAbout" :theme="theme" :fullScreen="focused === 1" @handleClose="handleCloseAbout" />
  <Contact v-if="isOpenContact" :theme="theme" @handleClose="handleCloseContact"  />
  <Loading :theme="theme" v-if="isLoading" />
  <Cursor />

      <div 
      class="absolute top-0 left-0 right-0 bottom-0 flex  z-[1]">
        <div class="w-full flex">
          <div 
          :class="[ theme === 'dark' ? 'translate-x-0 bg-[#111]' : 'translate-x-[-100%] bg-[#fff]']"
           class="transition-all duration-700 ease-in-out w-[50%]">
          </div>
          <div
          :class="[ theme === 'dark' ? 'translate-x-0 bg-[#111]' : 'translate-x-[100%] bg-[#fff]' ]"
          class="transition-all duration-700 ease-in-out w-[50%]">
          </div>
        </div>
      </div>
      <div
      :class="['relative transition-all duration-700 ease-in-out flex lg:after:block after:hidden  after:transition-all after:duration-700 after:ease-in-out after:z-[2] after:rotate-[80deg] after:bg-primary after:h-screen after:w-[100rem]', fadeOut  ? 'after:translate-x-[-100%] after:opacity-0' : 'after:translate-x-[-60%] after:opacity-100']"
       >
          <div 
          :class="[ fadeOut  ? 'top-[50%] opacity-0' : 'top-0 opacity-100']"
          class="fixed lg:mt-0 mt-10 lg:space-y-0 space-y-6 lg:flex block transition-all duration-700 ease-in-out top-0 left-0 right-0 bottom-0 items-center lg:space-x-28 z-10 w-full lg:px-12 px-5">
            <div class="lg:w-[30%] lg:h-[30rem]  w-full flex justify-center  overflow-hidden">
               <img class="lg:border-none border-[4px] border-[#333] shadow-md rounded-full object-cover lg:rounded-3xl lg:shadow-md  h-[15rem] lg:w-[20rem] w-[15rem]  lg:h-full" :src="`${env.AVATAR_URL}`" alt="">
            </div>
            <div class="lg:w-[50%] w-full lg:space-y-12 space-y-4"> 
              <div class="lg:space-y-4 space-y-2">
               <h1 class="font-bold lg:text-5xl text-3xl lg:text-left text-center text-primary delay-300">{{`- I'm ${user.firstName}`}}</h1>
               <h1 
               :class="[ theme === 'light'  ? 'text-[#666]' : 'text-white delay-300']"
               class="font-bold lg:pl-8 pl-0 lg:text-left text-center lg:text-5xl text-2xl">{{user.role}}</h1>
              </div>
              <div>
                 <span
               :class="['lg:text-base lg:text-left text-center text-sm delay-300', theme === 'light'  ? 'text-[#666]' : 'text-white']"
                >{{user.desc}}
             </span>
              </div>
              <div>
               <button 
               @click="isOpenAbout = true"
               class="group hover:after:translate-x-0 after:transition-all lg:left-0 left-[15%] after:duration-500 relative after:absolute overflow-hidden after:top-0 after:left-0 after:right-0 after:bottom-0 after:rounded-full after:z-[-1] after:translate-x-[100%] after:bg-primary  hover:after: flex space-x-2 justify-between items-center uppercase border-[1px] border-primary rounded-full h-[55px]">
                  <div class="pl-6">
                    <span 
                    :class="[ theme === 'light'  ? 'text-[#666] delay-300' : 'text-white delay-300']"
                    class="group-hover:text-[#fff] font-bold">More about me</span>
                  </div>
                  <div class="w-[55px] h-[55px] flex justify-center items-center bg-primary rounded-full">
                    <font-awesome-icon class="text-xl" icon="fa-solid fa-arrow-right" />           
                  </div>
              </button>
              </div>
            </div>
          </div>


            <div 
            :class="['fixed top-5 right-5 transition-all duration-700 ease-in-out', isLoading  ? 'lg:right-[-10%] lg:opacity-0' : 'opacity-100' , focused === 1 ? 'z-[101] opacity-100' : 'z-[100]']"
            >
              <button
              @click="handleToggleTheme"
              class="hover:bg-[#666] overflow-hidden w-[45px] h-[45px] flex justify-center items-center lg:bg-[#4b4b4b] bg-[#444444] rounded-full">
              <div 
              :class="[ theme === 'dark' ? 'translate-x-[-35%]' : 'translate-x-[32%]']"
              class="flex space-x-6 transition-all duration-700">
                <font-awesome-icon class="text-[24px] text-[#ddd]" icon="sun" />        
                <font-awesome-icon class="text-[24px] text-[#ddd]" icon="moon" />        
              </div>
             </button>
            </div>


          <div 
          :class="[ isLoading  ? 'lg:right-[-10%] lg:opacity-0' : 'lg:right-5 opacity-100' , focused === 1 ? 'z-[101] opacity-100' : 'z-[100]']"
          class="transition-all duration-700 ease-in-out  fixed lg:top-[50%] items-center lg:translate-y-[-50%] top-auto lg:bottom-auto bottom-0 lg:bg-transparent bg-[#2b2a2a] lg:shadow-none shadow-md right-0 flex justify-center lg:left-auto left-0 
           space-y-40">
             <div class="lg:block flex items-center lg:space-x-0 space-x-4 lg:space-y-6 py-[6px]">
              <button 
              @click="handleFocused(0)"
                :class="[ focused === 0  ? 'bg-primary' : '' , theme === 'dark' && focused !== 0 &&  'bg-[#2a2a2a]', theme === 'light' && focused !== 0 && 'bg-[#EEE]']"
                class="group hover:bg-primary transition-colors duration-500 relative cursor-pointer w-[45px] h-[45px] flex justify-center items-center rounded-full">
                  <div class="lg:lg:group-hover:w-32 flex items-center px-6 overflow-hidden absolute right-0 top-0 bottom-0 rounded-full z-[-1] group-hover:opacity-100 lg:group-hover:bg-primary  transition-all duration-300 w-0 opacity-0 ">
                    <h1 class="font-semibold text-white">Home</h1>
                  </div>
                <font-awesome-icon 
               :class="[ theme === 'dark'  && 'text-[#fff]' , theme === 'light' && focused !== 0 ?'text-[#666]' : 'text-[#fff]']"
                class="text-lg"  icon="house" />
              </button>

              
              <button 
              @click="handleFocused(1)"
              :class="[ focused === 1  ? 'bg-primary' : '' , theme === 'dark' && focused !== 1 &&  'bg-[#2a2a2a]', theme === 'light' && focused !== 1 && 'bg-[#EEE]']"
                class="group hover:bg-primary transition-colors duration-500 relative cursor-pointer w-[45px] h-[45px] flex justify-center items-center rounded-full">
                  <div class="lg:group-hover:w-32 flex items-center px-6 overflow-hidden absolute right-0 top-0 bottom-0 rounded-full z-[-1] group-hover:opacity-100 lg:group-hover:bg-primary  transition-all  duration-300 w-0 opacity-0 ">
                    <h1 class="font-semibold text-white">About</h1>
                  </div>
                  <font-awesome-icon 
                  :class="[ theme === 'dark'  && 'text-[#fff]' , theme === 'light' && focused !== 1 ?'text-[#666]' : 'text-[#fff]']"
                  class="text-lg"  icon="fa-solid fa-user-tie"  />
              </button>
           
              <button 
              @click="handleFocused(2)"
              :class="[ focused === 2  ? 'bg-primary' : '' , theme === 'dark' && focused !== 2 &&  'bg-[#2a2a2a]', theme === 'light' && focused !== 2 && 'bg-[#EEE]']"
                class="group hover:bg-primary transition-colors duration-500 relative  cursor-pointer w-[45px] h-[45px] flex justify-center items-center rounded-full">
                  <div class="lg:group-hover:w-36 flex items-center px-6 overflow-hidden absolute right-0 top-0 bottom-0 rounded-full z-[-1] group-hover:opacity-100 lg:group-hover:bg-primary  transition-all  duration-300 w-0 opacity-0 ">
                    <h1 class="font-semibold text-white">Portfolio</h1>
                  </div>
                  <font-awesome-icon
                  :class="[ theme === 'dark'  && 'text-[#fff]' , theme === 'light' && focused !== 2 ?'text-[#666]' : 'text-[#fff]']"
                  class="text-lg" icon="fa-solid fa-briefcase" />
              </button>


              <button 
              @click="handleFocused(3)"
              :class="[ focused === 3  ? 'bg-primary' : '' , theme === 'dark' && focused !== 3 &&  'bg-[#2a2a2a]', theme === 'light' && focused !== 3 && 'bg-[#EEE]']"
                class="group hover:bg-primary transition-colors duration-500 relative  cursor-pointer w-[45px] h-[45px] flex justify-center items-center rounded-full">
                  <div class="lg:group-hover:w-36 flex items-center px-6 overflow-hidden absolute right-0 top-0 bottom-0 rounded-full z-[-1] group-hover:opacity-100 lg:group-hover:bg-primary  transition-all  duration-300 w-0 opacity-0 ">
                    <h1 class="font-semibold text-white">Contact</h1>
                  </div>
                  <font-awesome-icon
                  :class="[ theme === 'dark'  && 'text-[#fff]' , theme === 'light' && focused !== 3 ?'text-[#666]' : 'text-[#fff]']"
                  class="text-lg" icon="envelope-open" />
              </button>
             </div>
          </div>
      </div>
  </div>
</template>


