import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/current-user": "http://localhost:9090",
      "/users": "http://localhost:9090",
      "/books": "http://localhost:9090",
    },
  },
});
