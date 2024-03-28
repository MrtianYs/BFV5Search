import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue(), eslint()],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  build: {
    outDir: 'docs'
  },
  esbuild: {
    charset: 'ascii'
  }
});
