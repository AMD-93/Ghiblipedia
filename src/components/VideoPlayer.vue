<script setup lang="ts">
import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
import 'vue-lite-youtube-embed/style.css'

// import { useYoutubeStore } from '@/store/YoutubeAPI'
// import { computed, onMounted } from 'vue'

// const store = useYoutubeStore()
// onMounted(() => {
//   store.fetchVideos()
// })

// const video = computed(() => store.videos[0])
</script>

<template>
  <!-- <div>
    <video :videos="[video]" controls></video>
  </div> -->

  <LiteYouTubeEmbed
    id="dQw4w9WgXcQ"
    title="Rick Astley - Never Gonna Give You Up (Official Music Video)"
  />
</template>

<style scoped>
video {
  width: 100%;
  border-radius: 8px;
}
</style>
