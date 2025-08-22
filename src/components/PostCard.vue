<script setup lang="ts">
import { ref } from 'vue'

const englishTitle = ref('')
const emit = defineEmits(['submit'])

const submit = () => {
  emit('submit', englishTitle.value)
}
</script>

<template>
  <div class="form-container">
    <h1>Add film</h1>
    <input v-model="englishTitle" placeholder="English title" />
    <button @click="submit">Submit</button>
  </div>
</template>
<style scoped>
@media only screen and (max-width: 480px) {
  .form-container {
    display: flex;
    flex-direction: column;
    background-color: #b7b7a4;
    border-radius: 8px;
    margin: 10px;
    padding: 10px;
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
}

@media only screen and (min-width: 481px) {
  .form-container {
    display: flex;
    flex-direction: column;
    background-color: #b7b7a4;
    border-radius: 8px;
    margin: 10px;
    padding: 10px;
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
}

@media only screen and (min-width: 769px) {
  .form-container {
    display: flex;
    flex-direction: column;
    background-color: #b7b7a4;
    border-radius: 8px;
    margin: 5px auto;

    padding: 10px;
    max-width: 80%;
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
}

@media only screen and (min-width: 992px) {
  .form-container {
    display: flex;
    flex-direction: column;
    background-color: #b7b7a4;
    border-radius: 8px;
    margin: 10px auto;
    padding: 10px;
    max-width: 80%;
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
}

@media only screen and (min-width: 1025px) {
}
</style>
