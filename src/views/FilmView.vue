<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useFilmsStore } from '@/store/Films'
import { onMounted, computed } from 'vue'
import FilmViewCard from '@/components/FilmViewCard.vue'

const route = useRoute()
const store = useFilmsStore()

const movieId = Number(route.params.movieId)

onMounted(() => {
  store.fetchFilmById(movieId)
})

const film = computed(() => store.films[0])
</script>

<template>
  <div>
    <FilmViewCard v-if="film" :films="[film]" />
    <div v-else>Film not found.</div>
  </div>
</template>

<style scoped></style>
