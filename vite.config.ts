import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { VitePWA } from "vite-plugin-pwa"

const path = require("path")

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@molecules": path.resolve(__dirname, "./src/components/molecules"),
      "@organisms": path.resolve(__dirname, "./src/components/organisms"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@helpers": path.resolve(__dirname, "./src/utils/helpers"),
    },
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["loader.svg", "robots.txt", "loader.png"],
      manifest: {
        name: "Arch Stanton Movies",
        short_name: "Arch Stanton Movies",
        description: "A PWA about classic American movies",
        theme_color: "#312037",
        background_color: "#312037",
        start_url: "/",
        lang: "fr",
        icons: [
          {
            src: "/loader.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/loader.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/loader.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
})
