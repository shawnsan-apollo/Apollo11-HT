import { defineConfig } from 'vite'
import shopify from 'vite-plugin-shopify'
import globs from 'rollup-plugin-globlin'
import cleanup from '@by-association-only/vite-plugin-shopify-clean'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    shopify(),
    cleanup(),
    globs({
      globs: ['frontend/store/**/sections/*.liquid'],
      dest: 'sections',
      clean: false,
    }),
    globs({
      globs: ['frontend/store/**/snippets/*.liquid'],
      dest: 'snippets',
      clean: false,
    }),
  ],
  css: {
    devSourcemap: true,
  },
  build: {
    emptyOutDir: false,
    rollupOptions: {
      output: {
        entryFileNames: '[name].[hash].min.js',
        chunkFileNames: '[name].[hash].min.js',
        assetFileNames: '[name].[hash].min[extname]',
      },
    },
  },
})
