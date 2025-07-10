<script setup lang="ts">
import { useFilmsStore } from '@/store/Films'
import PostCard from '@/components/PostCard.vue'
import EditCard from '@/components/EditCard.vue'

const store = useFilmsStore()

function handleSubmit(englishTitle: string) {
  store.postNewFilm(englishTitle)
}

function handleEdit(payload: Record<string, string>) {
  store.editFilm(payload)
}
</script>
<template>
  <div class="body">
    <div>
      <PostCard @submit="handleSubmit" />
    </div>
    <div>
      <EditCard @submit="handleEdit" />
    </div>
  </div>
</template>
<style scoped>
.body {
  margin-top: 20px;
}
</style>
