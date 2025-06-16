<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue'
import ProfileCard from '@/components/ProfileCard.vue'

const { logout } = useAuth0()

function handleLogout() {
  logout({ logoutParams: { returnTo: window.location.origin } })
}
</script>

<template>
  <div class="container">
    <div class="profile-container">
      <ProfileCard />
    </div>

    <div class="button-container">
      <button @click="handleLogout">Log out</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: auto;
  padding: 10px;
  width: 100%;
}

button {
  background-color: #cb997e;
  padding: 10px;
  border-radius: 8px;
  width: 100%;
}

.profile-container {
  background-color: #b7b7a4;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 10px;
}

@media only screen and (max-width: 480px) {
  .container {
    display: flex;
    flex-direction: column;
  }

  .profile-container {
  }

  .button-container {
  }
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
