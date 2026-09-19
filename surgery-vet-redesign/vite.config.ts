import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/zeeivik/',
  server: { port: 5179, strictPort: false },
})
