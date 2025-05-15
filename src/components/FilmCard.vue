<script setup lang="ts">
interface Film {
  title: string
  year: string
  plot: string
  genres: string
  tags: string
}

const props = defineProps<{ films: Film[] }>()
</script>

<template>
  <v-expansion-panels bg-color="#b7b7a4" color="#b7b7a4" elevation="5" multiple>
    <v-expansion-panel v-for="(film, index) in props.films" :key="index">
      <v-expansion-panel-title>{{ film.title }} ({{ film.year }})</v-expansion-panel-title>
      <v-expansion-panel-text>{{ film.plot }}</v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>

  <!-- <div class="card-container" v-for="(film, index) in props.films" :key="index">
    <div class="title-section">
      <h1>{{ film.title }}</h1>
    </div>
    <div class="info-section">
      <h3>{{ film.year }}</h3>
      <p>{{ film.plot }}</p>
    </div>
    <div class="categorize-section">
      <div class="genres-section">
        <h3>Genres</h3>
        <ul>
          <li>Genre 1</li>
          <li>Genre 2</li>
          <li>Genre 3</li>
        </ul>
      </div>
      <div class="tags-section">
        <h3>Tags</h3>
        <ul>
          <li>tag 1</li>
          <li>tag 2</li>
          <li>tag 3</li>
        </ul>
      </div>
    </div>
  </div> -->
</template>

<style>
.card-container {
  background-color: #b7b7a4;
  padding: 5px;
  margin: 20px;
  border-radius: 10px;
  height: calc(100% / 10);
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

/* .title-section {
  background-color: aliceblue;
}

.info-section {
  background-color: aqua;
}

.categorize-section {
  background-color: aquamarine;
}

.genres-section {
  background-color: beige;
}

.tags-section {
  background-color: bisque;
} */

@media only screen and (max-width: 480px) {
  .card-container {
    display: flex;
    flex-direction: column;
    padding: 5px;
    margin: 20px;
    border-radius: 10px;
  }
  .title-section {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 5px;
    margin: 0 5 5 0;
  }
  h2 {
    margin-left: 5px;
  }

  .info-section {
    padding: 5px;
    margin: 5px;
  }
  .categorize-section {
  }
  .genres-section {
    padding: 5px;
    margin: 5px;
  }
  .tags-section {
    padding: 5px;
    margin: 5px;
  }
}
@media only screen and (min-width: 481px) {
}
@media only screen and (min-width: 769px) {
}
@media only screen and (min-width: 992px) {
  .card-container {
    width: 80%;
    margin: auto;
    margin-top: 10px;
  }
}
@media only screen and (min-width: 1025px) {
  .card-container {
    width: 80%;
    margin: auto;
    margin-top: 10px;
  }
}
</style>
