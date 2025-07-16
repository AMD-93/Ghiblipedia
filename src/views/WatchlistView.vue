<script setup lang="ts">
import { useFilmsStore } from '@/store/Films'
import PostCard from '@/components/PostCard.vue'

const store = useFilmsStore()

function handleSubmit(englishTitle: string) {
  store.postNewFilm(englishTitle)
}
</script>
<template>
  <div class="body">
    <div>
      <PostCard @submit="handleSubmit" />
    </div>
  </div>
</template>
<style scoped>
.body {
  margin-top: 20px;
}
</style>
