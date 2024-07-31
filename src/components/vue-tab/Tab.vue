<template>
  <div class="tab-content" v-if="shouldBeRender" v-show="isShowingTab">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, type Ref, ref, watch } from 'vue'
interface Props {
  title: string,
  lazy?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Tab title',
  lazy: false
})

const selectedTitle: Ref<string> = inject('selectedTitle', ref(''))

const isShowingTab = computed(() => {
  return selectedTitle.value === props.title
})

const loaded = ref(isShowingTab.value)

const shouldBeRender = computed(() => {
    return !props.lazy || isShowingTab.value || loaded.value
})

watch(isShowingTab, (val) => {
  if (val) loaded.value = true
})
</script>

<style scoped></style>
