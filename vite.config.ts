import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import { dependencies, devDependencies } from './package.json';

/**
 * vite 配置
 * @see https://cn.vite.dev/config/
 */
export default defineConfig({
  base: '/',
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [reactRouter(), tailwindcss(), svgr()],
  server: {
    host: true,
    warmup: {
      clientFiles: ['./app/routes/**/*.tsx'],
    },
    proxy: {
      '/api': {
        target: 'https://fast-api-mock.netlify.app',
        changeOrigin: true,
      },
    },
  },
  define: {
    __APP_INFO__: JSON.stringify({
      pkg: { dependencies, devDependencies },
    }),
  },
});
