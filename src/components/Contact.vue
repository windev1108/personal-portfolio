<template>
  <div class="fixed top-0 left-0 right-0 bottom-0 z-[20]">
    <div
    :class="[  isFadeIn  ? 'translate-y-0 opacity-100' : 'translate-y-[10%] opacity-0']" class="transition-all duration-1000 ease-in-out scrollbar-track-[#333] scrollbar-thumb-[#666] scrollbar-thumb-rounded-lg scrollbar-thin overflow-x-hidden h-screen overflow-y-scroll">
        <div class="relative z-[100] flex justify-center py-[80px] space-x-4">
            <div class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <span :class="[ theme === 'dark' ? 'text-[hsla(0,0%,100%,.07)]' : 'text-[rgba(30,37,48,.07)]']" class="lg:text-[110px] text-6xl uppercase font-extrabold text-[hsla(0,0%,100%,.07)] transition-all duration-1000">Contact</span>
            </div>
            <h1
            :class="[ theme === 'dark' ? 'text-[#fff]' : 'text-[#666]']" 
            class="lg:text-[60px] text-4xl font-extrabold  uppercase transition-all duration-1000">Get in</h1>
            <h1 class="lg:text-[60px] text-4xl font-extrabold text-primary uppercase">Touch</h1>
        </div>
         <div class="grid grid-cols-9 lg:px-44 px-4 lg:space-y-0 space-y-6 lg:space-x-16">
              <div class="lg:col-span-3 col-span-9 space-y-5">
                  <div>
                    <h1 
                    :class="[ theme === 'light'  ? 'text-[#666]' : 'text-white']"
                    class="lg:text-2xl text-lg font-semibold transition-all duration-1000">DON'T BE SHY !</h1>
                  </div>
                  <div>
                      <span 
                     :class="['lg:text-base text-sm transition-all duration-1000', theme === 'light'  ? 'text-[#666]' : 'text-white']"
                     >
                        Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                      </span>
                  </div>
                  <div class="flex items-center space-x-6">
                    <div>
                        <font-awesome-icon class="text-4xl text-primary" icon="fa-solid fa-map" />
                    </div>
                    <div class="flex-1">
                          <h1 
                          :class="['text-opacity-70 transition-all duration-1000', theme === 'light'  ? 'text-[#666]' : 'text-white']">
                          Address point
                        </h1> 
                           <span 
                           :class="[ 'font-semibold transition-all duration-1000', theme === 'light'  ? 'text-[#666]' : 'text-white']"
                          >
                          {{user.address}}
                        </span>
                    </div>
                  </div>
                  <div class="flex items-center space-x-6">
                    <div>
                        <font-awesome-icon class="text-4xl text-primary" icon="fa-solid fa-envelope" />
                    </div>
                    <div class="flex-1">
                          <h1 
                          :class="[ 'text-opacity-70 transition-all duration-1000', theme === 'light'  ? 'text-[#666]' : 'text-white']"
                         >Mail me</h1> 
                           <span
                          :class="[ 'font-semibold transition-all duration-1000', theme === 'light'  ? 'text-[#666]' : 'text-white']"
                         >{{user.email}}</span>
                    </div>
                  </div>
                  <div class="flex items-center space-x-6">
                    <div>
                        <font-awesome-icon class="text-4xl text-primary" icon="fa-solid fa-square-phone" />
                    </div>
                    <div class="flex-1">
                          <h1 
                          :class="[ 'font-semibold text-opacity-70 transition-all duration-1000', theme === 'light'  ? 'text-[#666]' : 'text-white']"
                         >Call me</h1> 
                           <span 
                          :class="[ 'font-semibold transition-all duration-1000', theme === 'light'  ? 'text-[#666]' : 'text-white']"
                         >{{`+84${user.phone}`}}</span>
                    </div>
                  </div>
                  <div class="flex justify-evenly w-full lg:w-[50%] gap-2 pt-6">
                       <a :href="user.facebook" target="_blank"
                       :class="[ 'flex justify-center items-center rounded-full transition-all duration-700 ease-in-out hover:bg-primary w-[40px] h-[40px] ',
                        theme === 'light'  ? 'bg-[#eee]' : 'bg-[#333]']"
                      >
                          <font-awesome-icon
                          :class="[theme === 'light' ? 'text-[#666]' : 'text-[#fff]']"
                          icon="fa-brands fa-facebook-f" />
                       </a>
                       <a :href="user.instagram" target="_blank" 
                       :class="[ 'flex justify-center items-center rounded-full transition-all duration-700 ease-in-out hover:bg-primary w-[40px] h-[40px] ',
                        theme === 'light'  ? 'bg-[#eee]' : 'bg-[#333]']"
                        >
                          <font-awesome-icon 
                          :class="[theme === 'light' ? 'text-[#666]' : 'text-[#fff]']"
                          icon="fa-brands fa-instagram" />
                       </a>
                       <a :href="user.github" target="_blank" 
                       :class="[ 'flex justify-center items-center rounded-full transition-all duration-700 ease-in-out hover:bg-primary w-[40px] h-[40px] ',
                        theme === 'light'  ? 'bg-[#eee]' : 'bg-[#333]']">
                          <font-awesome-icon 
                          :class="[theme === 'light' ? 'text-[#666]' : 'text-[#fff]']"
                          icon="fa-brands fa-github" />
                       </a>
                       <a :href="user.twitter" target="_blank" 
                       :class="[ 'flex justify-center items-center rounded-full transition-all duration-700 ease-in-out hover:bg-primary w-[40px] h-[40px] ',
                        theme === 'light'  ? 'bg-[#eee]' : 'bg-[#333]']">
                          <font-awesome-icon 
                          :class="[theme === 'light' ? 'text-[#666]' : 'text-[#fff]']"
                          icon="fa-brands fa-twitter" />
                       </a>
                     
                  </div>
              </div>
              <form 
              @submit="handleSubmitMessage"
              class="lg:col-span-6 col-span-9 space-y-6">
                <div class="flex w-full space-x-6">
                    <div class="w-[50%]">
                         <input
                         v-model="formMessage.name"
                         :class="[ 'lg:rounded-full rounded-2xl border-[1px] outline-none px-6 py-3 w-full' ,theme === 'light' ? 'bg-[#fff] text-[#666] border-gray-300' : 'border-gray-800 bg-[#333] text-[#fff] transition-all duration-700']"
                         type="text" placeholder="Your Name">
                    </div>
                    <div class="w-[50%]">
                         <input 
                         v-model="formMessage.email"
                         type="email"
                         :class="[ 'lg:rounded-full rounded-2xl border-[1px] outline-none px-6 py-3 w-full' ,theme === 'light' ? 'bg-[#fff] text-[#666] border-gray-300' : 'border-gray-800 bg-[#333] text-[#fff] transition-all duration-700']"
                         placeholder="Your Email">
                    </div>
                </div>
                 <div class="w-full">
                    <textarea
                    v-model="formMessage.message"
                    :class="['lg:rounded-[2rem] rounded-2xl  border-[1px] outline-none px-6 py-3 w-full transition-all duration-700' ,theme === 'light' ? 'bg-[#fff] text-[#666] border-gray-300' : 'border-gray-800 bg-[#333] text-[#fff]']"
                     placeholder="Your Message" cols="30" rows="8"></textarea>
                 </div>
                 <div class="w-full flex lg:justify-start justify-center pb-24">
                 <button 
                  type="submit"
                 class="group hover:after:translate-x-0 after:transition-all after:duration-500 relative after:absolute overflow-hidden after:top-0 after:left-0 after:right-0 after:bottom-0 after:rounded-full after:z-[-1] after:translate-x-[100%] after:bg-primary  hover:after: flex space-x-2 justify-between items-center uppercase border-[1px] border-primary rounded-full h-[55px]">
                  <div class="pl-6">
                    <span 
                    :class="[ theme === 'light'  ? 'text-[#666]' : 'text-white']"
                    class="group-hover:text-[#fff] font-bold transition-all duration-1000">Send message</span>
                  </div>
                  <div class="w-[55px] h-[55px] flex justify-center items-center bg-primary rounded-full">
                    <font-awesome-icon class="text-xl" icon="fa-solid fa-arrow-right" />           
                  </div>
              </button>
                 </div>
            </form>
         </div>
    </div>
    <Loading v-show="isLoading" :theme="theme" />
