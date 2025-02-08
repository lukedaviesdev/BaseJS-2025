import path from 'path';

import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react({
      // Add React refresh runtime
      jsxRuntime: 'automatic',
    }),
    TanStackRouterVite(),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    hmr: true,
    port: 5173,
    host: true,
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
});
