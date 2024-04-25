<script setup lang="ts">
import {reactive, ref, watch} from "vue";
import Filter from '@/components/Filter.vue'
import type { vehicleI } from '@/types/types'
import { useVehicle } from '@/store/store'
import axios from 'axios'
import Cards from '@/components/Cards.vue'

let data = ref<vehicleI[]>([]);
let loading = ref(true);
const store = useVehicle();
store.getVehicles().then((res) => {
  data.value = res
  console.log(data)
  loading.value = false
})
// setTimeout(async ()=>{
//   let result = await axios.options('https://test.tspb.su/test-task/vehicles', {"color": "red",
//     "id": 1,
//     "latitude": 55.753332,
//     "longitude":37.621676,
//     "model": "Camry",
//     "name": "Tot",
//     "price": 21000,
//     "year": 2021
//   })
//   console.log(result)
// },2000)

</script>

<template>
  <Filter></Filter>
  <main>
    <Loading v-if="loading"></Loading>
    <Cards :data="data" v-else></Cards>
  </main>
</template>


<style scoped>

main {
  margin: 20px 50px;
}
</style>
