import { defineStore } from 'pinia'
import axios from 'axios'
import type { vehicleI } from '@/types/types'

export const useVehicle = defineStore('vehicle', {
  state: (): { vechicles: vehicleI[]; selectedVehicle: vehicleI[]} => {
    return { vechicles: [], selectedVehicle: [] }
  },
  actions: {
    async getVehicles(): Promise<vehicleI[]> {
      const result = await axios.get('https://test.tspb.su/test-task/vehicles')
      this.vechicles = result.data
      return result.data
    },
    sortByPrice(value: string){

      if (value === 'По возрастанию') this.vechicles.sort((a, b) => a.price - b.price)
      else if (value === 'По убыванию') this.vechicles.sort((a, b) => b.price - a.price)
    },
    sortByYear(value: string) {
      if (value === 'По возрастанию') this.vechicles.sort((a, b) => a.year - b.year)
      else if (value === 'По убыванию') this.vechicles.sort((a, b) => b.year - a.year)
    },
    changeVehicle(data: any, id: number) {
      this.vechicles[id-1] = {
        id: id-1,
        name: data[0].value,
        model: data[1].value,
        year: data[2].value,
        color: data[3].value,
        price: data[4].value,
        latitude: data[5].value,
        longitude: data[6].value
      }
    },
    deleteVehicle(id: number) {
      this.vechicles.forEach((vehicle, index) => {
        if (vehicle.id === id) this.vechicles.splice(index, 1)
      })
    }
  },

})