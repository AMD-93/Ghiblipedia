<script setup lang="ts">
import { ref } from 'vue'

const englishTitle = ref('')
const emit = defineEmits(['submit'])

const submit = () => {
  emit('submit', englishTitle.value)
}
</script>
<template><input v-model="englishTitle" /> <button @click="submit">Submit</button></template>
