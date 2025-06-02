<script setup lang="ts">
import type { Film } from '@/types.ts'

const props = defineProps<{ films: Film[] }>()
</script>

<template>
  <div class="container" v-for="(film, index) in props.films" :key="index">
    <div class="header">
      <h1>{{ film.title }} ({{ film.year }})</h1>
    </div>
    <div class="subheader">
      <h2>{{ film.originalTitle }}</h2>
    </div>
    <div class="info">
      <p>{{ film.plot }}</p>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 20px;
  justify-self: center;
  background-color: #b7b7a4;
  box-shadow: 5px 5px 15px rgb(153, 153, 153);
  border-radius: 8px;
}

h1 {
  font-size: large;
  font-weight: normal;
  font-style: italic;
}

h2 {
  font-size: medium;
  font-weight: normal;
  font-style: italic;
  padding-bottom: 10px;
}

p {
  font-size: smaller;
}

@media only screen and (max-width: 480px) {
  .header {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 10px;
    margin: 0 5 5 0;
  }

  .info {
    padding: 5px;
  }
}
@media only screen and (min-width: 481px) {
  .header {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 10px;
    margin: 0 5 5 0;
  }

  .info {
    padding: 5px;
  }
}
@media only screen and (min-width: 769px) {
  .container {
    display: flex;
    flex-direction: column;
    align-self: center;
    margin-top: 10px;
    margin-bottom: 20px;
    max-width: 70%;
  }
  .header {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 10px;
    margin: 0;
  }

  .info {
    margin-top: 0px;
  }
}
@media only screen and (min-width: 992px) {
  .container {
    display: flex;
    flex-direction: column;
    align-self: center;
    margin-top: 10px;
    margin-bottom: 20px;
    max-width: 70%;
  }
  .header {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 10px;
    margin: 0;
    max-width: 100%;
  }

  .info {
    margin-top: 0px;
  }
}
@media only screen and (min-width: 1025px) {
  .container {
    display: flex;
    flex-direction: column;
    align-self: center;
    margin-top: 10px;
    margin-bottom: 20px;
    max-width: 70%;
  }
  .header {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .info {
    margin-top: 0px;
  }
}
</style>
