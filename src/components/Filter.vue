<script setup lang="ts">
import { useVehicle } from '@/store/store'

const vechicle = useVehicle()
console.log(vechicle.count)
</script>

<template>
<select>
  <option>По цене</option>
  <option>По убыванию</option>
  <option>По возрастанию</option>
</select>
</template>

<style scoped>

</style>