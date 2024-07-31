<template>
  <div class="tabs">
    <ul class="tabs__header">
      <li
        v-for="title in tabTitles"
        :key="title"
        @click="selectTab(title)"
        class="tabs__header--item"
        :class="{'is-active': selectedTitle === title}"
      >
        {{ title }}
      </li>
    </ul>
    <!-- <KeepAlive> -->
    <slot> default content </slot>
    <!-- </KeepAlive> -->
  </div>
</template>

<script setup lang="ts">
import { ref, useSlots, provide } from 'vue'
// In Vue 3, useSlots() returns an object containing the slots, and each slot is a function that returns the VNodes when called.
// If a slot is not provided, its corresponding function will be undefined.
// console.log(slots) => {
//  default: (...args) => {…}
//  header: (...args) => {…}
// }

// Nếu gọi slots.default() => trả ra
// slots.default() returns an array of VNode objects.
// Each VNode object has properties that describe the virtual DOM node, such as children, props, key, etc.
// These VNodes are the internal representation of the DOM elements and components that make up the slot content.
const slots = useSlots()
const tabTitles = ref<string[]>(
  slots.default ? slots.default().map((item) => item.props?.title ?? 'No Title') : []
)
const selectedTitle = ref(tabTitles.value[0])
provide('selectedTitle', selectedTitle)

function selectTab(title: string) {
  selectedTitle.value = title
}
</script>

<style scoped>
.tabs__header {
  display: flex;
  list-style: none;
  gap: 10px;
}

.tabs__header--item {
  padding: 12px;
  background-color: beige;
  border: 1px solid black;
}

.is-active {
    color:cornflowerblue
}
</style>
