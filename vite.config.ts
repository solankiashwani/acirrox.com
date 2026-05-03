import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // GitHub Pages (Option B): publish from /docs on main
  build: {
    outDir: "docs",
    emptyOutDir: true,
  },
});
