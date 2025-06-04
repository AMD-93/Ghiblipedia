<script setup lang="ts">
import videoSrc from '@/assets/278750_tiny.mp4'
</script>

<template>
  <div>
    <video :src="videoSrc" controls style="width: 100%"></video>
  </div>
</template>

<style scoped>
video {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
  margin-bottom: 10px;
}
</style>
