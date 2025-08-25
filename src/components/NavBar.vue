<script setup lang="ts">
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { useAuth0 } from '@auth0/auth0-vue'
import SvgIcon from '@jamescoyle/vue-icon'
import {
  mdiHome,
  mdiEyeOutline,
  mdiMagnify,
  mdiNewspaper,
  mdiAccount,
  mdiLogin,
  mdiCopyright,
} from '@mdi/js'

const { loginWithRedirect, isAuthenticated } = useAuth0()
const home = mdiHome
const watchlist = mdiEyeOutline
const browse = mdiMagnify
const news = mdiNewspaper
const profile = mdiAccount
const signIn = mdiLogin
const credits = mdiCopyright

function login() {
  loginWithRedirect()
}

const showMobileMenu = ref(false)

function showMenu() {
  showMobileMenu.value = !showMobileMenu.value
}

const target = ref(null)

onClickOutside(target, () => {
  showMobileMenu.value = false
})
</script>
<template>
  <div>
    <div class="nav-menu" ref="target">
      <i class="fas fa-bars" @click="showMenu()"></i>
      <div class="nav-content" :class="showMobileMenu ? 'open-menu' : 'closed-menu'">
        <div class="logo">
          <RouterLink class="navbar-brand" :to="{ name: 'home' }">ghiblipedia</RouterLink>
        </div>
        <ul class="nav-items">
          <li>
            <RouterLink class="hide-fullscreen" :to="{ name: 'home' }"
              ><svg-icon class="icon" type="mdi" :path="home"> </svg-icon>home
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'watchlist' }" class="navbar-item" v-if="isAuthenticated"
              ><svg-icon class="icon" type="mdi" :path="watchlist"> </svg-icon>watchlist</RouterLink
            >
          </li>

          <li>
            <RouterLink :to="{ name: 'browse' }" class="navbar-item"
              ><svg-icon class="icon" type="mdi" :path="browse"> </svg-icon>browse</RouterLink
            >
          </li>
          <li>
            <RouterLink :to="{ name: 'news' }" class="navbar-item"
              ><svg-icon class="icon" type="mdi" :path="news"> </svg-icon>news</RouterLink
            >
          </li>
          <li>
            <RouterLink :to="{ name: 'credits' }" class="navbar-item"
              ><svg-icon class="icon" type="mdi" :path="credits"> </svg-icon>credits</RouterLink
            >
          </li>
          <li>
            <RouterLink :to="{ name: 'profile' }" class="navbar-item" v-if="isAuthenticated"
              ><svg-icon class="icon" type="mdi" :path="profile"> </svg-icon>profile</RouterLink
            >
          </li>
        </ul>
        <div class="login-button">
          <button @click="login" v-if="!isAuthenticated">
            <svg-icon class="icon" type="mdi" :path="signIn"> </svg-icon>sign in
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- <nav class="navbar" role="navigation">
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
  </nav> -->
</template>

<style scoped>
.icon {
  height: 1.5em;
  width: 1.5em;
  top: 0.27em;
  position: relative;
  margin-right: 6px;
}

.nav-menu {
  z-index: 2;
}

@media only screen and (min-width: 700px) {
  .hide-fullscreen {
    display: none;
  }

  .icon {
    margin-left: 30px;
  }
}

.nav-menu {
  background-color: #cb997e;
  color: #ffeee2;
  position: fixed;
  overflow: hidden;
  width: 100%;
  top: 0;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
  align-items: center;
}

.nav-items {
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
}
i {
  display: none;
}
a,
a:hover {
  color: #ffeee2;
  text-decoration: none;
}

@media only screen and (max-width: 699px) {
  .nav-menu {
    width: 100%;
  }
  .open-menu {
    opacity: 1;
    height: auto;
  }
  .closed-menu {
    opacity: 0;
    height: 0;
    padding: 0;
  }
  .nav-content {
    flex-direction: column;
    z-index: 100;
    position: relative;
    transition: all 0.2s ease-out;
  }
  .nav-items {
    flex-direction: column;
  }
  i {
    display: block;
    text-align: left;
    padding: 20px;
  }
  .navbar-brand {
    display: none;
  }
}

/* @media only screen and (max-width: 480px) {
  nav {
    background-color: #cb997e;
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
  .navbar-brand {
    font-size: 30px;
  }

  .navbar-links {
    align-self: left;
    display: flex;
    flex-direction: column;
     : 5px;
  }

  a {
    text-decoration: none;
    color: #ffeee2;
    font-size: 20px;
    font-variant: small-caps;
    font-family: Arial, Helvetica, sans-serif;
  }
}

@media only screen and (min-width: 481px) {
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
}
@media only screen and (min-width: 769px) {
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
}
@media only screen and (min-width: 992px) {
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
}
@media only screen and (min-width: 1025px) {
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
} */
</style>
