<template>
  <div>
    <h1>Temperature Converter</h1>
    <div>
      <form class="form-container">
        <div class="input-container">
          <label for="celsius">Celsius</label>
          <input
            type="number"
            id="celsius"
            class="input-num"
            v-model="inputCelsius"
            @input="calculateFahrenheit"
          />
        </div>
        <div class="equal">=</div>
        <div class="input-container">
          <label for="fahrenheit">Fahrenheit</label>
          <input
            class="input-num"
            type="number"
            id="fahrenheit"
            v-model="inputFahrenheit"
            @input="calculateCelsius"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const inputCelsius = ref<number | string>()
const inputFahrenheit = ref<number | string>()

function calculateFahrenheit() {
  if (typeof inputCelsius.value === 'number' && !Number.isNaN(inputCelsius.value)) {
    inputFahrenheit.value = parseFloat((inputCelsius.value * (9 / 5) + 32).toFixed(4))
  } else {
    inputFahrenheit.value = ''
  }
}

function calculateCelsius() {
  if (typeof inputFahrenheit.value === 'number' && !Number.isNaN(inputFahrenheit.value)) {
    inputCelsius.value = parseFloat(((inputFahrenheit.value - 32) * (5 / 9)).toFixed(4))
  } else {
    inputCelsius.value = ''
  }
}
</script>

<style scoped>
.form-container {
  display: flex;
  gap: 20px;
}

.input-container {
  display: flex;
  flex-direction: column-reverse;
  text-align: center;
}

.input-num {
  text-align: center;
  padding: 8px;
}

.equal {
  font-size: 20px;
}
</style>
