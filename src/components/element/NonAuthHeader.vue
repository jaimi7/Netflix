<template>
  <div>
    <div>
      <img
        src="@/assets/img/bg.jpg"
        alt="Netflix"
        class="w-full h-full bg-cover opacity-60 bg-center bg-no-repeat absolute -z-20"
      />
    </div>
    <header>
      <nav class="flex justify-between items-center w-full h-14 p-2 md:p-8">
        <div>
          <img src="@/assets/img/header.png" alt="Netflix" class="w-32 h-16 md:w-40 md:h-20" />
        </div>

        <div>
          <button
            class="bg-red-500 hover:bg-red-600 transition duration-200 ease-in text-white rounded-md text-sm py-1.5 px-6 items-center md:text-base"
          >
            <router-link to="/">Sign In</router-link>
          </button>
        </div>
      </nav>
    </header>
  </div>
</template>
