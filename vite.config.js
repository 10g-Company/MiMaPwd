import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/MiMaPwd/', // This is crucial for GitHub Pages to find your assets
    build: {
        outDir: 'docs' // This line tells Vite to output to the 'docs' folder
    }
})