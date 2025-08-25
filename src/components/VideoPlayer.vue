<script setup lang="ts">
import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
import 'vue-lite-youtube-embed/style.css'
import type { FilmDB } from '@/types'

const { film } = defineProps<{ film: FilmDB }>()
</script>

<template>
  <div class="wrapper"></div>
  <LiteYouTubeEmbed
    v-if="film"
    :id="film.trailerUrl"
    :title="film.englishTitle"
    poster="maxresdefault"
  />
</template>

<style>
article {
  border-radius: 8px;
}
</style>
