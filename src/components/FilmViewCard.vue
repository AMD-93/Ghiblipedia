<script setup lang="ts">
import miyazakiImg from '@/assets/miyazaki.jpg'
import VideoPlayer from './VideoPlayer.vue'

// const props = defineProps<{ films: Film[] }>()

import { useFilmsStore } from '@/store/Films'
import { onMounted, computed } from 'vue'

const store = useFilmsStore()

const films = computed(() => {
  return store.films
})
onMounted(() => {
  store.fetchFilms()
})
</script>

<template>
  <div v-for="film in films" :key="film.movieId">
    {{ film.englishTitle }}
  </div>

  <!-- <div class="container" v-for="(film, index) in props.films" :key="index">
    <div class="titles">
      <div class="header"> -->
  <img :src="miyazakiImg" alt="Hayao Miyazaki" />
  <!-- <h1>{{ film.title }} ({{ film.year }})</h1>
      </div>
      <div class="subheader">
        <h2>{{ film.originalTitle }}</h2>
        <p>{{ film.runningTime }} minutes</p>
        <p>{{ film.genres.join(', ') }}</p>
      </div>
    </div>

    <div class="info"> -->
  <VideoPlayer />
  <!-- <p>{{ film.plot }}</p>
      <p>Directed by {{ film.director }}</p>
    </div>
  </div> -->
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
