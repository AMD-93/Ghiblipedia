<script setup lang="ts">
import { useFilmsStore } from '@/store/Films'
import { onMounted, computed, ref } from 'vue'
import CarouselComponent from '@/components/CarouselComponent.vue'
import NewsCard from '@/components/NewsCard.vue'
import type { FilmDB } from '@/types'

const store = useFilmsStore()
const randomFilmIndex = ref(0)
const films = ref<FilmDB[]>([])
const carousel1 = ref<FilmDB[]>([])
const carousel2 = ref<FilmDB[]>([])

onMounted(async () => {
  await store.fetchFilmById(id: FilmDB['id'])
  films.value = store.films

  randomFilmIndex.value = Math.floor(Math.random() * store.films.length)

  const shuffled = films.value.slice().sort(() => Math.random() - 0.5)
  carousel1.value = shuffled.slice(0, 3)
  carousel2.value = shuffled.slice(3, 6)
})

const film = computed(() => store.films[randomFilmIndex.value])
</script>
<template>
  <div class="container-latest">
    <h1>Latest trailers</h1>
    <div><CarouselComponent v-if="film" :films="[film]" /></div>
  </div>
  <div class="container-upcoming">
    <h1>Upcoming releases</h1>
    <div>
      <CarouselComponent v-if="film" :films="[film]" />
    </div>
  </div>

  <div class="container-news">
    <NewsCard />
  </div>
</template>
<style scoped>
@media only screen and (max-width: 480px) {
  .container-latest,
  .container-upcoming,
  .container-news {
    display: flex;
    flex-direction: column;
    margin: 10px;
    max-width: 100%;
    padding: 20px;
    background-color: #b7b7a4;
    border-radius: 8px;
  }
  h1 {
    font-size: larger;
    padding-bottom: 5px;
  }
}

@media only screen and (min-width: 481px) {
  .container-latest,
  .container-upcoming,
  .container-news {
    display: flex;
    flex-direction: column;
    margin: 10px;
    max-width: 100%;
    padding: 20px;
    background-color: #b7b7a4;
    border-radius: 8px;
  }
  h1 {
    font-size: larger;
    padding-bottom: 5px;
  }
}

@media only screen and (min-width: 769px) {
  .container-latest,
  .container-upcoming,
  .container-news {
    display: flex;
    flex-direction: column;
    margin: 5px auto;
    max-width: 80%;
    padding: 20px;
    background-color: #b7b7a4;
    border-radius: 8px;
  }
  h1 {
    font-size: larger;
    padding-bottom: 5px;
  }
}

@media only screen and (min-width: 992px) {
  .container-latest,
  .container-upcoming,
  .container-news {
    display: flex;
    flex-direction: column;
    margin: 10px auto;
    max-width: 80%;
    padding: 20px;
    background-color: #b7b7a4;
    border-radius: 8px;
  }
  h1 {
    font-size: larger;
    padding-bottom: 5px;
  }
}

@media only screen and (min-width: 1025px) {
  .container-latest,
  .container-upcoming,
  .container-news {
    display: flex;
    flex-direction: column;
    margin: 10px auto;
    max-width: 80%;
    padding: 20px;
    background-color: #b7b7a4;
    border-radius: 8px;
  }
  h1 {
    font-size: larger;
    padding-bottom: 5px;
  }
}
</style>
