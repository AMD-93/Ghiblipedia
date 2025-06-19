<script setup lang="ts">
import { useNewsStore } from '@/store/News'
import { onMounted, computed } from 'vue'

const store = useNewsStore()

const articles = computed(() => {
  return store.articles
})
onMounted(() => {
  store.fetchArticles()
})
</script>

<template>
  <div class="hello">
    <h1>News</h1>
    <div v-for="article in articles" :key="article.id">
      <h2>{{ article.title }}</h2>
      <p>{{ article.pubDate }}</p>
      <p>{{ article.description }}</p>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: larger;
  padding-bottom: 5px;
}
h2 {
  font-size: medium;
  padding-bottom: 5px;
}
</style>
