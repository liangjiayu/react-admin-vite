import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import dayjs from 'dayjs';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import {
  author,
  dependencies,
  devDependencies,
  name,
  version,
} from './package.json';

const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version, author },
  lastBuildTime: dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss'),
};

/**
 * vite 配置
 * @see https://cn.vite.dev/config/
 */
export default defineConfig({
  base: '/',
  resolve: {
    alias: {
      '@': '/app/',
      '@config': '/config/',
    },
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
    __APP_INFO__: JSON.stringify(__APP_INFO__),
  },
});
