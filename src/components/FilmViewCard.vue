<script setup lang="ts">
import VideoPlayer from './VideoPlayer.vue'
import type { FilmDB } from '@/types'
import { ref } from 'vue'
import { useAuth0 } from '@auth0/auth0-vue'

import SvgIcon from '@jamescoyle/vue-icon'
import { mdiCog, mdiCircleSmall } from '@mdi/js'
import { useFilmsStore } from '@/store/Films.ts'

const filmsStore = useFilmsStore()
const handleEditFilm = (payload: Record<string, string>, englishTitle: string) => {
  filmsStore.editFilm(payload, englishTitle)
}

import EditFilmModal from '../components/EditFilmModal.vue'

const { isAuthenticated } = useAuth0()
const cog = mdiCog
const dot = mdiCircleSmall

const props = defineProps<{ films: FilmDB[] }>()

const handleDeleteFilm = (englishTitle: FilmDB['englishTitle']) => {
  filmsStore.deleteFilm(englishTitle)
}

const openModals = ref<Record<number, boolean>>({})

const openModal = (id: number) => {
  openModals.value[id] = true
}
const closeModal = (id: number) => {
  openModals.value[id] = false
}

//how can I make it so that the settings section is only visible if the logged in user has the admin role (ie edit:movies permission)? https://community.auth0.com/t/best-practices-for-retrieving-user-permissions-in-a-spa-vue-js-with-node-js-api-using-auth0/122017/6
</script>

<template>
  <div class="container" v-for="film in props.films" :key="film.id">
    <div class="main-info">
      <h1 class="english-title">
        {{ film.englishTitle }}
        <div class="settings" v-if="isAuthenticated">
          <EditFilmModal
            :film="film"
            :isOpen="openModals[film.id] === true"
            @modal-close="() => closeModal(film.id)"
            @submit="(payload) => handleEditFilm(payload, film.englishTitle)"
            name="first-modal"
          >
          </EditFilmModal>
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props" variant="text">
                <svg-icon class="settings-icon" type="mdi" :path="cog"></svg-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item>
                <v-list-item-title @click="() => openModal(film.id)">Edit film</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title @click="handleDeleteFilm(film.englishTitle)"
                  >Delete film</v-list-item-title
                >
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </h1>
      <h2 class="japanese-title">{{ film.japaneseTitle }}</h2>
      <div class="year-minutes">
        <p>{{ film.releaseDate }}</p>
        <svg-icon class="dot-icon" type="mdi" :path="dot"></svg-icon>
        <p>{{ film.runningTime }}</p>
      </div>
    </div>

    <div class="trailer">
      <VideoPlayer :film="film" />
    </div>

    <div class="movie-info">
      <div class="poster">
        <img :src="film.imageUrl" :alt="film.englishTitle" />
      </div>

      <div class="plot">
        <p>{{ film.plot }}</p>
      </div>

      <div class="director-genres">
        <p>Directed by {{ film.director }}</p>
        <p>{{ film.genre }}</p>
      </div>
    </div>

    <!-- <div class="titles">
      <div class="header">
        <img :src="film.imageUrl" :alt="film.englishTitle" />
        <h1>{{ film.englishTitle }} ({{ film.releaseDate }})</h1>
      </div>
      <div class="subheader">
        <h2>{{ film.japaneseTitle }}</h2>
        <p>{{ film.runningTime }}</p>
        <p>{{ film.genre }}</p>
      </div>
    </div>
    <div class="info">
      <VideoPlayer :film="film" :isOpen="openModals[film.id] === true" />
      <p>{{ film.plot }}</p>
      <p>Directed by {{ film.director }}</p>
      <div class="settings" v-if="isAuthenticated">
        <EditFilmModal
          :film="film"
          :isOpen="openModals[film.id] === true"
          @modal-close="() => closeModal(film.id)"
          @submit="(payload) => handleEditFilm(payload, film.englishTitle)"
          name="first-modal"
        >
        </EditFilmModal>
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" variant="text">
              <svg-icon class="icon" type="mdi" :path="cog"></svg-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-title @click="() => openModal(film.id)">Edit film</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title @click="deleteFilm">Delete film</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div> -->
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  margin: 5px;
  /* padding: 20px; */
  /* margin: 20px; */
  justify-self: center;
  background-color: #b7b7a4;
  /* box-shadow: 5px 5px 15px rgb(153, 153, 153); */
  border-radius: 8px;
}

h1,
h2,
p {
  line-height: 1.6;
  letter-spacing: 0.7px;
}

/* h1 {
  font-size: large;
  font-weight: normal;
  font-style: italic;
  padding-top: 10px;
}

h2 {
  font-size: medium;
  font-weight: normal;
  font-style: italic;
}

p {
  font-size: smaller;
} */

