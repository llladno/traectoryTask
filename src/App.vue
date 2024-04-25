<script setup lang="ts">
import {reactive, ref, watch} from "vue";
import Filter from '@/components/Filter.vue'
import type { vehicleI } from '@/types/types'
import { useVehicle } from '@/store/store'
import axios from 'axios'
import Cards from '@/components/Cards.vue'
import ModalWindow from '@/components/ModalWindow.vue'
import { load } from '@2gis/mapgl';


let data = ref<vehicleI[]>([]);
let loading = ref(true);
const store = useVehicle();
const modal = reactive({ status: false, selected: '' })
store.getVehicles().then((res) => {
  data.value = res
  console.log(data)
  loading.value = false
  let coords = res.map((x)=> [x.longitude, x.latitude])
  load().then((mapglAPI) => {
    const map = new mapgl.Map('container', {
      key: 'a072ae2e-f256-4110-91a0-469da40196c7',
      center: coords[1],
      zoom: 9,
    });

    coords.forEach((coord) => {
      const marker = new mapgl.Marker(map, {
        coordinates: coord,
      });
    });
  });
})

store.$subscribe((res) =>{
  console.log(res.payload.selectedVehicle[0])
  modal.status = true
  modal.selected = res.payload.selectedVehicle[0]
  console.log(modal)
}, { detached: true })

function updateModalStatus (status: boolean){
  modal.status = status
  modal.selected = ''
}



</script>

<template>
    <ModalWindow v-if="modal.status" :data="modal.selected" :status="modal.status" @updateStatus="updateModalStatus"></ModalWindow>
  <Filter></Filter>
  <main>
    <Loading v-if="loading"></Loading>
    <Cards :data="data" v-else></Cards>
  </main>
  <div id="container"></div>


</template>


<style scoped>

#container {
  width: 500px;
  height: 300px;
}

main {
  margin: 20px 50px;
}
</style>
