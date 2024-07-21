<template>
  <div>Generate Table</div>
  <form>
    <div>
      <label for="row">Rows</label>
      <input id="row" type="number" v-model="inputRows" :min="1" required />
      <p v-if="inputRows < 1">Rows must be larger or equal to 1</p>
    </div>

    <div>
      <label for="columns">Columns</label>
      <input id="columns" type="number" v-model="inputColumns" :min="1" required />
      <p v-if="inputColumns < 1">Columns must be larger or equal to 1</p>
    </div>
  </form>

  <table v-if="inputColumns && inputRows">
    <tbody>
      <tr v-for="(row, rowIdx) in inputRows">
        <td v-for="(column, columnIdx) in inputColumns">
          {{
            columnIdx % 2 === 0
              ? inputRows * columnIdx + (rowIdx + 1)
              : inputRows * (columnIdx + 1) - rowIdx
          }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const inputRows = ref(1)
const inputColumns = ref(1)
</script>

<style scoped>
td {
  border: 1px solid black;
  padding: 8px;
}
</style>
