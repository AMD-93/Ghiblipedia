<script setup lang="ts">
import { useFilmsStore } from '@/store/Films'
import { ref, onMounted, computed } from 'vue'
import TrailerCard from '@/components/TrailerCard.vue'
import CarouselComponent from '@/components/CarouselComponent.vue'
import type { FilmDB } from '@/types'

const store = useFilmsStore()
const randomFilmIndex = ref(0)

const carousel1 = ref([])
function randomizeCarousel1(films: FilmDB[], counter: number) {
  const randomized = films.slice().sort(() => Math.random() - 0.5)
  return randomized.slice(0, counter)
}
// const carouselTrailers = ref<FilmDB[][]>([[], []])

// function getRandomUniqueIndices(arrayLength: number, count: number): number[] {
//   const indices = Array.from({ length: arrayLength }, (_, i) => i)
//   for (let i = indices.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1))
//     ;[indices[i], indices[j]] = [indices[j], indices[i]]
//   }
//   return indices.slice(0, count)
// }

onMounted(() => {
  store.fetchFilms().then(() => {
    randomFilmIndex.value = Math.floor(Math.random() * store.films.length)
    const selected = randomizeCarousel1(store.films, 6)
    carousel1.value = selected.slice(0, 3)

    // const totalNeeded = 6
    // const indices = getRandomUniqueIndices(store.films.length, totalNeeded)
    // const trailers = indices.map((i) => store.films[i])
    // carouselTrailers.value = [trailers.slice(0, 3), trailers.slice(3, 6)]
  })
})

const film = computed(() => store.films[randomFilmIndex.value])
</script>

<template>
  <main v-if="film" class="container">
    <TrailerCard :films="[film]" />
    <div class="carousels">
      <div class="carousel-left">
        <CarouselComponent :films="carousel1" />
      </div>
      <!-- <div class="carousel-right">
        <CarouselComponent :film="film" />
      </div> -->
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

  .carousel-left :deep(.v-carousel),
  .carousel-right :deep(.v-carousel) {
    width: 100%;
    height: 100%;
  }

  .carousel-left :deep(video),
  .carousel-right :deep(video) {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
