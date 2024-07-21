<template>
  <form action="https://www.greatfrontend.com/api/questions/contact-form" method="post">
    <div class="form-field">
      <label for="name">Name</label>
      <input type="text" name="name" id="name" required />
    </div>

    <div class="form-field">
      <label for="email">Email</label>
      <input type="text" name="email" id="email" required />
    </div>

    <div class="form-field">
      <label for="message">Message</label>
      <textarea id="message" name="message" rows="5" required></textarea>
    </div>
    <button type="submit">Send</button>
  </form>
</template>

<style scoped>
input,
textarea {
  display: block;
}

form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

button {
  width: fit-content;
}
</style>
