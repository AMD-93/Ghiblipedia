<script setup lang="ts">
interface Film {
  title: string
  originalTitle: string
  year: string
  plot: string
  genres: string
  tags: string
}

const props = defineProps<{ films: Film[] }>()
</script>

<template>
  <v-expansion-panels class="container" bg-color="#b7b7a4" rounded="lg" multiple>
    <v-expansion-panel class="panel" v-for="(film, index) in props.films" :key="index">
      <v-expansion-panel-title class="title-section">
        <h1>{{ film.title }}</h1>
        ({{ film.year }})
      </v-expansion-panel-title>

      <v-expansion-panel-text class="info-section">
        <h2>{{ film.originalTitle }}</h2>
        <p>{{ film.plot }}</p>
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

.panel {
  box-shadow: 5px 5px 15px rgb(153, 153, 153);
}

@media only screen and (max-width: 480px) {
  .container {
    margin: auto;
  }
  .title-section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 10px;
    margin: 0 5 5 0;
  }

  .info-section {
    padding: 5px;
    margin: 5px;
  }
}
@media only screen and (min-width: 481px) {
  .container {
    margin: auto;
  }
  .title-section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 10px;
    margin: 0 5 5 0;
  }

  .info-section {
    padding: 5px;
    margin: 5px;
  }
}
@media only screen and (min-width: 769px) {
  .container {
    margin: auto;
  }
  .title-section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 10px;
    margin: 0 5 5 0;
  }

  .info-section {
    padding: 5px;
    margin: 5px;
  }
}
@media only screen and (min-width: 992px) {
  .container {
    margin: auto;
  }
  .title-section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 10px;
    margin: 0 5 5 0;
  }

  .info-section {
    padding: 5px;
    margin: 5px;
  }
}
@media only screen and (min-width: 1025px) {
  .container {
    margin: auto;
    max-width: 100%;
  }
  .title-section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 10px;
    margin: 0 5 5 0;
  }

  .info-section {
    padding: 5px;
    margin: 5px;
  }
}
</style>
