import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Relative paths let the same build work at /MyWebsite/ or at a custom domain.
  base: './',
});
