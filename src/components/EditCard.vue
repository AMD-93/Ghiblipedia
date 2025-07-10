<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({
  englishTitle: '',
  japaneseTitle: '',
  releaseDate: '',
  imageUrl: '',
  trailerUrl: '',
  summary: '',
  plot: '',
  director: '',
  genre: '',
  runningTime: '',
  tags: '',
})

const emit = defineEmits(['submit'])

const submit = () => {
  const payload = Object.fromEntries(Object.entries(form).filter(([, value]) => value !== ''))
  emit('submit', payload)
}
</script>
<template>
  <div class="form-container">
    <h1>Edit film</h1>
    <input v-model="form.englishTitle" placeholder="English title" />
    <input v-model="form.japaneseTitle" placeholder="Japanese title" />
    <input v-model="form.releaseDate" placeholder="Release date" />
    <input v-model="form.imageUrl" placeholder="Image URL" />
    <input v-model="form.trailerUrl" placeholder="Trailer URL" />
    <input v-model="form.summary" placeholder="Summary" />
    <input v-model="form.plot" placeholder="Plot" />
    <input v-model="form.director" placeholder="Director" />
    <input v-model="form.genre" placeholder="Genres" />
    <input v-model="form.runningTime" placeholder="Running time" />
    <input v-model="form.tags" placeholder="Tags" />
    <button @click="submit">Submit</button>
  </div>
</template>
<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  background-color: #b7b7a4;
  box-shadow: 5px 5px 15px rgb(153, 153, 153);
  border-radius: 8px;
  margin: 10px;
  margin-bottom: 20px;
  padding: 10px;
  width: 70%;
  justify-self: center;
}
input {
  border: 1px #818174 solid;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
}

button {
  background-color: #868678;
  border-radius: 8px;
  padding: 10px;
}
</style>
