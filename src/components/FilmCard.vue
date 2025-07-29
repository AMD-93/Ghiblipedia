<script setup lang="ts">
import type { FilmDB } from '@/types'

const props = defineProps<{ films: FilmDB[] }>()
</script>

<template>
  <v-expansion-panels bg-color="#b7b7a4" rounded="lg" multiple>
    <v-expansion-panel v-for="film in props.films" :key="film.id">
      <v-expansion-panel-title>
        <h1>{{ film.englishTitle }}</h1>
        ({{ film.releaseDate }})
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <h2>{{ film.japaneseTitle }}</h2>
        <p>{{ film.summary }}</p>
        <p v-if="film.id">
          <router-link :to="`/api/movies/${film.id}`">See more</router-link>
        </p>
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
  padding-left: 25px;
}

h2 {
  font-size: medium;
  font-weight: normal;
  font-style: italic;
  padding-bottom: 10px;
}

p {
  font-size: smaller;
}

.v-expansion-panel {
  box-shadow: 5px 5px 15px rgb(153, 153, 153);
}

@media only screen and (max-width: 480px) {
  .v-expansion-panels {
    margin: auto;
  }
  .v-expansion-panel-title {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 10px;
    margin: 0 5 5 0;
  }

  .v-expansion-panel-text {
    padding: 5px;
  }
}
@media only screen and (min-width: 481px) {
  .v-expansion-panels {
    margin: auto;
  }
  .v-expansion-panel-title {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 10px;
    margin: 0 5 5 0;
  }

  .v-expansion-panel-text {
    padding: 5px;
  }
}
@media only screen and (min-width: 769px) {
  .v-expansion-panels {
    margin: auto;
  }
  .v-expansion-panel-title {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 10px;
    margin: 0;
  }

  .v-expansion-panel-text {
    margin-top: 0px;
  }
}
@media only screen and (min-width: 992px) {
  .v-expansion-panels {
    margin: auto;
  }
  .v-expansion-panel-title {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 10px;
    margin: 0;
    max-width: 100%;
  }

  .v-expansion-panel-text {
    margin-top: 0px;
  }
}
@media only screen and (min-width: 1025px) {
  .v-expansion-panels {
    margin: auto;
  }

  .v-expansion-panel-title {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .v-expansion-panel-text {
    margin-top: 0px;
  }
}
</style>
