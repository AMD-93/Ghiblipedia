<script setup lang="ts">
import { ref } from 'vue'
import FilmCard from '@/components/FilmCard.vue'

const input = ref('')
const films = [
  {
    title: 'My Neighbor Totoro',
    year: '1988',
    plot: 'This acclaimed animated tale by director Hayao Miyazaki follows schoolgirl Satsuke and her younger sister, Mei, as they settle into an old country house with their father and wait for their mother to recover from an illness in an area hospital. As the sisters explore their new home, they encounter and befriend playful spirits in their house and the nearby forest, most notably the massive cuddly creature known as Totoro.',
    genres: 'genres',
    tags: 'tags',
  },
  {
    title: 'Spirited Away',
    year: '2001',
    plot: '10-year-old Chihiro moves with her parents to a new home in the Japanese countryside. After taking a wrong turn down a wooded path, Chihiro and her parents discover an amusement park with a stall containing an assortment of food. To her surprise, Chihiro´s parents begin eating and then transform into pigs. In this supernatural realm, Chihiro encounters a host of characters and endures labor in a bathhouse for spirits, awaiting a reunion with her parents.',
    genres: 'genres',
    tags: 'tags',
  },
  {
    title: 'Princess Mononoke',
    year: '1997',
    plot: 'A prince becomes involved in the struggle between a forest princess and the encroachment of mechanization.',
    genres: 'genres',
    tags: 'tags',
  },
  {
    title: 'Kiki´s Delivery Service',
    year: '1998',
    plot: '13-year-old Kiki moves to a seaside town with her talking cat, Jiji, to spend a year alone, in accordance with her village´s tradition for witches in training. After learning to control her broomstick, Kiki sets up a flying courier service and soon becomes a fixture in the community. But when the insecure young witch begins questioning herself and loses her magic abilities, she must overcome her self-doubt to get her powers back.',
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

    <div class="items" v-for="film in filteredList()" :key="film.title"></div>

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

  .items {
    padding: 0 10px 10px 0;
  }
}
</style>
