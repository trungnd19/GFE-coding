<template>
  <div>
    {{ todo }}
  </div>
  <button type="button" @click="deleteTodo">Delete</button>
</template>

<script setup lang="ts">
interface Props {
    todo: string,
    id: number
}

const props = withDefaults(defineProps<Props>(), {
    todo: "",
})

const emits = defineEmits(["delete-todo"])

function deleteTodo() {
    emits("delete-todo", props.id)
}

</script>

<style scoped></style>
