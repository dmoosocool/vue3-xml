/// <reference types="vitest" />

import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import jsx from '@vitejs/plugin-vue-jsx';

export default defineConfig({
  esbuild: {
    jsxFragment: 'Fragment',
    jsxFactory: 'h',
  },
  test: {
    /** for example, use global to avoid globals imports (describe, test, expect): */
    global: true,
    environment: 'happy-dom',
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },
  plugins: [vue(), jsx()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
