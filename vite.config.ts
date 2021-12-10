import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

const path = require("path")

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@molecules": path.resolve(__dirname, "./src/components/molecules"),
      "@organisms": path.resolve(__dirname, "./src/components/organisms"),
      "@pages": path.resolve(__dirname, "./src/pages"),
    },
  },
  plugins: [react()],
})
