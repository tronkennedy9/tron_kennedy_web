import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/tron_kennedy_web/',  // Añade esta línea
  plugins: [react()],
})
