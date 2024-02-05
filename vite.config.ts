import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path"
import checker from 'vite-plugin-checker'
import dotenv from 'dotenv';

dotenv.config();
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
    }),
  ],
  // define process env
  define: {
    'process.env': process.env
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      // components: `${path.resolve(__dirname, "./src/components/")}`,
      // public: `${path.resolve(__dirname, "./public/")}`,
      // pages: path.resolve(__dirname, "./src/pages"),
      // types: `${path.resolve(__dirname, "./src/@types")}`,
    },
  },
})
