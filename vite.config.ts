import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'sentence-splitter',
      fileName: (format) => `sentence-splitter.${format}.js`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: [], // mark dependencies as external here
    },
  },
  plugins: [dts()],
})
