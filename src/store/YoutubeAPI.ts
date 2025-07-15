import { defineStore } from 'pinia'
import axios from 'axios'
import type { YoutubeVideos } from '@/types'

export const useYoutubeStore = defineStore('videos', {
  state: (): { videos: YoutubeVideos[] } => ({
    videos: [],
  }),
  actions: {
    async fetchVideos() {
      const apikey = import.meta.env.VITE_YOUTUBE_API_KEY
      try {
        const res = await axios.get(
          `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLrMoWLZPWpBU8qR-2hp90obIEEAelORR1&key=${apikey}`,
        )
        this.videos = res.data
        console.log(this.videos)
        console.log('fetchVideos called')
      } catch (error) {
        console.log(error)
      }
    },
  },
})
// <script setup lang="ts">
// // keeping it here for clarity, probably not gonna be a component on its own

// import { ref } from 'vue'

// const videos = ref(null)

// fetch(
//   'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLrMoWLZPWpBU8qR-2hp90obIEEAelORR1&key=AIzaSyCkeEknyIEzqzvAlqx677KxdAwkf0nKZd4',
// )
//   .then((response) => response.json())
//   .then((data) => {
//     videos.value = data
//     console.log(data)
//   })

// const videoTitles = ref('')
// const videoDescriptions = ref('')

// fetch(
//   'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLrMoWLZPWpBU8qR-2hp90obIEEAelORR1&key=AIzaSyCkeEknyIEzqzvAlqx677KxdAwkf0nKZd4',
// )
//   .then((res) => res.json())
//   .then((data) => {
//     videoTitles.value = data.items
//       .map((el: { snippet: { title: string } }) => el.snippet.title)
//       .join(', ')
//     videoDescriptions.value = data.items
//       .map((el: { snippet: { description: string } }) => el.snippet.description)
//       .join(', ')

//     console.log(videoTitles.value, videoDescriptions.value)
//   })
// </script>

// <template>
//   <section>
//     <div>
//       <p>{{ videoTitles }}</p>
//       <p>{{ videoDescriptions }}</p>
//     </div>
//   </section>
// </template>

// <style>
// body {
//   background-color: #ffeee2;
// }
// </style>

// continue at 1514 youtube
