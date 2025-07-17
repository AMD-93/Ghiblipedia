import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import WatchlistView from '@/views/WatchlistView.vue'
import BrowseView from '@/views/BrowseView.vue'
import NewsView from '@/views/NewsView.vue'
import ProfileView from '@/views/ProfileView.vue'
import FilmView from '@/views/FilmView.vue'
import { authGuard } from '@auth0/auth0-vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/watchlist', name: 'watchlist', component: WatchlistView, beforeEnter: authGuard },
  { path: '/browse', name: 'browse', component: BrowseView },
  { path: '/news', name: 'news', component: NewsView },
  { path: '/profile', name: 'profile', component: ProfileView, beforeEnter: authGuard },
  { path: '/api/movies/:movieId', name: 'film', component: FilmView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
