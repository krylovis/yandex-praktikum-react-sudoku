import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: Number(process.env.CLIENT_PORT) || 3000,
  },
  define: {
    __SERVER_PORT__: process.env.SERVER_PORT,
  },
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@', replacement: resolve(__dirname, './src'),
      },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use '@/styles/variables' as *;
        @use 'normalize-scss/sass/normalize' as *;
        `,
      },
    },
  },
});
