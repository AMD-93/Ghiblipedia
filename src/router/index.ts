import { createRouter, createWebHistory } from 'vue-router'
import { authGuard } from '@auth0/auth0-vue'

import HomeView from '../views/HomeView.vue'
import WatchlistView from '@/views/WatchlistView.vue'
import BrowseView from '@/views/BrowseView.vue'
import NewsView from '@/views/NewsView.vue'
import ProfileView from '@/views/ProfileView.vue'
import FilmView from '@/views/FilmView.vue'
import CreditsView from '@/views/CreditsView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/watchlist', name: 'watchlist', component: WatchlistView, beforeEnter: authGuard },
  { path: '/browse', name: 'browse', component: BrowseView },
  { path: '/news', name: 'news', component: NewsView },
  { path: '/profile', name: 'profile', component: ProfileView, beforeEnter: authGuard },
  { path: '/api/movies/:id', name: 'film', component: FilmView },
  { path: '/credits', name: 'credits', component: CreditsView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
