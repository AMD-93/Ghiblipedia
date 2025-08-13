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
        const res = await axios.get('https://ghiblipediaapi.onrender.com/api/v1/movies')
        this.films = res.data
        console.log('fetchFilms called')
      } catch (error) {
        console.log(error)
      }
    },

    async fetchFilmById(id: FilmDB['id']) {
      try {
        const res = await axios.get(`https://ghiblipediaapi.onrender.com/api/v1/movies/${id}`)
        this.films = [res.data]
        console.log('fetchFilmById called')
      } catch (error) {
        console.log(error)
      }
    },

    async postNewFilm(englishTitle: FilmDB['englishTitle']) {
      try {
        const res = await axios.post(
          `https://ghiblipediaapi.onrender.com/api/v1/omdb/${englishTitle}`,
        )
        this.films = res.data
        console.log(`postNewFilm called, adding ${englishTitle}`)
      } catch (error) {
        console.log(error)
      }
    },

    async editFilm(payload: Record<string, string>, englishTitle: FilmDB['englishTitle']) {
      const { id, ...updateFields } = payload

      try {
        const res = await axios.put(
          `https://ghiblipediaapi.onrender.com/api/v1/movies/${id}`,
          updateFields,
        )
        console.log(`editFilm called, editing ${englishTitle}`)

        console.log(res.data)
      } catch (error) {
        console.log(error)
      }
    },

    async deleteFilm(englishTitle: FilmDB['englishTitle']) {
      try {
        const res = await axios.delete(
          `https://ghiblipediaapi.onrender.com/api/v1/movies/${englishTitle}`,
        )
        this.films = [res.data]
        console.log(`deleteFilm called, ${englishTitle} deleted`)
      } catch (error) {
        console.log(error)
      }
    },
  },
})
