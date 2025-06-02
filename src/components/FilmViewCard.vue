<script setup lang="ts">
import type { Film } from '@/types.ts'

const props = defineProps<{ films: Film[] }>()
</script>

<template>
  <div class="container" v-for="(film, index) in props.films" :key="index">
    <h1>{{ film.title }} {{ film.year }}</h1>
    <h2>{{ film.originalTitle }}</h2>
    <p>{{ film.plot }}</p>
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
</style>
