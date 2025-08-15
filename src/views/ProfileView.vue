<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue'
import ProfileCard from '@/components/ProfileCard.vue'

const { logout, isAuthenticated } = useAuth0()

function handleLogout() {
  logout({ logoutParams: { returnTo: window.location.origin } })
}
</script>

<template>
  <div v-if="isAuthenticated" class="container">
    <ProfileCard />

    <div class="button-container">
      <button @click="handleLogout">Log out</button>
      <button>Reset password</button>
    </div>
  </div>
</template>

<style scoped>
button {
  background-color: #4b4e41;
  color: white;
  font-size: larger;
  padding: 10px;
  border-radius: 8px;
  width: 100%;
  margin-top: 10px;
}

@media only screen and (max-width: 480px) {
}

@media only screen and (min-width: 481px) {
}

@media only screen and (min-width: 769px) {
}

@media only screen and (min-width: 992px) {
}

@media only screen and (min-width: 1025px) {
}
</style>
