import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Codex-Tech-Solutions/',
  server: {
    port: 3000
  }
})