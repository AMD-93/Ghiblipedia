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
        const res = await axios.get('https://ghiblipediaapi.onrender.com/api/movies')
        this.films = res.data
      } catch (error) {
        alert(error)
        console.log(error)
      }
    },
    async fetchFilmById(movieId: number) {
      console.log('fetchFilms called')

      try {
        const res = await axios.get(`https://ghiblipediaapi.onrender.com/api/movies/${movieId}`)
        this.films = [res.data] // store as an array for consistency
      } catch (error) {
        alert(error)
        console.log(error)
      }
    },
  },
})

// why is fetchFilms being called everytime, can I make it so that the function is called once (on mount?) and data is stored here so it's accessible whenever components ask for it? I don't want the function to be called everytime a page loads :/
