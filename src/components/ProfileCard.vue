<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiCog, mdiCheckDecagram } from '@mdi/js'

const cogIcon = mdiCog
const checkIcon = mdiCheckDecagram

const { user, isAuthenticated } = useAuth0()

const items = [{ title: 'Edit profile' }, { title: 'Reset password' }, { title: 'Something else' }]
</script>
<template>
  <div v-if="isAuthenticated" class="profile-container">
    <div class="header">
      <div class="pic"><img :src="user?.picture" alt="" /></div>
      <h1>
        {{ user?.name }}
        <svg-icon
          v-if="user?.email_verified === true"
          class="icon"
          type="mdi"
          :path="checkIcon"
        ></svg-icon>
      </h1>
    </div>
    <div class="profile-info">
      <p>
        {{ user?.email }}
      </p>
    </div>
    <div class="settings">
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" variant="text">
            <svg-icon class="icon" type="mdi" :path="cogIcon"></svg-icon>
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
    margin: 10px;
  }

  .pic {
    margin-bottom: 10px;
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
    margin: 10px;
    margin-bottom: 20px;
  }

  .pic {
    margin-bottom: 10px;
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
    margin: 5px auto;
    max-width: 80%;
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
    margin: 10px auto;
    max-width: 80%;
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
    margin: 10px auto;
    max-width: 80%;
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
