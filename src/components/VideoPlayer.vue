<script setup lang="ts">
import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
import 'vue-lite-youtube-embed/style.css'
import type { FilmDB } from '@/types'

const { film } = defineProps<{ film: FilmDB }>()

// figure out how to style this
// https://github.com/wobsoriano/vue-lite-youtube-embed/tree/master
</script>

<template>
  <LiteYouTubeEmbed :id="film.trailerUrl" :title="film.englishTitle" />
</template>

<style scoped></style>
