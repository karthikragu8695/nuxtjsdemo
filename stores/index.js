// stores/counter.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { 
        loggedIn: 'Login value'
     }
  },
  getters:{
    isloggedIn: (state) => state.loggedIn,
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    // increment() {
    //   this.count++
    // },
  },
})