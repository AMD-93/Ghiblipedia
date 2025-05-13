<script setup lang="ts">
import { ref } from 'vue'
const input = ref('')
const films = ['My Neighbor Totoro', 'Princess Mononoke', 'Spirited Away']
function filteredList() {
  return films.filter((film) => film.toLowerCase().includes(input.value.toLowerCase()))
}
</script>

<template>
  <div class="container">
    <input type="text" v-model="input" placeholder="Search..." class="input" />
    <div class="items-container">
      <div class="items" v-for="film in filteredList()" :key="film">
        <p>{{ film }}</p>
      </div>
    </div>

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
