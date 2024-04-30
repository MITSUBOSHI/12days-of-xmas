import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_PAGES
    ? "/12days-of-xmas/"
    : "/",
  server: {
    port: 8080,
    strictPort: true,
    host: true,
    hmr: {
      port: 8080,
    }
  }
})
