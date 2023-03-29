import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/tmdb/",
  plugins: [
    react({
      // Add this line
      include: "**/*.tsx",
      scss: "./scss/**/*.scss",
    }),
  ],
});
