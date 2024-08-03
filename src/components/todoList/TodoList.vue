<template>
  <div>
    <h1>Todo List</h1>
    <div>
      <form @submit.prevent="addTodo">
        <label for="add-todo" name="add-todo"></label>
        <input type="text" placeholder="Add your task" v-model="todoContent" required />
        <button type="submit">Submit</button>
      </form>
      <div>
        <ul>
          <li v-for="todo in todos" :key="todo.id">
            <TodoItem
              :todo="todo.content"
              :id="todo.id"
              @delete-todo="(idx) => handleDeleteTodo(idx)"
            />
          </li>
        </ul>
      </div>
    </div>
    <div v-if="!todos.length">
        No task added!
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TodoItem from './TodoItem.vue'

interface Todo {
  content: string
  id: number
}

const todoContent = ref<string>('')
const todos = ref<Todo[]>([])

function addTodo() {
  if (!todoContent.value?.trim()) {
    alert('Please input a value!')
    return
  }

  todos.value.push({
    content: todoContent.value.trim(),
    id: Math.floor(Math.random() * 99999)
  })

  todoContent.value = ''
}

function handleDeleteTodo(todoId: number) {
  const confirmDelete = confirm('Are you sure to delete?')
  if (confirmDelete) {
    todos.value = todos.value.filter((todo) => todo.id !== todoId)
  }
}
</script>

<style scoped></style>
