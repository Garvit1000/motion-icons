import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'motion': path.resolve(__dirname, './motion'),
    },
  },
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: 'build',
  },
})