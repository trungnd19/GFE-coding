<template>
  <div class="tab-content" v-show="isShowingTab">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, type Ref, ref } from 'vue'
interface Props {
  title: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Tab title'
})

const selectedTitle: Ref<string> = inject('selectedTitle', ref(''))

const isShowingTab = computed(() => {
  return selectedTitle.value === props.title
})
</script>

<style scoped></style>
