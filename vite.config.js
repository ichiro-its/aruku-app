import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';
import reactRefresh from "@vitejs/plugin-react-refresh";

export default defineConfig({
  plugins:[
    eslintPlugin(),
    reactRefresh()
  ]
});