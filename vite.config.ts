import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { mockDevServerPlugin } from "vite-plugin-mock-dev-server";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": "/src/",
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    mockDevServerPlugin({
      include: [
        "mock/**/*.mock.{js,ts,cjs,mjs,json,json5}",
        "src/pages/**/_mock.{js,ts}",
      ],
    }),
  ],
  server: {
    proxy: {
      "^/api": "http://example.com/",
    },
  },
});
