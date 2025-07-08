<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useFilmsStore } from '@/store/Films'
import { onMounted, computed } from 'vue'
import TrailerCard from '@/components/TrailerCard.vue'
import CarouselComponent from '@/components/CarouselComponent.vue'

const route = useRoute()
const store = useFilmsStore()

const movieId = Number(route.params.movieId)

onMounted(() => {
  store.fetchFilmById(movieId)
})

const film = computed(() => store.films[0])
</script>

<template>
  <main>
    <TrailerCard v-if="film" :films="[film]" />
    <div class="carousels">
      <div class="carousel-left"><CarouselComponent /></div>
      <div class="carousel-right"><CarouselComponent /></div>
    </div>
  </main>
</template>

<style scoped>
.carousels {
  padding-top: 10px;
}
@media only screen and (max-width: 480px) {
  .carousels {
    display: flex;
    flex-direction: column;
    margin: 10px;
    padding-top: 10px;
  }
}

@media only screen and (min-width: 481px) {
  .carousels {
    display: flex;
    flex-direction: column;
    margin: 10px;
    padding-top: 10px;
  }
}

@media only screen and (min-width: 769px) {
  .carousels {
    display: flex;
    flex-direction: column;
    margin: 0;
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
