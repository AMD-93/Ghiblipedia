<script setup lang="ts">
import { defineProps, defineEmits, ref, reactive } from 'vue'
import { onClickOutside } from '@vueuse/core'
import type { FilmDB } from '@/types'

const { isOpen, films } = defineProps<{ isOpen: boolean; films: FilmDB[] }>()

const emit = defineEmits(['modal-close', 'submit'])

const target = ref(null)
onClickOutside(target, () => emit('modal-close'))

//commented out bunch of props that should probably be read-only
const form = reactive({
  // englishTitle: '',
  japaneseTitle: '',
  // releaseDate: '',
  // imageUrl: '',
  trailerUrl: '',
  summary: '',
  plot: '',
  // director: '',
  genre: '',
  // runningTime: '',
  tags: [''],
})

const submit = () => {
  const payload = Object.fromEntries(Object.entries(form).filter(([, value]) => value !== ''))
  emit('submit', payload)
}
</script>

<template>
  <div v-if="isOpen" class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container" ref="target">
        <div v-for="film in films" :key="film.movieId" class="modal-header">
          <slot name="header">
            <h1>
              Edit <span>{{ film.englishTitle }}</span>
            </h1>
          </slot>
        </div>
        <div class="modal-body">
          <slot name="content">
            <div class="form-container">
              <!-- <input v-model="form.englishTitle" placeholder="English title" /> -->
              <input v-model="form.japaneseTitle" placeholder="Japanese title" />
              <!-- <input v-model="form.releaseDate" placeholder="Release date" /> -->
              <!-- <input v-model="form.imageUrl" placeholder="Image URL" /> -->
              <input v-model="form.trailerUrl" placeholder="Trailer URL" />
              <input v-model="form.summary" placeholder="Summary" />
              <input v-model="form.plot" placeholder="Plot" />
              <!-- <input v-model="form.director" placeholder="Director" /> -->
              <input v-model="form.genre" placeholder="Genres" />
              <!-- <input v-model="form.runningTime" placeholder="Running time" /> -->
              <input v-model="form.tags" placeholder="Tags" />
              <button @click="submit">Submit</button>
            </div>
          </slot>
        </div>
        <!-- <div class="modal-footer">
          <slot name="footer">
            <div>
              <button @click.stop="emit('modal-close')">Submit</button>
            </div>
          </slot>
        </div> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-container {
  max-width: 80%;
  margin: 150px auto;
  padding: 20px 30px;
  background-color: #ddddc7;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}

.modal-header {
  padding: 10px;
  margin-bottom: 5px;
}
.modal-body {
}

.form-container {
  display: flex;
  flex-direction: column;
}

h1 {
  font-size: x-large;
  font-weight: normal;
  padding-top: 10px;
}

span {
  font-style: italic;
}

input {
  border: 2px #818174 solid;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
}

input::placeholder {
  opacity: 0.6;
  color: black;
}

button {
  background-color: #868678;
  color: black;
  border-radius: 8px;
  padding: 10px;
  margin-top: 10px;
}
</style>
