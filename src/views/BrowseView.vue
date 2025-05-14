<script setup lang="ts">
import { ref } from 'vue'
import FilmCard from '@/components/FilmCard.vue'
const input = ref('')
const films = [
  {
    title: 'My Neighbor Totoro',
    year: '1988',
    plot: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis leo sapien. Nullam vehicula consequat elit, ac vulputate purus finibus ut. Sed ante nibh, consequat eu rhoncus ac, euismod a nibh. Morbi tempus mi a rhoncus molestie. Donec scelerisque risus dignissim nisi mollis eleifend.',
    genres: 'genres',
    tags: 'tags',
  },
  {
    title: 'Spirited Away',
    year: '2001',
    plot: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis leo sapien. Nullam vehicula consequat elit, ac vulputate purus finibus ut. Sed ante nibh, consequat eu rhoncus ac, euismod a nibh. Morbi tempus mi a rhoncus molestie. Donec scelerisque risus dignissim nisi mollis eleifend.',
    genres: 'genres',
    tags: 'tags',
  },
  {
    title: 'Princess Mononoke',
    year: '1997',
    plot: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis leo sapien. Nullam vehicula consequat elit, ac vulputate purus finibus ut. Sed ante nibh, consequat eu rhoncus ac, euismod a nibh. Morbi tempus mi a rhoncus molestie. Donec scelerisque risus dignissim nisi mollis eleifend.',
    genres: 'genres',
    tags: 'tags',
  },
]
function filteredList() {
  return films.filter((film) =>
    [film.title, film.genres, film.tags].some((field) =>
      field.toLowerCase().includes(input.value.toLowerCase()),
    ),
  )
}
</script>

<template>
  <div class="container">
    <input type="text" v-model="input" placeholder="Search films..." class="input" />
    <div class="items-container">
      <div class="items" v-for="film in filteredList()" :key="film.title"></div>
    </div>
    <FilmCard :films="filteredList()" />
    <div class="error" v-if="input && !filteredList().length">
      <p>No results found!</p>
    </div>
    <div class="genres-tags-container">
      <div class="genres-container">
        <p>Genres</p>
      </div>
      <div class="tags-container">
        <p>Tags</p>
      </div>
    </div>
  </div>
</template>

<style>
input {
  color: #ffeee2;
}
@media only screen and (max-width: 480px) {
  .container {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }

  .input {
    background-color: #4a4d41;
    padding: 10px;
    border-radius: 10px;
    margin: 10px;
    margin-bottom: 3px;
  }

  .items-container {
    background-color: #b7b7a4;
    padding: 10px;
    border-radius: 10px;
    margin: 10px;
  }

  .items {
    padding: 0 10px 10px 0;
  }
  .genres-container {
    background-color: #b7b7a4;
    padding: 10px;
    border-radius: 10px;
    margin: 10px;
  }
  .tags-container {
    background-color: #b7b7a4;
    padding: 10px;
    border-radius: 10px;
    margin: 10px;
  }
}
@media only screen and (min-width: 481px) {
  .container {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }

  .input {
    background-color: #4a4d41;
    padding: 10px;
    border-radius: 10px;
    margin: 10px;
    margin-bottom: 3px;
  }

  .items-container {
    background-color: #b7b7a4;
    padding: 10px;
    border-radius: 10px;
    margin: 10px;
  }

  .items {
    padding: 0 10px 10px 0;
  }
  .genres-container {
    background-color: #b7b7a4;
    padding: 10px;
    border-radius: 10px;
    margin: 10px;
  }
  .tags-container {
    background-color: #b7b7a4;
    padding: 10px;
    border-radius: 10px;
    margin: 10px;
  }
}
@media only screen and (min-width: 769px) {
  .container {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }

  .input {
    background-color: #4a4d41;
    padding: 10px;
    border-radius: 10px;
    margin: 10px;
    margin-bottom: 3px;
  }

  .items-container {
    background-color: #b7b7a4;
    padding: 10px;
    border-radius: 10px;
    margin: 10px;
  }

  .items {
    padding: 0 10px 10px 0;
  }
  .genres-container {
    width: 100%;
  }
  .tags-container {
    width: 100%;
  }
  .genres-tags-container {
    display: flex;
    flex-direction: row;
  }
}
@media only screen and (min-width: 992px) {
  .container {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }

  .input {
    background-color: #4a4d41;
    padding: 10px;
    border-radius: 10px;
    margin: 10px;
    margin-bottom: 3px;
  }

  .items-container {
    background-color: #b7b7a4;
    padding: 10px;
    border-radius: 10px;
    margin: 10px;
  }

  .items {
    padding: 0 10px 10px 0;
  }
}
@media only screen and (min-width: 1025px) {
  .container {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }

  .input {
    background-color: #4a4d41;
    padding: 10px;
    border-radius: 10px;
    margin: 10px;
    margin-bottom: 3px;
  }

  .items-container {
    background-color: #b7b7a4;
    padding: 10px;
    border-radius: 10px;
    margin: 10px;
  }

  .items {
    padding: 0 10px 10px 0;
  }
}
</style>
