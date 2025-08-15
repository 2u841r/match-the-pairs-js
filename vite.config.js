import { defineConfig } from 'vite'

export default defineConfig({
    server: {
        allowedHosts: ['games.zubairiz.com', 'match-the-pairs-js.vercel.app', 'vite.zubair.click'],
    }
})