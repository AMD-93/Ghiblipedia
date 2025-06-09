<script setup lang="ts">
import videoSrc from '@/assets/278750_tiny.mp4'
</script>

<template>
  <div>
    <video :src="videoSrc" controls></video>
  </div>
</template>

<style scoped>
video {
  width: 100%;
  border-radius: 8px;
}
</style>