@media only screen and (max-width: 480px) {
  .main-info {
    padding-left: 10px;
    padding-right: 10px;
  }

  .english-title {
    font-size: 40px;
    font-weight: normal;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
  }

  .settings-icon {
    width: 18px;
  }

  .japanese-title {
    font-size: 20px;
    font-weight: normal;
  }

  .year-minutes {
    display: flex;
    flex-direction: row;
  }

  .dot-icon {
    width: 18px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .trailer {
    margin-top: 10px;
  }

  .movie-info {
    margin: 10px;
  }

  img {
    max-height: 220px;
    border-radius: 8px;
    float: left;
    margin-right: 13px;
  }

  .plot {
    margin-right: 5px;
  }

  .plot p {
    font-size: 13px;
    text-align: justify;
  }

  .director-genres {
    margin-top: 5px;
    font-size: 13px;
  }

  /* .header {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 10px;
    padding-bottom: 0;
    margin: 0 5 5 0;
  }
  .settings {
    align-self: flex-end;
  }

  .subheader {
    padding: 10px;
    padding-bottom: 0;
  }

  img {
    max-width: 100%;
    border-radius: 8px;
  }

  .info {
    padding: 10px;
    display: flex;
    flex-direction: column;
  }

  iframe {
    margin-bottom: 10px;
  }

  .info p {
    padding-bottom: 10px;
  } */
}

@media only screen and (min-width: 481px) {
  .main-info {
    padding-left: 10px;
    padding-right: 10px;
  }

  .english-title {
    font-size: 40px;
    font-weight: normal;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
  }

  .settings-icon {
    width: 18px;
  }

  .japanese-title {
    font-size: 20px;
    font-weight: normal;
  }

  .year-minutes {
    display: flex;
    flex-direction: row;
  }

  .dot-icon {
    width: 18px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .trailer {
    margin-top: 10px;
  }

  .movie-info {
    margin: 10px;
  }

  img {
    max-height: 220px;
    border-radius: 8px;
    float: left;
    margin-right: 13px;
  }

  .plot {
    margin-right: 5px;
  }

  .plot p {
    font-size: 13px;
    text-align: justify;
  }

  .director-genres {
    margin-top: 5px;
    font-size: 13px;
  }
}

@media only screen and (min-width: 769px) {
  .container {
    display: flex;
    flex-direction: column;
    max-width: 80%;
    padding: 10px;
  }

  .main-info {
    padding-left: 10px;
    padding-right: 10px;
  }

  .english-title {
    font-size: 40px;
    font-weight: normal;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
  }

  .japanese-title {
    font-size: 20px;
    font-weight: normal;
  }

  .year-minutes {
    display: flex;
    flex-direction: row;
  }

  .dot-icon {
    width: 18px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .trailer {
    margin-top: 10px;
    flex: 1 1 250px;
    min-width: 200px;
    margin: 10px;
  }

  .movie-info {
    margin: 10px;
  }

  img {
    max-height: 220px;
    border-radius: 8px;
    float: left;
    margin-right: 13px;
  }

  .plot {
    margin-right: 5px;
  }

  .plot p {
    font-size: 15px;
    text-align: justify;
  }

  .director-genres {
    margin-top: 5px;
    font-size: 15px;
  }
}

@media only screen and (min-width: 992px) {
  .container {
    display: flex;
    flex-direction: column;
    max-width: 80%;
    padding: 10px;
  }

  .main-info {
    padding-left: 10px;
    padding-right: 10px;
  }

  .english-title {
    font-size: 40px;
    font-weight: normal;
  }

  .japanese-title {
    font-size: 20px;
    font-weight: normal;
  }

  .year-minutes {
    display: flex;
    flex-direction: row;
  }

  .dot-icon {
    width: 18px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .trailer {
    margin-top: 10px;
    flex: 1 1 250px;
    min-width: 200px;
    margin: 10px;
  }

  .movie-info {
    margin: 10px;
  }

  img {
    max-height: 250px;
    border-radius: 8px;
    float: left;
    margin-right: 13px;
  }

  .plot {
    margin-right: 5px;
  }

  .plot p {
    font-size: 15px;
    text-align: justify;
  }

  .director-genres {
    margin-top: 5px;
    font-size: 15px;
  }
}

@media only screen and (min-width: 1025px) {
  .container {
    display: flex;
    flex-direction: column;
    max-width: 80%;
    padding: 10px;
  }

  .main-info {
    padding-left: 10px;
    padding-right: 10px;
  }

  .english-title {
    font-size: 40px;
    font-weight: normal;
  }

  .japanese-title {
    font-size: 20px;
    font-weight: normal;
  }

  .year-minutes {
    display: flex;
    flex-direction: row;
  }

  .dot-icon {
    width: 18px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .trailer {
    margin-top: 10px;
    flex: 1 1 250px;
    min-width: 200px;
    margin: 10px;
  }

  .movie-info {
    margin: 10px;
  }

  img {
    max-height: 250px;
    border-radius: 8px;
    float: left;
    margin-right: 13px;
  }

  .plot {
    margin-right: 5px;
  }

  .plot p {
    font-size: 15px;
    text-align: justify;
  }

  .director-genres {
    margin-top: 5px;
    font-size: 15px;
  }
}
</style>
