<script setup lang="ts">
import { useRoute } from 'vue-router'

import FilmViewCard from '@/components/FilmViewCard.vue'
import { films } from '@/data'

const route = useRoute()
const filmId = Number(route.params.id)
const film = films.find((f) => f.id === filmId)
</script>

<template>
  <div>
    <FilmViewCard v-if="film" :films="[film]" />
    <div v-else>Film not found.</div>
  </div>
</template>

<style scoped></style>
