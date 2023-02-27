import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build",
  },
  base: "/",
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      { find: "@assets", replacement: path.resolve(__dirname, "src/assets") },
      { find: "@pages", replacement: path.resolve(__dirname, "src/pages") },
      {
        find: "@component",
        replacement: path.resolve(__dirname, "src/component"),
      },
      { find: "@layouts", replacement: path.resolve(__dirname, "src/layouts") },
      { find: "@utils", replacement: path.resolve(__dirname, "src/utils") },
    ],
  },
})
