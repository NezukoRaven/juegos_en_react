import path from "path"
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  preview: {
    // Add the allowed host
    allowedHosts: [
      'juegos.upkey.cl'
    ]
  },
  server: {
    host: true, // o '0.0.0.0'
    port: 80,
  },
})
