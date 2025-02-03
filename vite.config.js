import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer'; // Import autoprefixer
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
  ],
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer(), // Add autoprefixer
      ],
    },
  },
  base: "/ali_3dportfolio",
});