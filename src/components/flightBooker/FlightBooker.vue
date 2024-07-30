<template>
  <div>
    <form @submit.prevent="submitForm">
      <div>
        <label for="flight-type">Flight Type</label>
        <select id="flight-type" v-model="flightType">
          <option v-for="option in options" :value="option.value">{{ option.text }}</option>
        </select>
      </div>

      <div>
        <label for="departure">Departure date</label>
        <input type="date" id="departure" v-model="departureDate" :min="TODAY" />
      </div>

      <div v-if="flightType === RETURN">
        <label for="return">Return date</label>
        <input type="date" id="return" v-model="returnDate" :min="departureDate" />
      </div>

      <div>
        <button type="submit">Book flight</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const ONE_WAY = '0'
const RETURN = '1'
// 2024-07-30T09:46:25.248Z => ['2024-07-30', '09:46:33.374Z'] => '2024-07-30'
const TODAY = new Date().toISOString().split('T')[0]

const flightType = ref(ONE_WAY)
const departureDate = ref(TODAY)
const returnDate = ref(TODAY)

const options = [
  {
    value: ONE_WAY,
    text: 'One-way flight'
  },
  {
    value: RETURN,
    text: 'Return flight'
  }
]

function submitForm() {
  const msg =
    flightType.value === ONE_WAY
      ? `You have booked a one-way flight on ${departureDate.value}`
      : `You have booked a return flight, departing on ${departureDate.value} and returning on ${returnDate.value}`
  alert(msg)
}
</script>

<style scoped></style>
