<script setup lang="ts">
import JobLists from './components/JobLists.vue'
import ContactForm from './components/ContactForm.vue'
import QRCode from './front-end-mentors/QRCode.vue'

const routes = [
  'generate-table',
  'contact-form',
  'qr',
  'accordion',
  'temperature-converter',
  'progress-bar',
  'stopwatch'
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
