import { defineStore } from 'pinia'
import axios from 'axios'
import type { FilmDB } from '@/types.ts'

export const useFilmsStore = defineStore('films', {
  state: (): { films: FilmDB[] } => ({
    films: [],
  }),

  actions: {
    async fetchFilms() {
      console.log('fetchFilms called')

      try {
        const res = await axios.get('https://ghiblipediaapi.onrender.com/api/movies/')
        this.films = res.data
      } catch (error) {
        alert(error)
        console.log(error)
      }
    },
  },
})
