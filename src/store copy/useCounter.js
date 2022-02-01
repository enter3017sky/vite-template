import { defineStore } from 'pinia'

export const useCounterStore = defineStore('main', {
  state: () => ({
    count: 0,
    name: 'YooWoo',
  }),
  getters: {
    doubleCount: state => {
      state.counter * 2
    },
  },
  actions: {
    reset() {
      this.counter = 0
    },
    addOne() {
      this.counter++
    },
  },
})
