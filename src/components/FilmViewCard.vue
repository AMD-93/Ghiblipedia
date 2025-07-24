<script setup lang="ts">
import VideoPlayer from './VideoPlayer.vue'
import type { FilmDB } from '@/types'
import { ref } from 'vue'

import SvgIcon from '@jamescoyle/vue-icon'
import { mdiCog } from '@mdi/js'
import { useFilmsStore } from '@/store/Films.ts'

const filmsStore = useFilmsStore()
const handleEditFilm = (payload: Record<string, string>, englishTitle: string) => {
  filmsStore.editFilm(payload, englishTitle)
}

import EditFilmModal from '../components/EditFilmModal.vue'

const path = mdiCog

const props = defineProps<{ films: FilmDB[] }>()

const deleteFilm = () => {}

const openModals = ref<Record<number, boolean>>({})

const openModal = (id: number) => {
  openModals.value[id] = true
}
const closeModal = (id: number) => {
  openModals.value[id] = false
}

// could use this to call editFilm PUT func? or should I do it from the modal?
// const submitHandler = () => {
// }

//how can I make it so that the settings section is only visible if the logged in user has the admin role (ie edit:movies permission)? https://community.auth0.com/t/best-practices-for-retrieving-user-permissions-in-a-spa-vue-js-with-node-js-api-using-auth0/122017/6
</script>

<template>
  <div class="container" v-for="film in props.films" :key="film.movieId">
    <div class="titles">
      <div class="header">
        <img :src="film.imageUrl" alt="" />

        <h1>{{ film.englishTitle }} ({{ film.releaseDate }})</h1>
      </div>
      <div class="subheader">
        <h2>{{ film.japaneseTitle }}</h2>
        <p>{{ film.runningTime }}</p>
        <p>{{ film.genre }}</p>
      </div>
    </div>
    <div class="info">
      <VideoPlayer />
      <p>{{ film.plot }}</p>
      <p>Directed by {{ film.director }}</p>
      <div class="settings">
        <EditFilmModal
          :film="film"
          :isOpen="openModals[film.movieId] === true"
          @modal-close="() => closeModal(film.movieId)"
          @submit="(payload) => handleEditFilm(payload, film.englishTitle)"
          name="first-modal"
        >
        </EditFilmModal>
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" variant="text">
              <svg-icon class="icon" type="mdi" :path="path"></svg-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-title @click="() => openModal(film.movieId)"
                >Edit film</v-list-item-title
              >
            </v-list-item>

            <v-list-item>
              <v-list-item-title @click="deleteFilm">Delete film</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 20px;
  justify-self: center;
  background-color: #b7b7a4;
  box-shadow: 5px 5px 15px rgb(153, 153, 153);
  border-radius: 8px;
}

h1 {
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
}

@media only screen and (max-width: 480px) {
  .header {
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
  }
}
@media only screen and (min-width: 481px) {
  .header {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 10px;
    padding-bottom: 0;
    margin: 0 5 5 0;
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
  }

  iframe {
    margin-bottom: 10px;
  }

  .info p {
    padding-bottom: 10px;
  }
}

@media only screen and (min-width: 769px) {
  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    max-width: 70%;
    padding: 10px;
  }

  img {
    border-radius: 8px;
  }

  .info {
    max-width: 65%;
  }

  iframe {
    border-radius: 8px;
  }
}
@media only screen and (min-width: 992px) {
  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    max-width: 70%;
    padding: 10px;
  }

  img {
    border-radius: 8px;
  }

  .info {
    max-width: 65%;
  }

  iframe {
    border-radius: 8px;
  }
}
@media only screen and (min-width: 1025px) {
  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    max-width: 70%;
    padding: 10px;
  }

  img {
    border-radius: 8px;
  }

  .info {
    max-width: 65%;
  }

  iframe {
    border-radius: 8px;
  }
}
</style>
