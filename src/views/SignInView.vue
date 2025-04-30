<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue'
const { loginWithRedirect } = useAuth0()

function login() {
  loginWithRedirect()
}

// issue: localhost is http, need https. Mkcert might work

// import { reactive } from 'vue'
// defineOptions({
//   name: 'SignInView',
// })

// function login() {
//   if (input.username && input.password) {
//     console.log('authenticated:' + input.username)
//   } else {
//     console.log('not authenticated')
//   }
// }

// // what do with signup/do i need a mail?

// const input = reactive({
//   username: '',
//   password: '',
// })
</script>

<template>
  <div>
    <button @click="login">Log in</button>
  </div>

  <!-- <div>
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
  </div> -->
</template>
