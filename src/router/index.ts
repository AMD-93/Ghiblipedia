import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import WatchlistView from '@/views/WatchlistView.vue'
import BrowseView from '@/views/BrowseView.vue'
import NewsView from '@/views/NewsView.vue'
import SignInView from '@/views/SignInView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  // modify route for watchlist to route w/ guard + conditionally render component for logged in users only
  { path: '/watchlist', name: 'watchlist', component: WatchlistView },
  { path: '/browse', name: 'browse', component: BrowseView },
  { path: '/news', name: 'news', component: NewsView },
  { path: '/signin', name: 'signin', component: SignInView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
