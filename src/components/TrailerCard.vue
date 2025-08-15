<script setup lang="ts">
import VideoPlayer from './VideoPlayer.vue'
import type { FilmDB } from '@/types'
const props = defineProps<{ films: FilmDB[] }>()
</script>

<template>
  <div>
    <div class="card-container" v-for="film in props.films" :key="film.id">
      <div class="card-content">
        <div class="movie">
          <div class="trailer">
            <VideoPlayer :film="film" />
          </div>
          <div class="movie-info">
            <h2>{{ film.englishTitle }} ({{ film.releaseDate }})</h2>
            <p>{{ film.summary }}</p>
          </div>
        </div>

        <div class="links">
          <a href="#">Trailer</a>
          <a href="#">Trailer</a>
          <a href="#">Trailer</a>
          <a href="#">Trailer</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-container {
  background-color: #b7b7a4;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 8px;
  overflow-x: hidden;
}

@media only screen and (max-width: 480px) {
  .card-container {
    display: flex;
    flex-direction: column;
    margin: 10px;
  }
  .card-content {
    display: flex;
    flex-direction: column;
  }

  .trailer {
    display: flex;
    flex-direction: column;
  }
  .movie-info {
    display: flex;
    flex-direction: column;
    padding: 5px;
    width: 100%;
    justify-content: center;
    text-align: justify;
  }

  .links {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    padding: 5px;
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
  .card-content {
    display: flex;
    flex-direction: column;
  }

  .trailer {
    display: flex;
    flex-direction: column;
  }

  .movie-info {
    display: flex;
    flex-direction: column;
    padding: 5px;
    width: 100%;
    justify-content: center;
    text-align: justify;
  }

  .links {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    padding: 5px;
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

  .trailer {
    display: flex;
    flex-direction: column;
  }

  .movie-info {
    display: flex;
    flex-direction: column;
    padding: 5px;
    width: 100%;
    justify-content: center;
    text-align: justify;
  }

  .links {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    padding: 5px;
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
    flex-direction: row;
  }

  .movie {
    width: 80%;
    padding: 10px;
  }

  .movie-info {
    padding: 10px;
    text-align: justify;
  }

  .links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 20%;
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
  a {
    padding-top: 20px;
  }
}

@media only screen and (min-width: 1025px) {
  .card-container {
    width: 80%;
    margin: auto;
    :10px;
    background-color: #b7b7a4;
    border-radius: 8px;
  }

  .card-content {
    display: flex;
    flex-direction: row;
  }

  .movie {
    width: 80%;
    padding: 10px;
  }

  .movie-info {
    padding: 10px;
    text-align: justify;
  }

  .links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 20%;
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
  a {
    padding-top: 20px;
  }
}
</style>
