import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages has no server-side routing: an address like /case-studies/samsung would 404. Emitting
// the app's page as 404.html too lets main.tsx read the path and show the right page.
const spaFallback = (): Plugin => ({
  name: 'spa-404-fallback',
  apply: 'build',
  enforce: 'post',
  generateBundle(_, bundle) {
    const index = bundle['index.html']
    if (index?.type === 'asset') this.emitFile({ type: 'asset', fileName: '404.html', source: index.source })
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), spaFallback()],
})
