import path from 'path';

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: 'aaronVueProject2024/',
  // base: process.env.NODE_ENV === 'production' ? `/${process.env.REPOSITORY_NAME}/` : '/',
  build: {
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
        output: {
            manualChunks(id) {
                if (id.includes('node_modules')) {
                    return id.toString().split('node_modules/')[1].split('/')[0].toString();
                }
            }
        }
    }
},
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
