<script setup lang="ts">
import VideoPlayer from './VideoPlayer.vue'
</script>

<template>
  <v-carousel class="container" hide-delimiters style="height: 100%" show-arrows="hover">
    <v-window-item>
      <VideoPlayer />
    </v-window-item>
    <v-window-item>
      <VideoPlayer />
    </v-window-item>
    <v-window-item>
      <VideoPlayer />
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
