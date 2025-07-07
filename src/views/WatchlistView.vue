<script setup lang="ts">
// import axios from 'axios'
// import type { FilmDB } from '@/types.ts'
// import { defineStore } from 'pinia'
// import type { ComponentInternalInstance } from 'vue'

// user inputs film title and presses submit -> form data gets passed to POST request as a parameter (?) and gets appended to the URL (???) -> axios sends request and somehow populates DB (idk how this part happens tho)
// how do I make this happen? do I need lifecycle hooks at all or nah, string literals, what else?
// https://medium.com/@reginafrankjames30/requests-with-vuejs-and-axios-b8a9ea682f64 this might be something

// function onUpdated(callback: () => void, target?: ComponentInternalInstance | null): void)

// export const useFilmsStore = defineStore('films', {
//   state: (): { films: FilmDB[] } => ({
//     films: [],
//   }),

//   actions: {
//     async postFilm(filmTitle: string) {
//       console.log('postFilm called')

//       try {

//         const newFilm = await axios.post(`https://ghiblipediaapi.onrender.com/api/movies/omdb/${filmTitle}`)
//         this.films = newFilm.data
//       } catch (error) {
//         console.log(error)
//       }
//     },
//   },
// })
</script>
<template>
  <div>watchlist</div>
  <input type="submit" id="filmTitle" name="Film title" value="Add film" />
</template>
