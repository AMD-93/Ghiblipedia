<script setup lang="ts">
import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
import 'vue-lite-youtube-embed/style.css'
import type { FilmDB } from '@/types'

const { film } = defineProps<{ isOpen: boolean; film: FilmDB }>()
</script>

<template>
  <!-- <div>
    <video :videos="[video]" controls></video>
  </div> -->

  <LiteYouTubeEmbed :id="film.trailerUrl" :title="film.englishTitle" />
</template>

<style scoped>
video {
  width: 100%;
  border-radius: 8px;
}
</style>
