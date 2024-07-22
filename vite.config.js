import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://localhost:7276',
        changeOrigin: true,
        secure: false,
      },
      '/image': {
        target: 'https://image.tmdb.org/t/p/original',
        changeOrigin: false,
        secure: false,
      }
    }
  }
})