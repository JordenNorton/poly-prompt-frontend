import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(), // Adds Vue dev tools
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)), // Enables "@/path" shorthand
    },
  },
  css: {
    postcss: './postcss.config.js', // Ensures TailwindCSS and PostCSS are configured
    preprocessorOptions: {
      css: {
        additionalData: `@import "./src/assets/main.css";`, // Global CSS inclusion
      },
    },
  },
  server: {
    open: true, // Automatically opens the app in the browser on `npm run dev`
    port: 5173, // Default Vite port
  },
});
