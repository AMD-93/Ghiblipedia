<script setup lang="ts">
import Picture from '@/assets/willem.jpg'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiCog } from '@mdi/js'

const path = mdiCog

// import { useAuth0 } from '@auth0/auth0-vue'

// const { user, isAuthenticated } = useAuth0()

const items = [{ title: 'Edit profile' }, { title: 'Reset password' }, { title: 'Something else' }]
</script>
<template>
  <div class="profile-container">
    <div class="header">
      <div class="pic"><img :src="Picture" alt="" /></div>
      <h1>Willem Dafoe</h1>
    </div>
    <div class="profile-info">
      <p>Username</p>
      <p>Email</p>
      <p>Whatever</p>
    </div>
    <div class="settings">
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" variant="text">
            <svg-icon class="icon" type="mdi" :path="path"></svg-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index" :value="index">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </div>
  <!-- <pre v-if="isAuthenticated">
        <code>
          {{ user }}
        <p> {{ user?.nickname }}</p>
        <p> {{ user?.name }}</p>
        <p> {{ user?.email }}</p>
        <p> {{ user?.email_verified }}</p>

        </code>
</pre> -->
</template>
<style scoped>
.pic {
  position: relative;
  width: 200px;
  height: 200px;
  overflow: hidden;
  display: inline-block;
  border-radius: 50%;
}
img {
  width: auto;
  height: 100%;
  margin-left: -120px;
}

.profile-container {
  background-color: #b7b7a4;
  border-radius: 8px;
  padding: 20px 15px 20px 15px;
}

@media only screen and (max-width: 480px) {
  .profile-container {
    display: flex;
    flex-direction: column;
  }
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .profile-info {
    display: flex;
    flex-direction: column;
    align-self: center;
    padding: 10px;
  }
  .settings {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
}

@media only screen and (min-width: 481px) {
  .profile-container {
    display: flex;
    flex-direction: column;
  }
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .profile-info {
    display: flex;
    flex-direction: column;
    align-self: center;
    padding: 10px;
  }
  .settings {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
}

@media only screen and (min-width: 769px) {
  .profile-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .header {
    display: flex;
    flex-direction: column;
    padding-left: 10px;
  }
  .profile-info {
    display: flex;
    flex-direction: column;
    width: 50%;
  }
  .settings {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
}

@media only screen and (min-width: 992px) {
  .profile-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .header {
    display: flex;
    flex-direction: column;
    padding-left: 10px;
  }
  .profile-info {
    display: flex;
    flex-direction: column;
    width: 50%;
  }
  .settings {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
}

@media only screen and (min-width: 1025px) {
  .profile-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .header {
    display: flex;
    flex-direction: column;
    padding-left: 10px;
  }
  .profile-info {
    display: flex;
    flex-direction: column;
    width: 50%;
  }
  .settings {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
}
</style>
