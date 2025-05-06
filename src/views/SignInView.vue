<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue'

const {
  // loginWithRedirect,
  logout,
  user,
  isAuthenticated,
} = useAuth0()

// function login() {
//   loginWithRedirect()
// }

function handleLogout() {
  logout({ logoutParams: { returnTo: window.location.origin } })
}
</script>

<template>
  <div>
    <button @click="handleLogout">Log out</button>
  </div>

  <div>
    <pre v-if="isAuthenticated">
      <h2>User Profile</h2>
        <code>{{ user }}</code>
      </pre>
  </div>
</template>
