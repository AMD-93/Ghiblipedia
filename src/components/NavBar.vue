<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue'

const { loginWithRedirect, isAuthenticated } = useAuth0()

function login() {
  loginWithRedirect()
}
</script>
<template>
  <nav class="navbar" role="navigation">
    <div>
      <RouterLink class="navbar-brand" :to="{ name: 'home' }">ghiblipedia</RouterLink>
    </div>
    <div class="navbar-links">
      <RouterLink :to="{ name: 'watchlist' }" class="navbar-item" v-if="isAuthenticated"
        >watchlist</RouterLink
      >
      <RouterLink :to="{ name: 'browse' }" class="navbar-item">browse</RouterLink>
      <RouterLink :to="{ name: 'news' }" class="navbar-item">news</RouterLink>
      <RouterLink :to="{ name: 'signin' }" class="navbar-item"
        ><button @click="login">sign in</button></RouterLink
      >
    </div>
  </nav>
</template>

<style scoped>
@media only screen and (max-width: 480px) {
  nav {
    background-color: #cb997e;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
  }
}

nav {
  background-color: #cb997e;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
}

.navbar-brand {
  font-size: 30px;
}

.navbar-links {
  align-self: center;
}

a {
  padding: 1rem;
  text-decoration: none;
  color: #ffeee2;
  font-size: 20px;
  font-variant: small-caps;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
