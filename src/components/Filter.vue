<script setup lang="ts">
import { useVehicle } from '@/store/store'

const vechicle = useVehicle()

function sortByPrice(event: Event) {
  const target = event.target as HTMLSelectElement
  vechicle.sortByPrice(target.value)
}

function sortByYear(event: Event) {
  const target = event.target as HTMLSelectElement
  vechicle.sortByYear(target.value)
}
</script>

<template>
  <div class="filter">
    <div>
      <p>Цена:</p>
      <select @change="sortByPrice($event)">
        <option selected="selected" disabled>По цене</option>
        <option>По убыванию</option>
        <option>По возрастанию</option>
      </select>
    </div>

    <div>
      <p>Год:</p>

      <select @change="sortByYear($event)">
        <option selected="selected" disabled>По году</option>
        <option>По убыванию</option>
        <option>По возрастанию</option>
      </select>
    </div>
  </div>

</template>

<style scoped>
div {
  display: flex;
  gap: 20px;
}
</style>