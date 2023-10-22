import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
const port = loadEnv("development", "./");

export default defineConfig({
  plugins: [react()],
  server: {
    port: Number(port["VITE_PORT"]) || 8080,
  },
});
