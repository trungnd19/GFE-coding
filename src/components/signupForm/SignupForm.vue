<template>
  <form @submit.prevent="onSubmit">
    <div>
      <label for="username">Username:</label>
      <input id="username" v-model="form.username" type="text" @input="validateUsername" />
      <span v-if="errors.username">{{ errors.username }}</span>
    </div>
    <div>
      <label for="email">Email:</label>
      <input id="email" v-model="form.email" type="email" @input="validateEmail" />
      <span v-if="errors.email">{{ errors.email }}</span>
    </div>
    <div>
      <label for="password">Password:</label>
      <input id="password" v-model="form.password" type="password" @input="validatePassword" />
      <span v-if="errors.password">{{ errors.password }}</span>
    </div>
    <div>
      <label for="confirmPassword">Confirm Password:</label>
      <input
        id="confirmPassword"
        v-model="form.confirmPassword"
        type="password"
        @input="validateConfirmPassword"
      />
      <span v-if="errors.confirmPassword">{{ errors.confirmPassword }}</span>
    </div>
    <button type="submit">Sign Up</button>
  </form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

interface Form {
  username: string
  email: string
  password: string
  confirmPassword: string
}

interface Errors {
  username: string | null
  email: string | null
  password: string | null
  confirmPassword: string | null
}

const form = reactive<Form>({
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const errors = reactive<Errors>({
  username: null,
  email: null,
  password: null,
  confirmPassword: null
})

const validateUsername = () => {
  const alphanumericRegex = /^[a-zA-Z0-9]+$/
  if (form.username.length < 4) {
    errors.username = 'Username must be at least 4 characters long.'
  } else if (!alphanumericRegex.test(form.username)) {
    errors.username = 'Username can only contain alphanumeric characters.'
  } else {
    errors.username = null
  }
}

const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(form.email)) {
    errors.email = 'Please enter a valid email address.'
  } else {
    errors.email = null
  }
}

const validatePassword = () => {
  if (form.password.length < 6) {
    errors.password = 'Password must be at least 6 characters long.'
  } else {
    errors.password = null
  }
}

const validateConfirmPassword = () => {
  if (form.confirmPassword !== form.password) {
    errors.confirmPassword = 'Passwords do not match.'
  } else {
    errors.confirmPassword = null
  }
}

async function submitForm(
  username: string,
  email: string,
  password: string,
  passwordConfirm: string
) {
  try {
    const response = await fetch('https://www.greatfrontend.com/api/questions/sign-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        email,
        password,
        password_confirm: passwordConfirm
      })
    })

    const { message } = await response.json()
    alert(message)
  } catch (_) {
    alert('Error submitting form!')
  }
}

const onSubmit = () => {
  validateUsername()
  validateEmail()
  validatePassword()
  validateConfirmPassword()

  if (!errors.username && !errors.email && !errors.password && !errors.confirmPassword) {
    // All validations passed, submit the form data
    submitForm(form.username, form.email, form.password, form.confirmPassword)
  }
}
</script>

<style scoped>
form {
  max-width: 400px;
  margin: 0 auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

div {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

span {
  color: red;
  font-size: 0.875rem;
}

button {
  width: 100%;
  padding: 0.75rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
