import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/e-commerce-React-final-project/', // Ensure this matches your repository name
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/Components',
      '@pages': '/src/Pages',
      '@assets': '/src/assets',
    },
  },
});