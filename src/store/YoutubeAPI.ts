//this can be deleted if I don't figure out a way to populate trailerURL field in the DB movie objects through the YT API

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
