// NOTE: AutoImport
// import { defineStore } from 'pinia'

export const useSiteStore = defineStore('site', {
  state: () => ({
    counter: 0,
    name: 'YooWoo',
  }),
  getters: {
  },
  actions: {
    saveName(value) {
      console.log('saveName')
      this.name = value
    },
  },
})
