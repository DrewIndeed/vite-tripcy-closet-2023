import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@utils": path.resolve(__dirname, "./src/utils/index.ts"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },
  server: {
    port: 3333,
  },
  preview: {
    port: 8888,
  },
  plugins: [react(), viteCompression({ algorithm: "gzip" })],
});
