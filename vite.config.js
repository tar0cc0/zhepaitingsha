import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))
const __root = 'src'

export default defineConfig({
  root: __root,
  base: '/',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, `${__root}/index.html`),
        privacy: resolve(__dirname, `${__root}/privacy.html`)
      }
    }
  }
})
