<script setup lang="ts">
import VideoPlayer from './VideoPlayer.vue'
import type { FilmDB } from '@/types'
import { reactive } from 'vue'
import { useAuth0 } from '@auth0/auth0-vue'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiCog, mdiCircleSmall } from '@mdi/js'
import { useFilmsStore } from '@/store/Films.ts'
import EditFilmModal from './EditFilmModal.vue'
import FullSizePosterModal from './FullSizePosterModal.vue'

const { isAuthenticated } = useAuth0()
const filmsStore = useFilmsStore()

const cog = mdiCog
const dot = mdiCircleSmall

const props = defineProps<{ films: FilmDB[] }>()

const editModalState = reactive<Record<FilmDB['id'], boolean>>({})

function openEditModal(id: FilmDB['id']) {
  editModalState[id] = true
}
function closeEditModal(id: FilmDB['id']) {
  editModalState[id] = false
}

const posterModalState = reactive<Record<FilmDB['id'], boolean>>({})

function openPosterModal(id: FilmDB['id']) {
  posterModalState[id] = true
}
function closePosterModal(id: FilmDB['id']) {
  posterModalState[id] = false
}

const handleEditFilm = (payload: Record<string, string>, englishTitle: FilmDB['englishTitle']) => {
  filmsStore.editFilm(payload, englishTitle)
}
const handleDeleteFilm = (englishTitle: FilmDB['englishTitle']) => {
  filmsStore.deleteFilm(englishTitle)
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
            :isOpen="editModalState[film.id] === true"
            @modal-close="() => closeEditModal(film.id)"
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
                <v-list-item-title @click="() => openEditModal(film.id)"
                  >Edit film</v-list-item-title
                >
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
        <FullSizePosterModal
          :film="film"
          :isOpen="posterModalState[film.id] === true"
          @modal-close="() => closePosterModal(film.id)"
          name="second-modal"
        >
        </FullSizePosterModal>
        <img
          :src="film.imageUrl"
          :alt="film.englishTitle"
          @click="() => openPosterModal(film.id)"
        />
      </div>

      <div class="plot">
        <p>{{ film.plot }}</p>
      </div>

      <div class="director-genres">
        <p>Directed by {{ film.director }}</p>
        <p>{{ film.genre }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  margin: 5px;
  justify-self: center;
  background-color: #b7b7a4;
  border-radius: 8px;
}

h1,
h2,
p {
  line-height: 1.6;
  letter-spacing: 0.7px;
}

@media only screen and (max-width: 480px) {
  :deep(.trailer) article {
    border-radius: 0;
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

@media only screen and (min-width: 481px) {
  :deep(.trailer) article {
    border-radius: 0;
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
  :deep(.trailer) article {
    border-radius: 8px;
  }

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
