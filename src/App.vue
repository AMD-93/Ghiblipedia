<script setup lang="ts">
import NavBar from './components/NavBar.vue'
let videoSection = document.querySelector('section')
fetch(
  'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLrMoWLZPWpBU8qR-2hp90obIEEAelORR1&key=AIzaSyCkeEknyIEzqzvAlqx677KxdAwkf0nKZd4',
)
  .then((res) => res.json())
  .then((data) => {
    data.items.forEach((el: { snippet: { title: string } }) => {
      videoSection += el.snippet.title
    })

    console.log(data.items)
  })
</script>

<template>
  <NavBar />
  <RouterView />
  <section>
    <div>
      {{ videoSection }}
    </div>
  </section>
</template>

<style>
body {
  background-color: #ffeee2;
}
</style>
