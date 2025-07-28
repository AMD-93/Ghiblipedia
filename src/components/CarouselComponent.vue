<script setup lang="ts">
import VideoPlayer from './VideoPlayer.vue'
import type { FilmDB } from '@/types'

const { film } = defineProps<{ film: FilmDB }>()
</script>

<template>
  <v-carousel class="container" hide-delimiters style="height: 100%" show-arrows="hover">
    <v-window-item>
      <VideoPlayer :film="film" />
    </v-window-item>
    <v-window-item>
      <VideoPlayer :film="film" />
    </v-window-item>
    <v-window-item>
      <VideoPlayer :film="film" />
    </v-window-item>
  </v-carousel>
</template>

<style scoped>
.container {
  margin: auto;
}
@media only screen and (min-width: 769px) {
  .container {
    display: flex;
    flex-direction: column;
    margin: auto;
    justify-content: space-between;
    width: 70%;
  }
}
</style>
