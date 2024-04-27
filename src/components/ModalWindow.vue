<script setup lang="ts">
import type { vehicleI } from '@/types/types'
import { useVehicle } from '@/store/store'

defineProps({
  data: Object as () => vehicleI,
  status: Boolean
})

const store = useVehicle()

function saveData(event: any, id:number) {
  event.preventDefault()
  store.changeVehicle(event.target, id)
}

function onDelete(id: number) {
  store.deleteVehicle(id)
}

</script>

<template>
  <div class="modalbg" @click="$emit('close-modal')">
    <div class="modal" @click.stop v-if="data">
      <div class="header">
        <h2>{{ data.name }} {{ data.model }}</h2>
        <button @click="$emit('close-modal')" class="close">X</button>
      </div>
      <form @submit="saveData($event,data.id)">
        <div>
          <h4>Имя</h4>
          <input :value="data.name">
        </div>
        <div>
          <h4>Модель</h4>
          <input :value="data.model">
        </div>
        <div>
          <h4>Год</h4>
          <input :value="data.year">
        </div>
        <div>
          <h4>Цвет</h4>
          <input :value="data.color">
        </div>
        <div>
          <h4>Цена</h4>
          <input :value="data.price">
        </div>
        <div>
          <h4>Широта</h4>
          <input :value="data.latitude">
        </div>
        <div>
          <h4>Долгота</h4>
          <input :value="data.longitude">
        </div>
        <div></div>
          <button type="submit" class="save">Сохранить</button>
          <button type="button" @click="() => {
             store.deleteVehicle(data.id)
            $emit('close-modal')
          }"  class="delete">Удалить</button>

      </form>

    </div>
  </div>
</template>

<style scoped>

.header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

form {
  display: grid;
  grid-template-columns: 50% 50%;
  row-gap: 10px;
  column-gap: 10px;
}

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
  padding: 20px 30px;
  border-radius: 10px;
  color: black;
}

input {
  margin-top: 5px;
  width: 90%;
  border-radius: 5px;
  padding: 5px 10px;
  border: #181818 1px solid;
}

.close {
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

.close:hover {
  background: #d2d2d2;

}

.save, .delete{
  cursor: pointer;
  border-radius: 5px;
  padding: 10px 0;
  transition: 0.3s;
}
.save{
  border: none;
  background: #000000;
  color: white;

}

.save:hover{
  background: #363636;
}

.delete {
  border: 1px solid black;
  background: white;
}

.delete:hover {
  background: #f3f3f3;
}
</style>