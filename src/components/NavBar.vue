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
          <RouterLink class="navbar-brand" :to="{ name: 'home' }" activeClass="active-link"
            >ghiblipedia</RouterLink
          >
        </div>

        <ul class="nav-items">
          <li>
            <RouterLink class="hide-fullscreen" :to="{ name: 'home' }" activeClass="active-link">
              <svg-icon class="icon" type="mdi" :path="home" />
              home
            </RouterLink>
          </li>

          <li>
            <RouterLink :to="{ name: 'browse' }" class="navbar-item" activeClass="active-link"
              ><svg-icon class="icon" type="mdi" :path="browse"> </svg-icon>browse</RouterLink
            >
          </li>

          <li>
            <RouterLink :to="{ name: 'news' }" class="navbar-item" activeClass="active-link"
              ><svg-icon class="icon" type="mdi" :path="news"> </svg-icon>news</RouterLink
            >
          </li>

          <li>
            <RouterLink :to="{ name: 'credits' }" class="navbar-item" activeClass="active-link"
              ><svg-icon class="icon" type="mdi" :path="credits"> </svg-icon>credits</RouterLink
            >
          </li>

          <li>
            <RouterLink
              :to="{ name: 'watchlist' }"
              class="navbar-item"
              v-if="isAuthenticated"
              activeClass="active-link"
            >
              <svg-icon class="icon" type="mdi" :path="watchlist" />
              watchlist
            </RouterLink>
          </li>

          <li>
            <RouterLink
              :to="{ name: 'profile' }"
              class="navbar-item"
              v-if="isAuthenticated"
              activeClass="active-link"
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
</template>

<style scoped>
.icon {
  height: 15px;
  top: 0.2em;
  position: relative;
}

.nav-menu {
  background-color: #cb997e;
  color: #ffeee2;
  position: fixed;
  overflow: hidden;
  width: 100%;
  top: 0;
  z-index: 2;
}

i {
  display: none;
}

li {
  list-style: none;
}

a {
  color: #ffeee2;
  text-decoration: none;
}

@media only screen and (min-width: 700px) {
  .active-link {
    box-shadow: rgb(0, 0, 0, 0.3) 0px 1px 0px 0px;
  }
  .navbar-item,
  .navbar-brand {
    display: flex;
  }

  .hide-fullscreen {
    display: none;
  }

  .nav-content {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    padding: 10px 20px;
    align-items: center;
  }

  .nav-items {
    display: flex;
    width: 70%;
    list-style: none;
    justify-content: space-around;
  }
}

@media only screen and (max-width: 699px) {
  .active-link {
    box-shadow: rgb(0, 0, 0, 0.3) 0px 1px 0px 0px;
  }

  .navbar-item,
  .hide-fullscreen {
    display: flex;
    width: 90px;
    margin-bottom: 5px;
  }
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
    display: flex;
    flex-direction: column;
    z-index: 100;
    position: relative;
    transition: all 0.5s ease-out;
    justify-content: space-around;
  }

  .nav-items {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .login-button {
    margin-left: 10px;
    margin-bottom: 10px;
  }

  li {
    margin-left: 10px;
    margin-bottom: 10px;
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
</style>
