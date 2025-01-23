import { defineStore, acceptHMRUpdate } from 'pinia'

export const useAuthStore = defineStore({
  id: 'auth',

  state: () => ({
    userData: JSON.parse(localStorage.getItem('user')),
    loginLoading: false,
    logOutLoading: false,
  }),

  actions: {
    loginUser(email, password) {
      this.loginLoading = true
      const user = { email: email, password: password }
      this.userData = JSON.stringify(user)
      this.loginLoading = false
      localStorage.setItem('user', JSON.stringify(this.userData))
    },

    logOut() {
      this.logOutLoading = true
      this.userData = null
      this.logOutLoading = false
      localStorage.removeItem('user')
    },

    registerUser(email, password) {
      this.registerLoading = true
      const user = { email: email, password: password }
      this.userData = JSON.stringify(user)
      this.registerLoading = false
      localStorage.setItem('user', JSON.stringify(this.userData))
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
