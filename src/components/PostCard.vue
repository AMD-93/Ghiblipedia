<script setup lang="ts">
// import type { FilmDB } from '@/types.ts'
// import { useFilmsStore } from '@/store/Films';
// import { onMounted, computed } from 'vue'

// const store = useFilmsStore()
// onMounted(() => {
//   store.postNewFilm(englishTitle)
// })

// const film = computed(() => store.films[0])

import { ref } from 'vue'

const englishTitle = ref('')
const emit = defineEmits(['submit'])

const submit = () => {
  emit('submit', englishTitle.value)
}

// user inputs film title and presses submit -> form data gets passed to POST request as a parameter (?) and gets appended to the URL (???) -> axios sends request and somehow populates DB (idk how this part happens tho but it doesn't matter I guess, backend stuff) confusion of the highest ordah
// how do I make this happen? do I need lifecycle hooks at all or nah, string literals, what else?
// https://medium.com/@reginafrankjames30/requests-with-vuejs-and-axios-b8a9ea682f64 this might be something
</script>
<template><input v-model="englishTitle" /> <button @click="submit">Submit</button></template>
