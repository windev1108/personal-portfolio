<template>
  <div
    class="fixed top-0 left-0 right-0 bottom-0 z-[100] after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 after:z-[101] after:bg-opacity-50 after:delay-500"
    :class="[!fullScreen && 'after:bg-[#111]']"
  >
    <div
      :class="[
        isFadeIn ? 'opacity-100' : 'opacity-0',
        fullScreen
          ? 'w-screen h-screen'
          : 'lg:w-[1170px] w-full lg:h-[80vh] h-screen border-[2px]',
      ]"
      class="relative transition-opacity duration-300 ease-in-out pb-8 border-[#222] rounded-lg z-[102] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
    >
      <button
        @click="$emit('handleClose')"
        :class="[isFadeIn ? 'opacity-100' : 'opacity-0']"
        class="absolute z-[103] cursor-pointer -top-10 -right-10 transition-opacity duration-1000 ease-in-out"
      >
        <font-awesome-icon
          class="text-4xl text-white"
          icon="fa-regular fa-circle-xmark"
        />
      </button>
      <div
        :class="[
          isFadeIn
            ? 'translate-y-0 opacity-100'
            : 'translate-y-[10%] opacity-0',
          fullScreen ? 'lg:h-screen h-full w-full' : 'lg:h-[80vh] h-full',
          theme === 'dark' && !fullScreen && 'bg-[#111]',
          theme === 'light' && !fullScreen && 'bg-[#fff]',
        ]"
        class="transition-all duration-1000 ease-in-out scrollbar-track-[#333] scrollbar-thumb-[#666] scrollbar-thumb-rounded-lg scrollbar-thin overflow-x-hidden overflow-y-scroll"
      >
        <div class="relative flex justify-center py-[80px] space-x-4">
          <div
            class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          >
            <span
              :class="[
                theme === 'dark'
                  ? 'text-[hsla(0,0%,100%,.07)]'
                  : 'text-[rgba(30,37,48,.07)]',
              ]"
              class="lg:text-[110px] text-6xl uppercase font-extrabold text-[hsla(0,0%,100%,.07)]"
              >Resume</span
            >
          </div>
          <h1
            :class="[theme === 'dark' ? 'text-[#fff]' : 'text-[#666]']"
            class="lg:text-[60px] transition-all duration-1000 text-4xl font-extrabold uppercase"
          >
            About
          </h1>
          <h1
            class="lg:text-[60px] text-4xl font-extrabold text-primary transition-all duration-1000 uppercase"
          >
            me
          </h1>
        </div>

        <div
          :class="[fullScreen ? 'lg:px-48 px-6' : 'px-6']"
          class="lg:flex block lg:gap-6"
        >
          <div class="lg:w-1/2 w-full">
            <h1
              :class="[theme === 'dark' ? 'text-[#fff]' : 'text-[#666]']"
              class="lg:text-[26px] transition-all duration-1000 text-lg text-white font-semibold"
            >
              PERSONAL INFOS
            </h1>
            <div class="grid grid-cols-12 gap-6 pt-12">
              <div
                :class="[fullScreen ? 'lg:flex lg:space-x-2' : 'block']"
                class="col-span-6"
              >
                <h1
                  :class="[theme === 'dark' ? 'text-[#fff]' : 'text-[#666]']"
                  class="font-semibold transition-all duration-1000 text-[#fff] text-opacity-60"
                >
                  First Name:
                </h1>
                <h1
                  :class="[theme === 'dark' ? 'text-[#fff]' : 'text-[#666]']"
                  class="font-semibold transition-all duration-1000 text-[#fff]"
                >
                  {{ user.firstName }}
                </h1>
              </div>
              <div
                :class="[fullScreen ? 'lg:flex lg:space-x-2' : 'block']"
                class="col-span-6"
              >
                <h1
                  :class="[theme === 'dark' ? 'text-[#fff]' : 'text-[#666]']"
                  class="font-semibold transition-all duration-1000 text-[#fff] text-opacity-60"
                >
                  Last Name:
                </h1>
                <h1
                  :class="[theme === 'dark' ? 'text-[#fff]' : 'text-[#666]']"
                  class="font-semibold transition-all duration-1000 text-[#fff]"
                >
                  {{ user.lastName }}
                </h1>
              </div>
              <div
                :class="[fullScreen ? 'lg:flex lg:space-x-2' : 'block']"
                class="col-span-6"
              >
                <h1
                  :class="[theme === 'dark' ? 'text-[#fff]' : 'text-[#666]']"
                  class="font-semibold transition-all duration-1000 text-[#fff] text-opacity-60"
                >
                  Nickname:
                </h1>
                <h1
                  :class="[theme === 'dark' ? 'text-[#fff]' : 'text-[#666]']"
                  class="font-semibold transition-all duration-1000 text-[#fff]"
                >
                  {{ user.nickName }}
                </h1>
              </div>
              <div
                :class="[fullScreen ? 'lg:flex lg:space-x-2' : 'block']"
                class="col-span-6"
              >
                <h1
                  :class="[theme === 'dark' ? 'text-[#fff]' : 'text-[#666]']"
                  class="font-semibold transition-all duration-1000 text-[#fff] text-opacity-60"
                >
                  Age:
                </h1>
                <h1
                  :class="[theme === 'dark' ? 'text-[#fff]' : 'text-[#666]']"
                  class="font-semibold transition-all duration-1000 text-[#fff]"
                >
                  {{ user.age }}
                </h1>
              </div>
              <div
                :class="[fullScreen ? 'lg:flex lg:space-x-2' : 'block']"
                class="col-span-6"
              >
                <h1
                  :class="[theme === 'dark' ? 'text-[#fff]' : 'text-[#666]']"
                  class="font-semibold transition-all duration-1000 text-[#fff] text-opacity-60"
                >
                  Open for work:
                </h1>
                <h1
                  class="font-semibold transition-all duration-1000 text-[#5be85b]"
                >
                  {{ user.isOpenJob ? "Available" : "Unavailable" }}
                </h1>
              </div>
              <div
                :class="[fullScreen ? 'lg:flex lg:space-x-2' : 'block']"
                class="col-span-6"
              >
                <h1
                  :class="[theme === 'dark' ? 'text-[#fff]' : 'text-[#666]']"
                  class="font-semibold transition-all duration-1000 text-[#fff] text-opacity-60"
                >
                  Address:
                </h1>
                <h1
                  :class="[theme === 'dark' ? 'text-[#fff]' : 'text-[#666]']"
                  class="font-semibold transition-all duration-1000 text-[#fff]"
                >
                  {{ user.address }}
                </h1>
              </div>
              <div
                :class="[fullScreen ? 'lg:flex lg:space-x-2' : 'block']"
                class="col-span-6"
              >
                <h1
                  :class="[theme === 'dark' ? 'text-[#fff]' : 'text-[#666]']"
                  class="font-semibold transition-all duration-1000 text-[#fff] text-opacity-60"
                >
                  Phone:
                </h1>
                <h1
                  :class="[theme === 'dark' ? 'text-[#fff]' : 'text-[#666]']"
                  class="font-semibold transition-all duration-1000 text-[#fff]"
                >
                  {{ `+84${user.phone}` }}
                </h1>
              </div>
              <div
                :class="[fullScreen ? 'lg:flex lg:space-x-2' : 'block']"
                class="col-span-6"
              >
                <h1
                  :class="[theme === 'dark' ? 'text-[#fff]' : 'text-[#666]']"
                  class="font-semibold transition-all duration-1000 text-[#fff] text-opacity-60"
                >
                  Email:
                </h1>
                <h1
                  :class="[theme === 'dark' ? 'text-[#fff]' : 'text-[#666]']"
                  class="font-semibold transition-all duration-1000 text-[#fff] break-words"
                >
                  {{ user.email }}
                </h1>
              </div>
              <div
                :class="[fullScreen ? 'lg:flex lg:space-x-2' : 'block']"
                class="col-span-6"
              >
                <h1
                  :class="[theme === 'dark' ? 'text-[#fff]' : 'text-[#666]']"
                  class="font-semibold transition-all duration-1000 text-[#fff] text-opacity-60"
                >
                  Nationality:
                </h1>
                <h1
                  :class="[theme === 'dark' ? 'text-[#fff]' : 'text-[#666]']"
                  class="font-semibold transition-all duration-1000 text-[#fff] w-full break-words"
                >
                  {{ user.nationality }}
                </h1>
              </div>
              <div
                :class="[fullScreen ? 'lg:flex lg:space-x-2' : 'block']"
                class="col-span-6"
              >
                <h1
                  :class="[theme === 'dark' ? 'text-[#fff]' : 'text-[#666]']"
                  class="font-semibold transition-all duration-1000 text-[#fff] text-opacity-60"
                >
                  Languages:
                </h1>
                <h1
                  :class="[theme === 'dark' ? 'text-[#fff]' : 'text-[#666]']"
                  class="font-semibold transition-all duration-1000 text-[#fff]"
                >
                  {{ user.languages }}
                </h1>
              </div>

              <div class="col-span-12 pt-3 lg:my-0 lg:mx-0 mb-12 mx-auto">
                <a
                  :href="CV_PDF"
                  download
                  class="group hover:after:translate-x-0 after:transition-all after:duration-500 relative after:absolute overflow-hidden after:top-0 after:left-0 after:right-0 after:bottom-0 after:rounded-full after:z-[-1] after:translate-x-[100%] after:bg-primary hover:after: lg:flex space-x-2 flex w-full lg:justify-between items-center uppercase border-[1px] border-primary rounded-full lg:w-[40%] h-[55px]"
                >
                  <div class="pl-6">
                    <span
                      :class="[
                        theme === 'dark' ? 'text-[#fff]' : 'text-[#666]',
                      ]"
                      class="group-hover:text-white font-bold transition-all duration-1000 text-white uppercase"
                      >Download CV</span
                    >
                  </div>
                  <div
                    class="w-[55px] h-[55px] flex justify-center items-center bg-primary rounded-full"
                  >
                    <font-awesome-icon
                      class="text-xl text-[#fff]"
                      icon="fa-solid fa-download"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-6 lg:w-1/2 lg:gap-12 gap-4 lg:mt-0 mt-6">
            <div
              :class="[theme === 'dark' ? 'border-[#222]' : 'border-[#ddd]']"
              class="col-span-3 border-[1px] p-4 h-48"
            >
              <div class="relative">
                <h1 class="text-[50px] text-primary">
                  {{ user.yearsExperience }}
                </h1>
                <span
                  class="absolute top-0 lg:left-[15%] left-[24%] text-[30px] text-primary"
                  >+</span
                >
              </div>
              <div
                class="lg:before:block before:hidden relative uppercase before:content-[''] before:absolute before:left-0 before:top-[13px] before:w-[30px] before:h-[1px] before:bg-[#777]"
              >
                <span
                  :class="[theme === 'dark' ? 'text-[#fff]' : 'text-[#666]']"
                  class="lg:pl-12 transition-all duration-1000 text-white"
                  >Years of</span
                >
                <span
                  :class="[theme === 'dark' ? 'text-[#fff]' : 'text-[#666]']"
                  class="flex transition-al duration-700 lg:pl-12"
                  >EXPERIENCE</span
                >
              </div>
            </div>
            <div
              :class="[theme === 'dark' ? 'border-[#222]' : 'border-[#ddd]']"
              class="col-span-3 border-[1px] p-4 h-48"
            >
              <div class="relative">
                <h1 class="text-[50px] transition-al duration-700 text-primary">
                  {{ user.projects.length }}
                </h1>
                <span
                  class="absolute top-0 lg:left-[15%] left-[24%] text-[30px] text-primary"
                  >+</span
                >
              </div>
              <div
                class="lg:before:block before:hidden relative uppercase before:content-[''] before:absolute before:left-0 before:top-[13px] before:w-[30px] before:h-[1px] before:bg-[#777]"
              >
                <span
                  :class="[theme === 'dark' ? 'text-[#fff]' : 'text-[#666]']"
                  class="lg:pl-12 text-white transition-all duration-1000"
                  >Completed</span
                >
                <span
                  :class="[theme === 'dark' ? 'text-[#fff]' : 'text-[#666]']"
                  class="flex lg:pl-12 transition-al duration-700"
                  >Projects</span
                >
              </div>
            </div>
            <div
              :class="[theme === 'dark' ? 'border-[#222]' : 'border-[#ddd]']"
              class="col-span-3 border-[1px] p-4 h-48"
            >
              <div class="relative">
                <h1 class="text-[50px] text-primary">
                  {{ user.happyCustomers }}
                </h1>
                <span
                  class="absolute top-0 lg:left-[15%] left-[24%] text-[30px] text-primary"
                  >+</span
                >
              </div>
              <div
                class="lg:before:block before:hidden relative uppercase before:content-[''] before:absolute before:left-0 before:top-[13px] before:w-[30px] before:h-[1px] before:bg-[#777]"
              >
                <span
                  :class="[theme === 'dark' ? 'text-[#fff]' : 'text-[#666]']"
                  class="lg:pl-12 text-white transition-all duration-1000"
                  >Happy</span
                >
                <span
                  :class="[theme === 'dark' ? 'text-[#fff]' : 'text-[#666]']"
                  class="flex lg:pl-12 transition-all duration-1000"
                  >Customers</span
                >
              </div>
            </div>

            <div
              :class="[theme === 'dark' ? 'border-[#222]' : 'border-[#ddd]']"
              class="col-span-3 border-[1px] p-4 h-48"
            >
              <div class="relative">
                <h1
                  class="text-[50px] text-primary transition-all duration-1000"
                >
                  {{ user.wonAwards }}
                </h1>
                <span
                  class="absolute top-0 lg:left-[15%] left-[24%] text-[30px] text-primary"
                  >+</span
                >
              </div>
              <div
                class="lg:before:block before:hidden relative uppercase before:content-[''] before:absolute before:left-0 before:top-[13px] before:w-[30px] before:h-[1px] before:bg-[#777]"
              >
                <span
                  :class="[theme === 'dark' ? 'text-[#fff]' : 'text-[#666]']"
                  class="lg:pl-12 text-white transition-all duration-1000"
                  >Awards</span
                >
                <span
                  :class="[theme === 'dark' ? 'text-[#fff]' : 'text-[#666]']"
                  class="flex lg:pl-12 transition-all duration-1000"
                  >Won</span
                >
              </div>
            </div>
          </div>
        </div>

        <div class="pt-32 pb-24">
          <h1
            :class="[theme === 'dark' ? 'text-[#fff]' : 'text-[#666]']"
            class="lg:text-4xl text-2xl text-center transition-all duration-1000"
          >
            My skills & Knowledge
          </h1>
          <h3
            :class="[theme === 'dark' ? 'text-[#fff]' : 'text-[#666]']"
            class="lg:px-0 px-6 lg:text-lg text-sm text-center transition-all duration-1000"
          >
            Technologies and languages that I use to make my products everyday
          </h3>
          <div
            class="grid lg:grid-cols-4 grid-cols-2 pt-12 space-y-8 items-center gap-4"
          >
            <a
              :class="skill.name === 'HTML' && 'mt-[32px]'"
              class="mx-auto my-0"
              v-for="skill in skills"
              v-bind:key="skill.name"
              target="_blank"
              v-bind:href="skill.src"
            >
              <img
                :class="[
                  skill.name === 'React Native' && 'ml-2',
                  skill.name === 'TailwindCSS' && 'ml-2',
                ]"
                class="hover:scale-110 transition-all duration-300 ease-in-out object-cover w-20 h-20 relative"
                v-bind:src="skill.img"
                v-bind:alt="skill.name"
              />
              <h1
                :class="[theme === 'dark' ? 'text-[#fff]' : 'text-[#666]']"
                class="text-center font-semibold text-white transition-all duration-1000"
              >
                {{ skill.name }}
              </h1>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import assert from "assert";
import { onMounted, onUnmounted, ref } from "vue";
import dataJson from "../../data/user.json";
import CV_PDF from "../assets/CV.pdf";

const isFadeIn = ref(false);
const user: any = dataJson;
const { skills }: any = user;

onMounted(() => {
  setTimeout(() => {
    isFadeIn.value = true;
  }, 200);
});
onUnmounted(() => {
  isFadeIn.value = false;
});

const props = defineProps<{
  fullScreen: boolean;
  theme: string;
}>();
</script>

<style></style>
