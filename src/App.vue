<script setup lang="ts">
import { ref } from 'vue'
import NavBar from './components/NavBar.vue'

const videos = ref(null)

fetch(
  'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLrMoWLZPWpBU8qR-2hp90obIEEAelORR1&key=AIzaSyCkeEknyIEzqzvAlqx677KxdAwkf0nKZd4',
)
  .then((response) => response.json())
  .then((data) => (videos.value = data))
console.log(videos)

// let videoSection = useTemplateRef('video-section')

// fetch(
//   'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLrMoWLZPWpBU8qR-2hp90obIEEAelORR1&key=AIzaSyCkeEknyIEzqzvAlqx677KxdAwkf0nKZd4',
// )
//   .then((res) => res.json())
//   .then((data) => {
//     data.items.forEach((el: { snippet: { title: string } }) => {
//       videoSection += el.snippet.title
//     })

//     console.log(data.items)
//     onMounted(() => {
//       videoSection.value?.focus()
//     })
//   })
</script>

<template>
  <NavBar />
  <RouterView />
  <section>
    <div>
      <!-- <p ref="video-section">{{ videoSection }}</p> -->
    </div>
    <div v-if="videos">
      <h1>{{ videos }}</h1>
    </div>
  </section>
</template>

<style>
body {
  background-color: #ffeee2;
}
</style>

continue at 1514 youtube
