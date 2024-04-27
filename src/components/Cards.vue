<script setup lang="ts">
import type { vehicleI } from '@/types/types'
import Card from '@/components/Card.vue'

defineProps({
  data : Array as () => Array<vehicleI>
})

</script>

<template>
  <div class="cards">
    <Card v-for="item in data" :key="item.id" :item="item"></Card>
  </div>
</template>

<style scoped>
.cards{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  column-gap: 30px;
  row-gap: 50px;
}
</style>