</div>

</template>

<script setup lang="ts">
import dataJson from '../../data/user.json'
import { onMounted , onUnmounted , ref , reactive } from 'vue'
import { useToast } from "vue-toastification"; 
import Loading from './Loading.vue'
import emailjs from '@emailjs/browser';


const toast = useToast()
const isFadeIn = ref(false)
const isLoading = ref(false)
const user  = dataJson
const SERVICE_ID = import.meta.env.VITE_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY
const formMessage = reactive({
  name : "",
  email: "",
  message: "",
})

const handleSubmitMessage = (e : any) => {
  e.preventDefault()
  if(!formMessage.name || !formMessage.email  || !formMessage.message){
    toast.info("Please complete all information", {
        timeout: 2000,
      }) 
    }else{
      isLoading.value = true
      const templateParams = {
        to_name: "Vũ Huỳnh",
        from_name: formMessage.name,
        from_email: formMessage.email,
        message: formMessage.message
      }
       emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY).then(
        (result) => {
          isLoading.value = false
          formMessage.name = ''
          formMessage.email = ''
          formMessage.message = ''
          toast.success("Send message successfully", {
            timeout: 2000,
          });
        (error : any) => {
          toast.warning("Email sending failed!", {
            timeout: 2000,
          });
        }}
      );
    }
}

onMounted(() => {
    setTimeout(() => {
        isFadeIn.value = true
    }, 200)
})
onUnmounted(() => {
    isFadeIn.value = false
})

const props = defineProps < {
    theme: string
} > ()
</script>

<style>

</style>