// NOTE: AutoImport
// import { defineStore } from 'pinia'

export const useCounterStore = defineStore('main', {
  state: () => ({
    counter: 0,
    name: 'YooWoo',
  }),
  getters: {
    doubleCount: state => {
      state.counter * 2
    },
  },
  actions: {
    // reset() {
    //   this.counter = 0
    // },
    addOne() {
      console.log('addOne')
      this.counter++
    },
    addTwo() {
      console.log('addTwo')
      this.counter += 2
    },
    addThree() {
      console.log('addThree')
      this.counter += 3
    },
  },
})
