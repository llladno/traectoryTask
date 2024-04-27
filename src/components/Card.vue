<script setup lang="ts">
import type { vehicleI } from '@/types/types'
import { useVehicle } from '@/store/store'

defineProps({
  item: Object as () => vehicleI
})

const vehicle = useVehicle()

function selectVehicle(item: vehicleI) {
  vehicle.selectedVehicle = [item]
  vehicle.$patch({selectedVehicle: [item]})
}
</script>

<template>
  <div v-if="item" class="card">
    <h2 class="name">{{item.name}} {{item.model}}</h2>
    <p class="year">{{item.year}}</p>
    <div class="colorFlex">
      Цвет: <div :style="{background: item.color}" class="showColor"></div>
    </div>
    <p class="price">{{item.price}} ₽</p>
    <button @click="selectVehicle(item)">Подробнее</button>
  </div>
</template>

<style scoped>
.name{
  grid-column: 1/3;
}
.price {
  font-size: 18px;
  font-weight: 500;
}
.card{
  display: grid;
  align-items: center;
  row-gap: 30px;
  background: #ffffff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 20px;
  padding: 20px;
  transition: 0.2s;
}

.card:hover{
  row-gap: 30px;
  background: #f8f8f8;
  box-shadow: rgba(149, 157, 165, 0.4) 0px 8px 24px;
  border-radius: 20px;
}

.colorFlex{
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
}

.showColor{
  width: 15px;
  height: 15px;
  border-radius: 5px;
}

button{
  grid-column: 2/3;
  border: none;
  background: #000000;
  color: white;
  border-radius: 5px;
  padding: 10px 0;
  cursor: pointer;
  transition: 0.3s;
}

button:hover{
  grid-column: 2/3;
  border: none;
  background: #363636;
  border-radius: 5px;
  padding: 10px 0;
}
</style>