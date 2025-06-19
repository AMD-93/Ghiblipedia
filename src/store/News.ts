import { defineStore } from 'pinia'
import axios from 'axios'
import type { Article } from '@/types.ts'

export const useNewsStore = defineStore('articles', {
  state: (): { articles: Article[] } => ({
    articles: [],
  }),

  actions: {
    async fetchArticles() {
      try {
        const articles = await axios.get(
          'https://newsdata.io/api/1/latest?apikey=pub_7734b2f3d08f48df8de34daae204f5b9&q=pizza',
        )
        this.articles = articles.data.results
        console.log(articles)
      } catch (error) {
        alert(error)
        console.log(error)
      }
    },
  },
})
