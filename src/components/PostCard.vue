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
