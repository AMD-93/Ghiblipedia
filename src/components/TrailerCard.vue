<script setup lang="ts">
import { defineComponent } from 'vue'
interface Video {
  snippet: {
    resourceId: {
      videoId: string
    }
  }
}

export default defineComponent({
  data() {
    return {
      videos: [] as Video[],
      videoTitles: [] as string[],
      videoDescriptions: [] as string[],
    }
  },
})

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

const videos = ref([])

fetch(
  'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLrMoWLZPWpBU8qR-2hp90obIEEAelORR1&key=AIzaSyCkeEknyIEzqzvAlqx677KxdAwkf0nKZd4',
)
  .then((response) => response.json())
  .then((data) => {
    videos.value = data.items
    console.dir(data)
  })

const videoTitles = ref<string[]>([])
const videoDescriptions = ref<string[]>([])

fetch(
  'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLrMoWLZPWpBU8qR-2hp90obIEEAelORR1&key=AIzaSyCkeEknyIEzqzvAlqx677KxdAwkf0nKZd4',
)
  .then((res) => res.json())
  .then((data) => {
    videoTitles.value = data.items.map((el: { snippet: { title: string } }) => el.snippet.title)

    videoDescriptions.value = data.items.map(
      (el: { snippet: { description: string } }) => el.snippet.description,
    )

    // console.log(videoTitles.value)
    // console.log(videoDescriptions.value)
  })
</script>

<template>
  <div>
    <div class="card-container">
      <div class="card-content">
        <div class="trailer">
          <div v-for="(video, index) in videos" :key="index" class="trailer-clip">
            <iframe
              :src="`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`"
              width="560"
              height="315"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <!-- <video width="280" height="200" controls>
              <source src="movie.mp4" type="video/mp4" />
              <source src="movie.ogg" type="video/ogg" />
              Your browser does not support the video tag.
            </video> -->
          </div>
          <div class="movie-info">
            <h2>{{ videoTitles[0] }}</h2>
            <!-- <h3>{{ originalTitle }}</h3> -->
            <p>{{ videoDescriptions[0] }}</p>
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
