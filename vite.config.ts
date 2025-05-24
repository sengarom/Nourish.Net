import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // Import path module

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: { // Add resolve configuration
    alias: {
      '@': path.resolve(__dirname, './src'), // Define @ as an alias for the src directory
    },
  },
  server: {
    port: 3000, // You can change the port if needed
    open: true // Automatically open the app in the browser
  }
})
