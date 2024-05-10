import { resolve } from 'node:path';
// import copy from './node_modules/vite-plugin-copy/dist/vite-plugin-copy.js';
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig(() => ({
  base: '/UkrainianHouse',
  plugins: [react(), splitVendorChunkPlugin()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src/'),
    },
  },
}));
