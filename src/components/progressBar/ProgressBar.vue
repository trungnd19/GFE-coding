<template>
  <div class="progress">
    <div class="actual-progress">{{ progressPercentage }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  progress: {
    type: Number,
    default: 0,
    validator(prop: number) {
      return prop <= 100 && prop >= 0
    }
  }
})

const progressPercentage = computed(() => {
  if (Number.isNaN(props.progress)) {
    return 0 + '%'
  }

  if (!Number.isNaN(props.progress) && (props.progress) > 100) {
    return 100 + '%'
  }

  if (!Number.isNaN(props.progress) && (props.progress) < 0) {
    return 0 + '%'
  }

  return props.progress + '%'
})
</script>

<style scoped>
.progress {
  background-color: rgb(233, 236, 239);
  border: 1px solid #c5c5c5;
  border-radius: 8px;
  height: 20px;
}

.actual-progress {
  background-color: #0d6efd;
  border-radius: 8px;
  height: 20px;
  width: v-bind(progressPercentage);
  text-align: center;
  /* overflow: hidden; */
}
</style>
