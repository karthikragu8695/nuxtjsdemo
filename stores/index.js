// stores/counter.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { 
        email: '',
        password: '',
        loggedIn: 'false'
     }
  },
  getters:{
    isloggedIn: (state) => state.loggedIn,
  },
})