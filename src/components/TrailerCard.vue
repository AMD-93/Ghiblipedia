<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  originalTitle: {
    type: String,
    required: true,
  },
  plot: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
})
import { ref } from 'vue'

const videos = ref(null)

fetch(
  'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLrMoWLZPWpBU8qR-2hp90obIEEAelORR1&key=AIzaSyCkeEknyIEzqzvAlqx677KxdAwkf0nKZd4',
)
  .then((response) => response.json())
  .then((data) => {
    videos.value = data
    console.log(data)
    // add .items[0] to log only the first item (the boy and the heron)
  })

const videoTitles = ref('')
const videoDescriptions = ref('')

fetch(
  'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLrMoWLZPWpBU8qR-2hp90obIEEAelORR1&key=AIzaSyCkeEknyIEzqzvAlqx677KxdAwkf0nKZd4',
)
  .then((res) => res.json())
  .then((data) => {
    videoTitles.value = data.items
      .map((el: { snippet: { title: string } }) => el.snippet.title)
      .join(', ')
    videoDescriptions.value = data.items
      .map((el: { snippet: { description: string } }) => el.snippet.description)
      .join(', ')

    console.log(videoTitles.value, videoDescriptions.value)
  })
// how do I get the first item in the array?
</script>

<template>
  <div>
    <div class="card-container">
      <div class="card-content">
        <div class="trailer">
          <div class="trailer-clip">
            <video width="280" height="200" controls>
              <!-- <source src="movie.mp4" type="video/mp4" />
              <source src="movie.ogg" type="video/ogg" /> -->
              Your browser does not support the video tag.
            </video>
          </div>
          <div class="movie-info">
            <h2>{{ videoTitles }}</h2>
            <!-- <h3>{{ originalTitle }}</h3> -->
            <p>{{ videoDescriptions }}</p>
            <!-- <p>{{ year }}</p> -->
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
.card-container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: #b7b7a4;
  border-radius: 10px;
  padding: 1rem;
  margin: auto;
  margin-top: 1rem;
  width: 80%;
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
  padding: 1rem;
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
</style>
