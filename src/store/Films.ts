import { defineStore } from 'pinia'
import axios from 'axios'
import type { FilmDB } from '@/types.ts'

export const useFilmsStore = defineStore('films', {
  state: (): { films: FilmDB[] } => ({
    films: [],
  }),

  actions: {
    async fetchFilms() {
      try {
        const films = await axios.get('https://ghiblipediaapi.onrender.com/api/movies/')
        this.films = films.data.results
        console.log(films)
      } catch (error) {
        alert(error)
        console.log(error)
      }
    },
  },
})
