<script setup lang="ts">
import { useFilmsStore } from '@/store/Films'
import { ref, onMounted, computed } from 'vue'
// import TrailerCard from '@/components/TrailerCard.vue'
import CarouselComponent from '@/components/CarouselComponent.vue'
import type { FilmDB } from '@/types'
import DataIterator from '@/components/DataIterator.vue'

const store = useFilmsStore()
const randomFilmIndex = ref(0)

const films = ref<FilmDB[]>([])
const carousel1 = ref<FilmDB[]>([])
const carousel2 = ref<FilmDB[]>([])

onMounted(async () => {
  await store.fetchFilms()
  films.value = store.films

  randomFilmIndex.value = Math.floor(Math.random() * store.films.length)

  const shuffled = films.value.slice().sort(() => Math.random() - 0.5)
  carousel1.value = shuffled.slice(0, 3)
  carousel2.value = shuffled.slice(3, 6)
})

const film = computed(() => store.films[randomFilmIndex.value])
</script>

<template>
  <main v-if="film" class="container">
    <!-- <TrailerCard :films="[film]" /> -->
    <DataIterator :films="films" />
    <div class="carousels">
      <div class="carousel-left">
        <CarouselComponent v-if="carousel1.length" :films="carousel1" />
      </div>
      <div class="carousel-right">
        <CarouselComponent v-if="carousel2.length" :films="carousel2" />
      </div>
    </div>
  </main>
</template>

<style scoped>
.container {
  margin-top: 10px;
}

@media only screen and (max-width: 480px) {
  .carousels {
    display: flex;
    flex-direction: column;
    margin: 10px;
  }
}

@media only screen and (min-width: 481px) {
  .carousels {
    display: flex;
    flex-direction: column;
    margin: 10px;
  }
}

@media only screen and (min-width: 769px) {
  .carousels {
    display: flex;
    flex-direction: column;
    max-width: 80%;
    margin: auto;
  }
}

@media only screen and (min-width: 992px) {
  .carousels {
    display: flex;
    flex-direction: row;
    margin: auto;
    max-width: 80%;
    justify-content: space-between;
  }

  .carousel-left,
  .carousel-right {
    width: 49%;
  }
}

@media only screen and (min-width: 1025px) {
  .carousels {
    display: flex;
    flex-direction: row;
    margin: auto;
    justify-content: space-between;
    max-width: 80%;
  }
  .carousel-left,
  .carousel-right {
    width: 49%;
  }
}
</style>
