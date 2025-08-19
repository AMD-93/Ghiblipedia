<script setup lang="ts">
import type { FilmDB } from '@/types'
import { reactive } from 'vue'
import FullSizePosterModal from './FullSizePosterModal.vue'

const props = defineProps<{ films: FilmDB[] }>()

const posterModalState = reactive<Record<number, boolean>>({})

function openPosterModal(id: number) {
  posterModalState[id] = true
}
function closePosterModal(id: number) {
  posterModalState[id] = false
}
</script>

<template>
  <v-expansion-panels bg-color="#b7b7a4" multiple>
    <v-expansion-panel v-for="film in props.films" :key="film.id">
      <v-expansion-panel-title>
        <h1>{{ film.englishTitle }}</h1>
        ({{ film.releaseDate }})
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <div class="panel-content">
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
          <div class="info">
            <h2>{{ film.japaneseTitle }}</h2>
            <p>{{ film.summary }}</p>
            <p v-if="film.id">
              <router-link :to="`/api/movies/${film.id}`">See more</router-link>
            </p>
          </div>
        </div>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<style scoped>
h1 {
  font-size: large;
  font-weight: normal;
  font-style: italic;
  padding-right: 10px;
  padding-left: 17px;
}

h2 {
  font-size: medium;
  font-weight: normal;
  font-style: italic;
  padding-bottom: 10px;
}

p {
  font-size: smaller;
  padding-bottom: 10px;
}

.v-expansion-panel {
  margin-bottom: 10px;
}

.v-expansion-panels:not(.v-expansion-panels--variant-accordion)
  > :first-child:not(:last-child):not(.v-expansion-panel--active):not(
    .v-expansion-panel--before-active
  ) {
  border-bottom-left-radius: 3px !important;
  border-bottom-right-radius: 3px !important;
}

.v-expansion-panels:not(.v-expansion-panels--variant-accordion)
  > :not(:first-child):not(:last-child):not(.v-expansion-panel--active):not(
    .v-expansion-panel--before-active
  ) {
  border-radius: 3px !important;
}
.v-expansion-panels:not(.v-expansion-panels--variant-accordion)
  > :not(:first-child):not(:last-child):not(.v-expansion-panel--active):not(
    .v-expansion-panel--after-active
  ) {
  border-radius: 3px !important;
}

.v-expansion-panels:not(.v-expansion-panels--variant-accordion)
  > :last-child:not(:first-child):not(.v-expansion-panel--active):not(
    .v-expansion-panel--after-active
  ) {
  border-radius: 3px !important;
}

#app
  > div.app-content
  > div
  > div.search-results
  > div
  > div.v-expansion-panel.v-expansion-panel--active
  > button {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}

@media only screen and (max-width: 480px) {
  .v-expansion-panel-title {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 10px;
    margin: 0 5 5 0;
    border-radius: 3px;
    background-color: rgba(131, 148, 108, 0.164);
  }

  .v-expansion-panel-text {
    padding: 5px;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
  }

  .panel-content {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding-top: 5px;
  }

  img {
    width: 125px;
    border-radius: 3px;
  }

  .poster {
    padding-right: 20px;
  }
}

@media only screen and (min-width: 481px) {
  .v-expansion-panel-title {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 10px;
    margin: 0 5 5 0;
    border-radius: 3px;
    background-color: rgba(131, 148, 108, 0.164);
  }

  .v-expansion-panel-text {
    padding: 5px;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
  }

  .panel-content {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding-top: 5px;
  }

  img {
    width: 125px;
    border-radius: 3px;
  }

  .poster {
    padding-right: 20px;
  }
}
@media only screen and (min-width: 769px) {
  .v-expansion-panel-title {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 10px;
    margin: 0 5 5 0;
    border-radius: 3px;
    background-color: rgba(131, 148, 108, 0.164);
  }

  .v-expansion-panel-text {
    padding: 5px;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
  }

  .panel-content {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding-top: 5px;
  }

  img {
    width: 125px;
    border-radius: 3px;
  }

  .poster {
    padding-right: 20px;
  }
}
@media only screen and (min-width: 992px) {
  .v-expansion-panel-title {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 10px;
    margin: 0 5 5 0;
    border-radius: 3px;
    background-color: rgba(131, 148, 108, 0.164);
  }

  .v-expansion-panel-text {
    padding: 5px;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
  }

  .panel-content {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding-top: 5px;
  }

  img {
    width: 125px;
    border-radius: 3px;
  }

  .poster {
    padding-right: 20px;
  }
}
@media only screen and (min-width: 1025px) {
  .v-expansion-panel-title {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 10px;
    margin: 0 5 5 0;
    border-radius: 3px;
    background-color: rgba(131, 148, 108, 0.164);
  }

  .v-expansion-panel-text {
    padding: 5px;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
  }

  .panel-content {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding-top: 5px;
  }

  img {
    width: 125px;
    border-radius: 3px;
  }

  .poster {
    padding-right: 20px;
  }
}
</style>
