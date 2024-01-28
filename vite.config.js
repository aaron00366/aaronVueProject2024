import path from 'path';

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // base: '/live-vue3-dashboard-vite/',
  base: process.env.NODE_ENV === 'production' ? `/${process.env.REPOSITORY_NAME}/` : '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
