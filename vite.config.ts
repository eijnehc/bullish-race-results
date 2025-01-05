import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/bullish-race-results/",
  build: {
    sourcemap: false,
  },
});
