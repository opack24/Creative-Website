import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({ plugins: [react()], base: '/Creative-Website/', publicDir: false, build: { chunkSizeWarningLimit: 1200 } });
