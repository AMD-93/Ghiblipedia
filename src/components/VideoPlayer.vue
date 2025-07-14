<script setup lang="ts">
// import videoSrc from '@/assets/278750_tiny.mp4'
import { useYoutubeStore } from '@/store/YoutubeAPI'
import { computed, onMounted } from 'vue'

const store = useYoutubeStore()
onMounted(() => {
  store.fetchVideos()
})

const video = computed(() => store.videos[0])
</script>

<template>
  <div>
    <video :videos="[video]" controls></video>
  </div>
</template>

<style scoped>
video {
  width: 100%;
  border-radius: 8px;
}
</style>
