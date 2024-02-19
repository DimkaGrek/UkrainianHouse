import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig((command) => ({
    base: command === 'build' ? 'UkrainianHouse' : '/',
    plugins: [react()],
}));
