<script setup lang="ts">
import { ref } from 'vue'
import FilmCard from '@/components/FilmCard.vue'

const input = ref('')
//Films here, replace with DB stuff later (maybe in a separate file?)
const films = [
  {
    id: 1,
    title: 'My Neighbor Totoro',
    originalTitle: 'となりのトトロ, Tonari no Totoro',
    year: '1988',
    plot: 'This acclaimed animated tale by director Hayao Miyazaki follows schoolgirl Satsuke and her younger sister, Mei, as they settle into an old country house with their father and wait for their mother to recover from an illness in an area hospital. As the sisters explore their new home, they encounter and befriend playful spirits in their house and the nearby forest, most notably the massive cuddly creature known as Totoro.',
    genres: 'genres',
    tags: 'tags',
  },
  {
    id: 2,
    title: 'Spirited Away',
    originalTitle: '千と千尋の神隠し, Sen to Chihiro no Kamikakushi',
    year: '2001',
    plot: "10-year-old Chihiro moves with her parents to a new home in the Japanese countryside. After taking a wrong turn down a wooded path, Chihiro and her parents discover an amusement park with a stall containing an assortment of food. To her surprise, Chihiro's parents begin eating and then transform into pigs. In this supernatural realm, Chihiro encounters a host of characters and endures labor in a bathhouse for spirits, awaiting a reunion with her parents.",
    genres: 'genres',
    tags: 'tags',
  },
  {
    id: 3,
    title: 'Princess Mononoke',
    originalTitle: 'もののけ姫, Mononoke-hime',
    year: '1997',
    plot: 'A prince becomes involved in the struggle between a forest princess and the encroachment of mechanization.',
    genres: 'genres',
    tags: 'tags',
  },
  {
    id: 4,
    title: "Kiki's Delivery Service",
    originalTitle: '魔女の宅急便, Majo no Takkyūbin',
    year: '1998',
    plot: "13-year-old Kiki moves to a seaside town with her talking cat, Jiji, to spend a year alone, in accordance with her village's tradition for witches in training. After learning to control her broomstick, Kiki sets up a flying courier service and soon becomes a fixture in the community. But when the insecure young witch begins questioning herself and loses her magic abilities, she must overcome her self-doubt to get her powers back.",
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

    <p>why is this not working? -> {{ $route.params.id }}</p>
    <div class="search-results"><FilmCard :films="filteredList()" /></div>

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
