<script setup lang="ts">
import { reactive, ref } from 'vue'
import Filter from '@/components/Filter.vue'
import type { vehicleI } from '@/types/types'
import { useVehicle } from '@/store/store'
import Cards from '@/components/Cards.vue'
import ModalWindow from '@/components/ModalWindow.vue'
import { load } from '@2gis/mapgl'

let data = ref<vehicleI[]>([])
let loading = ref(true)
const store = useVehicle()
const modal = reactive({ status: false, selected: '' })

store.getVehicles().then((res) => {
  data.value = res
  loading.value = false
  let coords = res.map((x) => {
    return { coordinate: [x.longitude, x.latitude], name: x.name }
  })

  load().then((mapgl) => {
    const map = new mapgl.Map('map', {
      key: 'a072ae2e-f256-4110-91a0-469da40196c7',
      center: coords[1].coordinate,
      zoom: 9
    })

    coords.forEach((coord) => {
      const marker = new mapgl.Marker(map, {
        coordinates: coord.coordinate,
        label: {
          text: coord.name,
          offset: [0, 25],
          relativeAnchor: [0.5, 0],
          image: {
            url: 'https://docs.2gis.com/img/mapgl/tooltip-top.svg',
            size: [100, 50],
            stretchX: [
              [10, 40],
              [60, 90]
            ],
            stretchY: [[20, 40]],
            padding: [20, 10, 10, 10]
          }
        }
      })
    })
  })
})

store.$subscribe((res:any) => {
  if (res.payload) {
    modal.status = true
    modal.selected = res.payload.selectedVehicle[0]
  } else {
    data.value = res.events.target
  }
}, { detached: true })

function updateModalStatus(status: boolean) {
  modal.status = status
  modal.selected = ''
}
</script>

<template>
  <ModalWindow :data="modal.selected" :status="modal.status" v-show="modal.status" @close-modal="modal.status = false"
               @updateStatus="updateModalStatus"></ModalWindow>
  <main>
    <div class="titile">
      <h1>Каталог машин</h1>
      <Filter></Filter>
    </div>
    <Loading v-if="loading"></Loading>
    <Cards :data="data" v-else></Cards>
    <div class="mapContainer">
      <h2>Карта объявлений</h2>
      <div id="map"></div>
    </div>
  </main>
</template>

<style scoped>

.titile {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.mapContainer {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
}

#map {
  width: 500px;
  height: 300px;
}

main {
  margin: 20px 50px;
}
</style>