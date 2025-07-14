<script setup lang="ts">
import { useFilmsStore } from '../store/Films'
import { ref, computed, onMounted } from 'vue'
import FilmCard from '@/components/FilmCard.vue'

const input = ref('')
const filmsStore = useFilmsStore()

onMounted(() => {
  filmsStore.fetchFilms()
})

const filmsStoreFilms = computed(() => {
  return filmsStore.films
})

const filteredList = computed(() => {
  return filmsStoreFilms.value.filter(
    (film) =>
      (film.englishTitle?.toLowerCase() || '').includes(input.value.toLowerCase()) ||
      (film.genre?.toLowerCase() || '').includes(input.value.toLowerCase()),
  )
})
</script>

<template>
  <div class="container">
    <input type="text" v-model="input" placeholder="Search films..." class="input" />

    <div class="search-results"><FilmCard :films="filteredList" /></div>

    <div class="error" v-if="input && !filteredList.length">
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

<style scoped>
input {
  color: #ffeee2;
  margin-top: 10px;
}

.genres-tags-container .genres-container,
.tags-container,
.error {
  box-shadow: 5px 5px 15px rgb(153, 153, 153);
  margin-bottom: 10px;
}

.error {
  background-color: #b7b7a4;
  margin: 10px;
  margin-top: 0;
  padding: 10px;
  border-radius: 8px;
}

@media only screen and (max-width: 480px) {
  .container {
    display: flex;
    flex-direction: column;
    margin: auto;
    max-width: 90%;
  }

  .input {
    background-color: #4a4d41;
    padding: 10px;
    border-radius: 8px;
  }

  .search-results {
    margin-top: 10px;
    max-width: 100%;
  }

  .genres-tags-container {
    display: flex;
    flex-direction: column;
    align-self: center;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .genres-container {
    background-color: #b7b7a4;
    padding: 10px;
    border-radius: 8px;
    margin-top: 10px;
  }
  .tags-container {
    background-color: #b7b7a4;
    padding: 10px;
    border-radius: 8px;
    margin-top: 10px;
  }
}

@media only screen and (min-width: 481px) {
  .container {
    display: flex;
    flex-direction: column;
    margin: auto;
    max-width: 90%;
  }

  .input {
    background-color: #4a4d41;
    padding: 10px;
    border-radius: 8px;
  }

  .search-results {
    margin-top: 10px;
    max-width: 100%;
  }

  .genres-tags-container {
    display: flex;
    flex-direction: column;
    align-self: center;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .genres-container {
    background-color: #b7b7a4;
    padding: 10px;
    border-radius: 8px;
    margin-top: 10px;
  }
  .tags-container {
    background-color: #b7b7a4;
    padding: 10px;
    border-radius: 8px;
    margin-top: 10px;
  }
}

@media only screen and (min-width: 769px) {
  .container {
    display: flex;
    flex-direction: column;
    margin: auto;
    max-width: 70%;
  }

  .input {
    background-color: #4a4d41;
    padding: 10px;
    border-radius: 8px;
  }

  .search-results {
    margin-top: 10px;
    max-width: 100%;
  }

  .genres-tags-container {
    display: flex;
    flex-direction: column;
    align-self: center;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .genres-container {
    background-color: #b7b7a4;
    padding: 10px;
    border-radius: 8px;
    margin-top: 10px;
  }
  .tags-container {
    background-color: #b7b7a4;
    padding: 10px;
    border-radius: 8px;
    margin-top: 10px;
  }
}

@media only screen and (min-width: 992px) {
  .container {
    display: flex;
    flex-direction: column;
    margin: auto;
    max-width: 70%;
  }

  .input {
    background-color: #4a4d41;
    padding: 10px;
    border-radius: 8px;
  }

  .search-results {
    margin-top: 10px;
    max-width: 100%;
  }

  .genres-tags-container {
    display: flex;
    flex-direction: row;
    align-self: center;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .genres-container {
    background-color: #b7b7a4;
    padding: 10px;
    border-radius: 8px;
    margin-top: 10px;
    margin-right: 5px;
  }
  .tags-container {
    background-color: #b7b7a4;
    padding: 10px;
    border-radius: 8px;
    margin-top: 10px;
    margin-left: 5px;
  }
}

@media only screen and (min-width: 1025px) {
  .container {
    display: flex;
    flex-direction: column;
    margin: auto;
    max-width: 70%;
  }

  .input {
    background-color: #4a4d41;
    padding: 10px;
    border-radius: 8px;
  }

  .search-results {
    margin-top: 10px;
    max-width: 100%;
  }

  .genres-tags-container {
    display: flex;
    flex-direction: row;
    align-self: center;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .genres-container {
    background-color: #b7b7a4;
    padding: 10px;
    border-radius: 8px;
    margin-top: 10px;
    margin-right: 5px;
  }
  .tags-container {
    background-color: #b7b7a4;
    padding: 10px;
    border-radius: 8px;
    margin-top: 10px;
    margin-left: 5px;
  }
}
</style>
