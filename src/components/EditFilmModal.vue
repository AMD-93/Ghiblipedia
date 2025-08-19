<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
import { onClickOutside } from '@vueuse/core'
import type { FilmDB } from '@/types'

const { isOpen, film } = defineProps<{ isOpen: boolean; film: FilmDB }>()

const emit = defineEmits(['modal-close', 'submit'])

const target = ref(null)
onClickOutside(target, () => emit('modal-close'))

const form = reactive({
  japaneseTitle: '',
  trailerUrl: '',
  summary: '',
  plot: '',
  genre: '',
  tags: [''],
})

watch(
  () => film,
  (newFilm) => {
    Object.assign(form, {
      japaneseTitle: newFilm.japaneseTitle || '',
      trailerUrl: newFilm.trailerUrl || '',
      summary: newFilm.summary || '',
      plot: newFilm.plot || '',
      genre: newFilm.genre || '',
      tags: newFilm.tags || [''],
    })
  },
  { immediate: true },
)

const handleSubmit = () => {
  const filtered = Object.fromEntries(Object.entries(form).filter(([, value]) => value !== ''))

  const payload = {
    ...filtered,
    id: film.id,
  }
  emit('submit', payload)
}
</script>

<template>
  <div v-if="isOpen" class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container" ref="target">
        <div class="modal-header">
          <slot name="header">
            <h1>
              Edit <span>{{ film.englishTitle }}</span>
            </h1>
          </slot>
        </div>
        <div class="modal-body">
          <slot name="content">
            <div class="form-container">
              <input v-model="form.japaneseTitle" placeholder="Japanese title" />
              <input v-model="form.trailerUrl" placeholder="Trailer URL" />
              <input v-model="form.summary" placeholder="Summary" />
              <input v-model="form.plot" placeholder="Plot" />
              <input v-model="form.genre" placeholder="Genres" />
              <input v-model="form.tags" placeholder="Tags" />
            </div>
          </slot>
          <button @click="handleSubmit">Submit</button>
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
@media only screen and (max-width: 480px) {
  .modal-mask {
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .modal-container {
    max-width: 100%;
    margin: 60px 10px 0px 10px;
    padding: 10px;
    background-color: #ddddc7;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
  }

  .modal-header {
    padding: 10px 0px 10px 1px;
  }

  .modal-body {
    display: flex;
    flex-direction: column;
  }

  .form-container {
    display: flex;
    flex-direction: column;
    padding-bottom: 5px;
  }

  h1 {
    font-size: 20px;
    font-weight: normal;
  }

  span {
    font-style: italic;
  }

  input {
    border: 1px #818174 solid;
    border-radius: 8px;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 15px;
  }

  input::placeholder {
    opacity: 0.6;
    color: black;
  }

  button {
    width: 100%;
    background-color: #868678;
    color: black;
    border-radius: 8px;
    padding: 10px;
    font-size: 15px;
  }
}
@media only screen and (min-width: 481px) {
  .modal-mask {
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .modal-container {
    max-width: 100%;
    margin: 60px 10px 0px 10px;
    padding: 10px;
    background-color: #ddddc7;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
  }

  .modal-header {
    padding: 10px 0px 10px 1px;
  }

  .modal-body {
    display: flex;
    flex-direction: column;
  }

  .form-container {
    display: flex;
    flex-direction: column;
    padding-bottom: 5px;
  }

  h1 {
    font-size: 20px;
    font-weight: normal;
  }

  span {
    font-style: italic;
  }

  input {
    border: 1px #818174 solid;
    border-radius: 8px;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 15px;
  }

  input::placeholder {
    opacity: 0.6;
    color: black;
  }

  button {
    width: 100%;
    background-color: #868678;
    color: black;
    border-radius: 8px;
    padding: 10px;
    font-size: 15px;
  }
}
@media only screen and (min-width: 769px) {
  .modal-mask {
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .modal-container {
    max-width: 80%;
    margin: 60px auto;
    padding: 10px;
    background-color: #ddddc7;
    border-radius: 8px;
  }

  .modal-header {
    padding: 10px;
    margin-bottom: 5px;
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
    border: 1px #818174 solid;
    border-radius: 8px;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 15px;
  }

  input::placeholder {
    opacity: 0.6;
    color: black;
  }

  button {
    width: 100%;
    background-color: #868678;
    color: black;
    border-radius: 8px;
    padding: 10px;
    font-size: 15px;
  }
}
@media only screen and (min-width: 992px) {
  .modal-mask {
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .modal-container {
    max-width: 80%;
    margin: 60px auto;
    padding: 10px;
    background-color: #ddddc7;
    border-radius: 8px;
  }

  .modal-header {
    padding: 10px;
    margin-bottom: 5px;
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
    border: 1px #818174 solid;
    border-radius: 8px;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 15px;
  }

  input::placeholder {
    opacity: 0.6;
    color: black;
  }

  button {
    width: 100%;
    background-color: #868678;
    color: black;
    border-radius: 8px;
    padding: 10px;
    font-size: 15px;
  }
}
@media only screen and (min-width: 1025px) {
  .modal-mask {
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .modal-container {
    max-width: 80%;
    margin: 60px auto;
    padding: 10px;
    background-color: #ddddc7;
    border-radius: 8px;
  }

  .modal-header {
    padding: 10px;
    margin-bottom: 5px;
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
    border: 1px #818174 solid;
    border-radius: 8px;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 15px;
  }

  input::placeholder {
    opacity: 0.6;
    color: black;
  }

  button {
    width: 100%;
    background-color: #868678;
    color: black;
    border-radius: 8px;
    padding: 10px;
    font-size: 15px;
  }
}
</style>
