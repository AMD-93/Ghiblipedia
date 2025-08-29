<script setup lang="ts">
import { shallowRef } from 'vue'
import VideoPlayer from './VideoPlayer.vue'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiArrowLeft, mdiArrowRight, mdiCircleSmall } from '@mdi/js'

import type { FilmDB } from '@/types'
const { films } = defineProps<{ films: FilmDB[] }>()

const itemsPerPage = shallowRef(1)

const arrowLeft = mdiArrowLeft
const arrowRight = mdiArrowRight
const dot = mdiCircleSmall
</script>

<template>
  <v-data-iterator
    :items="films"
    item-value="name"
    :items-per-page="itemsPerPage"
    class="card-container"
  >
    <template v-slot:default="{ items, page, pageCount, prevPage, nextPage }">
      <v-card v-for="item in items" :key="item.raw.id" class="card-content">
        <VideoPlayer :film="item.raw" />

        <v-card-title>
          <h2 class="italic">{{ item.raw.englishTitle }}</h2>
          <div class="year-minutes">
            <p>{{ item.raw.releaseDate }}</p>
            <svg-icon class="dot-icon" type="mdi" :path="dot"></svg-icon>
            <p>{{ item.raw.runningTime }}</p>
          </div>
        </v-card-title>

        <v-card-text>
          <p>{{ item.raw.summary }}</p>
        </v-card-text>

        <div class="card-navigation">
          <v-btn :disabled="page === 1" size="small" variant="tonal" @click="prevPage">
            <svg-icon type="mdi" :path="arrowLeft" />
          </v-btn>

          <v-btn :disabled="page === pageCount" size="small" variant="tonal" @click="nextPage">
            <svg-icon type="mdi" :path="arrowRight" />
          </v-btn>
        </div>
      </v-card>
    </template>
  </v-data-iterator>
</template>

<style scoped>
.italic {
  font-style: italic;
  padding-right: 8px;
}

.release-date {
  font-size: 15px;
}

.card-content {
  border-radius: 8px;
  background-color: #b7b7a4;
}

.year-minutes {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.dot-icon {
  width: 18px;
  margin-left: 5px;
  margin-right: 5px;
}

button:nth-child(1) {
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 0px;
}

button:nth-child(2) {
  border-top-left-radius: 8px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 0px;
}

:deep(article) {
  border-radius: 0px;
}

@media only screen and (max-width: 480px) {
  .card-container {
    display: flex;
    flex-direction: column;
    margin: 10px;
  }

  .card-navigation {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .card-content {
    display: flex;
    flex-direction: column;
  }
  h2 {
    font-size: 20px;
  }

  h3 {
    font-style: italic;
    font-size: 15px;
  }

  p {
    font-size: 13px;
  }
}

@media only screen and (min-width: 481px) {
  .card-container {
    display: flex;
    flex-direction: column;
    margin: 10px;
  }

  .card-navigation {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
  }

  .card-content {
    display: flex;
    flex-direction: column;
  }
  h2 {
    font-size: 20px;
  }

  h3 {
    font-style: italic;
    font-size: 15px;
  }

  p {
    font-size: 13px;
  }
}

@media only screen and (min-width: 769px) {
  .card-container {
    display: flex;
    flex-direction: column;
    margin: 5px auto;
    max-width: 80%;
  }
  .card-content {
    display: flex;
    flex-direction: column;
  }

  h2 {
    font-size: 20px;
  }

  h3 {
    font-style: italic;
    font-size: 15px;
  }

  p {
    font-size: 13px;
  }
}

@media only screen and (min-width: 992px) {
  .card-container {
    width: 80%;
    margin: 10px auto;
    background-color: #b7b7a4;
    border-radius: 8px;
  }

  .card-content {
    display: flex;
    flex-direction: column;
  }
  h2 {
    font-size: 20px;
  }

  h3 {
    font-style: italic;
    font-size: 15px;
  }

  p {
    font-size: 13px;
  }
}

@media only screen and (min-width: 1025px) {
  .card-container {
    width: 80%;
    margin: 10px auto;
    background-color: #b7b7a4;
    border-radius: 8px;
  }

  .card-content {
    display: flex;
    flex-direction: column;
  }
  h2 {
    font-size: 20px;
  }

  h3 {
    font-style: italic;
    font-size: 15px;
  }

  p {
    font-size: 13px;
  }
}
</style>
