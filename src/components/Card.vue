<script setup lang="ts">
import type { vehicleI } from '@/types/types'
import { useVehicle } from '@/store/store'

defineProps({
  item: Object as () => vehicleI
})

function selectVehicle(item: vehicleI) {
  useVehicle().selectVehicle(item)
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
  background: #f2f2f2;
  border-radius: 20px;
  padding: 20px
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
  background: #9cbfd7;
  border-radius: 5px;
  padding: 10px 0;
  cursor: pointer;
}

button:hover{
  grid-column: 2/3;
  border: none;
  background: #89adc5;
  border-radius: 5px;
  padding: 10px 0;
}
</style>