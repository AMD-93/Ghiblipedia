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
        console.log('fetchFilms called')
      } catch (error) {
        console.log(error)
      }
    },

    async fetchFilmById(movieId: FilmDB['movieId']) {
      try {
        const res = await axios.get(`https://ghiblipediaapi.onrender.com/api/movies/${movieId}`)
        this.films = [res.data]
        console.log('fetchFilmById called')
      } catch (error) {
        console.log(error)
      }
    },

    async postNewFilm(englishTitle: FilmDB['englishTitle']) {
      try {
        const res = await axios.post(
          `https://ghiblipediaapi.onrender.com/api/movies/omdb/${englishTitle}`,
        )
        this.films = res.data
        console.log(`postNewFilm called, adding ${englishTitle}`)
      } catch (error) {
        console.log(error)
      }
    },

    async editFilm(payload: Record<string, string>, englishTitle: FilmDB['englishTitle']) {
      const { movieId, ...updateFields } = payload

      try {
        const res = await axios.put(
          `https://ghiblipediaapi.onrender.com/api/movies/${movieId}`,
          updateFields,
        )
        console.log(`editFilm called, editing ${englishTitle}`)

        console.log(res.data)
      } catch (error) {
        console.log(error)
      }
    },
  },
})
