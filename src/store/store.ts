import { defineStore } from 'pinia'

export const useVehicle = defineStore('vehicle', {
  state: () => {
    return { count: 0 }
  },
  actions: {
    increment() {
      this.count++
    },
  },
})