<script setup>
import { ref, watchEffect } from 'vue'
import { MagnifyingGlassIcon, BellIcon, XMarkIcon } from '@heroicons/vue/24/solid'
import { useRouter } from 'vue-router'

const router = useRouter()
const isScrolled = ref(false)
const isMobileView = ref(false)

const handleScroll = () => {
  if (scrollY > 0) isScrolled.value = true
  else isScrolled.value = false

  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}

const rotate = () => {
  return (isMobileView.value = !isMobileView.value)
}

const handleLogOut = async () => {
  router.push('/')
}

watchEffect(() => {
  handleScroll()
})
</script>

<template>
  <header>
    <nav
      :class="[
        isScrolled
          ? 'w-full z-10 fixed h-14 bg-black flex-between p-2 lg:p-4'
          : 'w-full fixed z-10 h-14 bg-transparent flex-between p-2 lg:-4',
      ]"
    >
      <div class="flex-center space-x-3">
        <div>
          <img src="@/assets/img/header.png" alt="Netflix" class="w-32 h-14" />
        </div>

        <div class="hidden lg:block">
          <ul class="inline-flex space-x-4">
            <li class="navbarLink"><router-link to="/">Home</router-link></li>
            <li class="navbarLink"><router-link to="/">Tv Shows</router-link></li>
            <li class="navbarLink"><router-link to="/">Movies</router-link></li>
            <li class="navbarLink"><router-link to="/">New & Popular</router-link></li>
            <li class="navbarLink"><router-link to="/">My List</router-link></li>
          </ul>
        </div>
      </div>

      <div class="hidden flex-center space-x-3 lg:flex">
        <MagnifyingGlassIcon class="icon-style" />
        <BellIcon class="icon-style" />
        <img
          src=".@/assets/img/avatar.png"
          alt="Avatar"
          class="cursor-pointer w-8 h-8 rounded-md"
          @click="handleLogOut()"
        />
      </div>

      <div class="flex justify-center items-center space-x-2 lg:hidden">
        <div :class="{ rotate: isMobileView }" @click="rotate()">
          <div class="box1"></div>
          <div class="box2"></div>
          <div class="box3"></div>
        </div>
      </div>

      <transition name="isMobileView" class="animation">
        <ul v-show="isMobileView" class="sidebar space-y-6 px-4 py-1">
          <div class="flex-between p-1">
            <div>
              <img src="@/assets/img/header.png" alt="Netflix" class="w-32 h-14" />
            </div>

            <div>
              <XMarkIcon @click="rotate" class="icon-style text-white" />
            </div>
          </div>
          <li class="navbarLink"><router-link to="/">Home</router-link></li>
          <li class="navbarLink"><router-link to="/">Tv Shows</router-link></li>
          <li class="navbarLink"><router-link to="/">Movies</router-link></li>
          <li class="navbarLink"><router-link to="/">New & Popular</router-link></li>
          <li class="navbarLink"><router-link to="/">My List</router-link></li>
          <li class="navbarLink">
            <img
              src="@/assets/img/avatar.png"
              alt="Avatar"
              class="cursor-pointer w-8 h-8 rounded-md"
              @click="handleLogOut()"
            />
          </li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<style scoped>
.isMobileView-enter-active,
.isMobileView-leave-active {
  transition: 1s ease all;
}

.isMobileView-enter-from,
.isMobileView-leave-to {
  transform: translateX(-250px);
}

.isMobileView-enter-to {
  transform: translateX(0);
}
</style>
