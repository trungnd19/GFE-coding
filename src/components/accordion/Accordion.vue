<template>
  <div>
    <div v-for="accordion in props.accordionData" :key="accordion.content">
      <div class="accordion-title" @click="toggleAccordion(accordion)">
        {{ accordion.title }}
        <span
          aria-hidden="true"
          class="accordion-icon"
          :class="{ 'accordion-icon--rotated': accordion.isOpened }"
        />
      </div>
      <div class="accordion-content" v-show="openedAccordion.has(accordion.code)">
        {{ accordion.content }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Accordion {
  title: string
  content: string
  isOpened: boolean
  code: string
}

interface Props {
  accordionData: Accordion[]
}

const props = withDefaults(defineProps<Props>(), {
  accordionData: () => []
})

const openedAccordion = ref(new Set<string>([]))

function toggleAccordion(accordion: Accordion) {
  openedAccordion.value.has(accordion.code)
    ? openedAccordion.value.delete(accordion.code)
    : openedAccordion.value.add(accordion.code)
}
</script>
<style scoped>
.rotate-180 {
  transform: rotate(180deg);
}

.accordion-icon {
  border: solid currentcolor;
  border-width: 0 2px 2px 0;
  display: inline-block;
  height: 8px;
  pointer-events: none;
  transform: translateY(-2px) rotate(45deg);
  width: 8px;
}

.accordion-icon--rotated {
  transform: translateY(2px) rotate(-135deg);
}

.accordion-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid black;
}

.accordion-title:hover {
  background-color: antiquewhite;
}
</style>
