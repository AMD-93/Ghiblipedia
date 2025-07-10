import { defineStore } from 'pinia'
import axios from 'axios'
import type { FilmDB } from '@/types.ts'

export const useFilmsStore = defineStore('films', {
  state: (): { films: FilmDB[] } => ({
    films: [],
  }),

  actions: {
    async fetchFilms() {
      if (this.films.length > 0) {
        return
      }
      console.log('fetchFilms called')

      try {
        const res = await axios.get('https://ghiblipediaapi.onrender.com/api/movies')
        this.films = [res.data]
      } catch (error) {
        console.log(error)
      }
    },

    async fetchFilmById(movieId: FilmDB['movieId']) {
      console.log('fetchFilmById called')

      try {
        const res = await axios.get(`https://ghiblipediaapi.onrender.com/api/movies/${movieId}`)
        this.films = [res.data]
      } catch (error) {
        console.log(error)
      }
    },

    async postNewFilm(englishTitle: FilmDB['englishTitle']) {
      console.log(`postNewFilm called, adding ${englishTitle}`)

      try {
        const res = await axios.post(
          `https://ghiblipediaapi.onrender.com/api/movies/omdb/${englishTitle}`,
        )
        this.films = [res.data]
      } catch (error) {
        console.log(error)
      }
    },

    async editFilm(payload: Record<string, string>) {
      const { movieId, ...updateFields } = payload
      console.log('editFilm called')

      try {
        const res = await axios.put(
          `https://ghiblipediaapi.onrender.com/api/movies/${movieId}`,
          updateFields,
        )
        console.log(res.data)
      } catch (error) {
        console.log(error)
      }
    },
  },
})

// why is fetchFilms being called everytime, can I make it so that the function is called once (on mount?) and data is stored here so it's accessible whenever components ask for it? I don't want the function to be called everytime a page loads?? :/
