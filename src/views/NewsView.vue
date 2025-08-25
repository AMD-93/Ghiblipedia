<script setup lang="ts">
import { useFilmsStore } from '@/store/Films'
import { onMounted, computed } from 'vue'
import CarouselComponent from '@/components/CarouselComponent.vue'
import NewsCard from '@/components/NewsCard.vue'

const store = useFilmsStore()

onMounted(() => {
  store.fetchFilms()
})

const film = computed(() => store.films[0])
</script>
<template>
  <div class="container-latest">
    <h1>Latest trailers</h1>
    <div><CarouselComponent :film="film" /></div>
  </div>
  <div class="container-upcoming">
    <h1>Upcoming releases</h1>
    <div>
      <CarouselComponent :film="film" />
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
