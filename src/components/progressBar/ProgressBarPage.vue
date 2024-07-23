<template>
  <div>
    <ProgressBar :progress="0" />
  </div>

  <div>
    <ProgressBar :progress="25" />
  </div>

  <div>
    <ProgressBar :progress="50" />
  </div>

  <div>
    <ProgressBar :progress="75" />
  </div>

  <div>
    <ProgressBar :progress="100" />
  </div>

  <div>
    <ProgressBar :progress="1.5" />
  </div>
</template>

<script setup lang="ts">
import ProgressBar from './ProgressBar.vue'
</script>

<style scoped></style>
