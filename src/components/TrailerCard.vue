<script setup lang="ts">
import { defineComponent } from 'vue'

interface Video {
  snippet: {
    title: string
    description: string
    resourceId: {
      videoId: string
    }
  }
}

interface ApiResponse {
  items: Video[]
}

defineComponent({
  data() {
    return {
      videoTitles: [] as string[],
      videoDescriptions: [] as string[],
    }
  },
})

import { ref } from 'vue'

const videos = ref<Video[]>([])
const videoTitles = ref<string[]>([])
const videoDescriptions = ref<string[]>([])

fetch(
  'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLrMoWLZPWpBU8qR-2hp90obIEEAelORR1&key=AIzaSyCkeEknyIEzqzvAlqx677KxdAwkf0nKZd4',
)
  .then((res) => res.json())
  .then((data: ApiResponse) => {
    videos.value = data.items // TypeScript now knows the structure of videos
    videoTitles.value = data.items.map((el: Video) => el.snippet.title)
    videoDescriptions.value = data.items.map((el: Video) => el.snippet.description)

    // console.log(videoTitles.value)
    // console.log(videoDescriptions.value)
  })
</script>

<template>
  <div>
    <div class="card-container">
      <div class="card-content">
        <div class="trailer">
          <div v-if="videos[0]" class="trailer-clip">
            <iframe
              :src="`https://www.youtube.com/embed/${videos[0].snippet.resourceId.videoId}`"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="movie-info">
            <h2>{{ videoTitles[0] }}</h2>
            <p>{{ videoDescriptions[0] }}</p>
          </div>
        </div>
        <div class="links">
          <a href="#">Trailer</a>
          <a href="#">Trailer</a>
          <a href="#">Trailer</a>
          <a href="#">Trailer</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media only screen and (max-width: 480px) {
  .card-container {
    display: flex;
    flex-direction: column;
    background-color: #b7b7a4;
    padding: 20px;
    box-sizing: border-box;
    width: 100%;
    overflow-x: hidden;
  }
  .card-content {
    display: flex;
    flex-direction: column;
  }

  .trailer {
    display: flex;
    flex-direction: column;
  }

  .trailer-clip {
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 56.25%;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
  .movie-info {
    display: flex;
    flex-direction: column;
    padding: 5px;
    width: 100%;
    justify-content: center;
    text-align: justify;
  }

  .links {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    padding: 5px;
  }

  h2 {
    font-size: 20px;
  }

  h3 {
    font-style: italic;
    font-size: 15px;
  }

  p {
    font-size: 13px;
  }
}

@media only screen and (min-width: 481px) {
  .card-container {
    display: flex;
    flex-direction: column;
    background-color: #b7b7a4;
    padding: 20px;
    box-sizing: border-box;
    width: 100%;
    overflow-x: hidden;
  }
  .card-content {
    display: flex;
    flex-direction: column;
  }

  .trailer {
    display: flex;
    flex-direction: column;
  }

  .trailer-clip {
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 56.25%;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
  .movie-info {
    display: flex;
    flex-direction: column;
    padding: 5px;
    width: 100%;
    justify-content: center;
    text-align: justify;
  }

  .links {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    padding: 5px;
  }

  h2 {
    font-size: 20px;
  }

  h3 {
    font-style: italic;
    font-size: 15px;
  }

  p {
    font-size: 13px;
  }
}

@media only screen and (min-width: 769px) {
  .card-container {
    display: flex;
    flex-direction: column;
    background-color: #b7b7a4;
    padding: 20px;
    box-sizing: border-box;
    width: 100%;
    overflow-x: hidden;
  }
  .card-content {
    display: flex;
    flex-direction: column;
  }

  .trailer {
    display: flex;
    flex-direction: column;
  }

  .trailer-clip {
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 56.25%;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
  .movie-info {
    display: flex;
    flex-direction: column;
    padding: 5px;
    width: 100%;
    justify-content: center;
    text-align: justify;
  }

  .links {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    padding: 5px;
  }

  h2 {
    font-size: 20px;
  }

  h3 {
    font-style: italic;
    font-size: 15px;
  }

  p {
    font-size: 13px;
  }
}

@media only screen and (min-width: 992px) {
  .card-container {
    display: flex;
    flex-direction: column;
    background-color: #b7b7a4;
    padding: 20px;
    box-sizing: border-box;
    width: 100%;
    overflow-x: hidden;
  }

  .card-content {
    display: flex;
    flex-direction: row;
  }

  .trailer {
    display: flex;
    flex-direction: row;
  }

  .trailer-clip {
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 56.25%;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
  .movie-info {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 70%;
    justify-content: center;
    text-align: justify;
  }

  .links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    width: 20%;
    padding: 1rem;
  }

  h2 {
    font-size: 20px;
  }

  h3 {
    font-style: italic;
    font-size: 15px;
  }

  p {
    font-size: 13px;
  }
}

@media only screen and (min-width: 1025px) {
  .card-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin: auto;
    padding: 1rem;
    background-color: #b7b7a4;
    border-radius: 10px;
  }

  .card-content {
    display: flex;
    width: auto;
    text-align: center;
  }

  .trailer {
    display: flex;
    flex-direction: row;
  }

  .trailer-clip {
    display: flex;
    width: 100%;
    padding-top: 56.25%;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 60%;
  }

  .movie-info {
    display: flex;
    flex-direction: column;
    padding: 30px;
    width: 70%;
    justify-content: center;
    text-align: justify;
  }

  .links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    width: 20%;
    padding: 1rem;
  }

  h2 {
    font-size: 20px;
  }

  h3 {
    font-style: italic;
    font-size: 15px;
  }

  p {
    font-size: 13px;
  }
}
</style>
