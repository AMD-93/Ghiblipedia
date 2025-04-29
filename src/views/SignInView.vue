<script setup lang="ts">
import { reactive } from 'vue'
defineOptions({
  name: 'SignInView',
})

function login() {
  if (input.username && input.password) {
    console.log('authenticated:' + input.username)
  } else {
    console.log('not authenticated')
  }
}

// what do with signup/do i need a mail?

const input = reactive({
  username: '',
  password: '',
})
</script>

<template>
  <div>
    <form name="login-form" @submit.prevent="login">
      <div>
        <label for="username">Username</label>
        <input id="username" type="text" v-model="input.username" />
      </div>
      <div>
        <label for="password">Password</label>
        <input id="password" type="password" v-model="input.password" />
      </div>
      <button class="btn" type="submit">Login</button>
    </form>
  </div>
</template>
