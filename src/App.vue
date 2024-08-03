<script setup lang="ts">
const routes = [
  'generate-table',
  'contact-form',
  'qr',
  'accordion',
  'temperature-converter',
  'progress-bar',
  'stopwatch',
  'progress-bar-moving',
  'digital-clock',
  'flight-booker',
  'vue-tab',
  'traffic-light',
  'todo-list'
]
</script>

<template>
  <div>
    <div v-for="route in routes">
      <RouterLink :to="'/' + `${route}`">{{ route }}</RouterLink>
    </div>
  </div>
  <RouterView />
</template>

<style scoped></style>
