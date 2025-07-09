<script setup lang="ts">
import { useFilmsStore } from '@/store/Films'
import PostCard from '@/components/PostCard.vue'

const store = useFilmsStore()
function handleSubmit(englishTitle: string) {
  store.postNewFilm(englishTitle)
}
</script>
<template>
  <div>
    <h1>Post</h1>
    <PostCard @submit="handleSubmit" />
  </div>
</template>
