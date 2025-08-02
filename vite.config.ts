import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import dayjs from 'dayjs';
import { defineConfig } from 'vite';
import { mockDevServerPlugin } from 'vite-plugin-mock-dev-server';
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
export default defineConfig(({ mode }) => {
  return {
    base: '/',
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
        include: [
          'mock/**/*.mock.{js,ts,cjs,mjs,json,json5}',
          'src/pages/**/_mock.{js,ts}',
        ],
      }),
    ],
    server: {
      proxy: {
        '^/api': 'http://8.134.97.57:7100',
      },
    },
    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__),
    },
  };
});
