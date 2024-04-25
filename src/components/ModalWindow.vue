<script setup lang="ts">
import type { vehicleI } from '@/types/types'
import { useVehicle } from '@/store/store'

defineProps({
  data: Object as () => vehicleI,
  status: Boolean
})

const { emit } = defineEmits(['updateStatus'])

const updateStatus = () => {
  emit('updateStatus', !status)
}

</script>

<template>
  <div class="modalbg">
    <div class="modal">
      <h2>{{data.name}}</h2>
      <h3>{{data.model}}</h3>
      <button @click="()=> updateStatus">Click</button>
    </div>
  </div>
</template>

<style scoped>
.modalbg {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  top: 0;
  height: 100vh;
  z-index: 10;
  backdrop-filter: brightness(0.5);
}
.modal {
  position: relative;
  background: #ffffff;
  padding: 10px 15px;
  border-radius: 10px;
  width: 300px;
  height: 200px;
  color: black;
}
</style>