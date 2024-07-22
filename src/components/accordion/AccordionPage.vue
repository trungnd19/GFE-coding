<template>
  <div>
    <Accordion :accordionData="accordionData"></Accordion>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Accordion from './Accordion.vue'

const accordionData = ref([
  {
    title: 'HTML',
    content:
      'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.',
    isOpened: false,
    code: 'html'
  },
  {
    title: 'CSS',
    content:
      'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.',
    isOpened: false,
    code: 'css'
  },
  {
    title: 'Javascript',
    content:
      'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.',
    isOpened: false,
    code: 'js'
  }
])
</script>
<style scoped></style>
