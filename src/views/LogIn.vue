<script setup>
import { computed, ref } from 'vue'
import NonAuthHeader from '../components/element/NonAuthHeader.vue'

import useVuelidate from '@vuelidate/core'
import { required, helpers, email, minLength } from '@vuelidate/validators'

const formData = ref({
  email: '',
  password: '',
})
const loading = ref(false)
const token = ref([])

const rules = computed(() => {
  return {
    email: { required: helpers.withMessage('Email is required', required), email },
    password: {
      required: helpers.withMessage('Password is required', required),
      minLength: minLength(8),
    },
  }
})
const validator = useVuelidate(rules, formData)

const handleSubmit = async () => {
  const result = await validator.value.$validate()
  if (result) {
    console.log('login')
  }
}
</script>

<template>
  <div class="min-h-screen w-full bg-black md:items-center md:justify-center md:bg-transparent">
    <NonAuthHeader />

    <div class="grid-layout">
      <div
        class="max-w-sm w-72 mt-14 py-2 border border-gray-900 rounded-md sm:w-80 md:border-none md:py-0 md:mt-24"
      >
        <form class="bg-black/75 w-full px-6 py-4 rounded-md" @submit.prevent="handleSubmit">
          <div class="grid-layout pb-4">
            <img src="../assets/img/favicon.png" alt="Netflix" class="w-10 h-10" />
          </div>
          <div class="pb-6">
            <label for="Email" class="label">Email</label>
            <input v-model="formData.email" type="email" placeholder="Email" class="input-style" />
            <p class="error" v-if="validator.email.$error">
              {{ validator.email.$errors[0].$message }}
            </p>
          </div>
          <div class="pb-2">
            <label for="password" class="label">Password</label>
            <input
              v-model="formData.password"
              type="password"
              placeholder="Password"
              class="input-style"
            />
            <p class="error" v-if="validator.password.$error">
              {{ validator.password.$errors[0].$message }}
            </p>
          </div>

          <div class="py-2">
            <p class="cursor-pointer text-gray-400 text-sm md:text-base">
              Don't have an account yet?
              <span class="text-gray-300 hover:text-red-600 transition duration-200 ease-in">
                <router-link to="/">Register</router-link>
              </span>
            </p>
          </div>

          <div>
            <button
              type="submit"
              class="w-full bg-red-600 text-white py-2 px-2 rounded-md hover:bg-red-700 transition duration-200 ease-in"
            >
              {{ loading ? 'Signing In...' : 'Sign In' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
