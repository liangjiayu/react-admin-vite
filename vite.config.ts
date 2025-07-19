import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { mockDevServerPlugin } from 'vite-plugin-mock-dev-server';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig(() => {
  return {
    resolve: {
      alias: {
        '@': '/src/',
      },
    },
    plugins: [
      react(),
      tailwindcss(),
      svgr(),
      mockDevServerPlugin({
        include: ['mock/**/*.mock.{js,ts,cjs,mjs,json,json5}', 'src/pages/**/_mock.{js,ts}'],
      }),
    ],
    server: {
      proxy: {
        '^/api': 'http://127.0.0.1:7100',
      },
    },
  };
});
