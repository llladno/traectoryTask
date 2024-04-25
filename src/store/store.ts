import { defineStore } from 'pinia'
import axios from 'axios'
import type { vehicleI } from '@/types/types'

export const useVehicle = defineStore('vehicle', {
  state: (): { vechicles: vehicleI[]; selectedVehicle: vehicleI| undefined} => {
    return { vechicles: [], selectedVehicle: undefined }
  },
  actions: {
    async getVehicles(): Promise<vehicleI[]> {
      const result = await axios.get('https://test.tspb.su/test-task/vehicles')
      this.vechicles = result.data
      return result.data
    },
    sortByPrice(value: string){
      console.log(this.vechicles)
      if (value === 'По возрастанию') this.vechicles.sort((a, b) => a.price - b.price)
      else if (value === 'По убыванию') this.vechicles.sort((a, b) => b.price - a.price)
    },
    sortByYear(value: string) {
      if (value === 'По возрастанию') this.vechicles.sort((a, b) => a.year - b.year)
      else if (value === 'По убыванию') this.vechicles.sort((a, b) => b.year - a.year)
    },
    selectVehicle(data: vehicleI) {
      this.selectedVehicle = data
      console.log(this.selectedVehicle)
    }
  },

})