<script setup lang="ts">
import VideoPlayer from './VideoPlayer.vue'
import type { FilmDB } from '@/types'

const { films } = defineProps<{ films: FilmDB[] }>()
</script>

<template>
  <v-carousel class="container" hide-delimiters style="height: 100%" show-arrows="hover">
    <v-window-item v-for="film in films" :key="film.id">
      <VideoPlayer :film="film" />
    </v-window-item>
  </v-carousel>
</template>

<style scoped>
.container {
  margin: auto;
}
</style>
