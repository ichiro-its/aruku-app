import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import eslintPlugin from 'vite-plugin-eslint';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), viteCommonjs()],
});
