<script setup lang="ts">
import {reactive, ref, watch} from "vue";
import axios from "axios";
import Filter from '@/components/Filter.vue'
import type { vehicleI } from '@/types/types'

let data = ref<vehicleI[]>([]);
let loading = ref(true); // начинаем с загрузки

axios.get('https://test.tspb.su/test-task/vehicles')
    .then(result => {
      data.value = result.data;
      loading.value = false; // данные загружены, перестаем отображать индикатор загрузки
    });

</script>

<template>
  <Filter></Filter>
  <main>
    <div v-if="loading">Loading...</div>
    <div v-else class="cards">
      <div v-for="item in data" :key="item.id" class="card">
        <h2 class="name">{{item.name}} {{item.model}}</h2>
        <p class="year">{{item.year}}</p>
        <div :style="{background: item.color}" class="showColor"></div>
        <p class="price">{{item.price}}</p>
        <button>Купить</button>
      </div>
    </div>
  </main>
</template>


<style scoped>

.cards{
  display: grid;
  grid-template-columns: repeat(3, auto);
  column-gap: 30px;
  row-gap: 50px;
}
.name{
  grid-column: 1/3;
}
button{
  grid-column: 2/3;
  margin: 0;
  padding: 0;
}
.price {
  font-size: 18px;
  font-weight: 500;
}
.card{
  display: grid;
  align-items: center;
  row-gap: 10px;
  background: #f2f2f2;
  border-radius: 20px;
  padding: 15px 20px;
}

.showColor{
  width: 10px;
  height: 10px;
  grid-column: 2/3;
}
</style>
