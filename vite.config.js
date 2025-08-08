import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        viteStaticCopy({
            targets: [
                {
                    src: 'src/_layouts',
                    dest: '' // This copies the folder to the root of the build directory
                },
                {
                    src: 'whats-new.md',
                    dest:''
                }
            ]
        })
    ],
    base: '/MiMaPwd/', // This is crucial for GitHub Pages to find your assets
    build: {
        outDir: 'docs' // This line tells Vite to output to the 'docs' folder
    }
})