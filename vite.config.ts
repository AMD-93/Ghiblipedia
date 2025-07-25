import path from 'path'

import { defineConfig } from 'vite'
import mkcert from 'vite-plugin-mkcert'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin

import vuetify from 'vite-plugin-vuetify'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools(), mkcert(), vuetify({ autoImport: true })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
