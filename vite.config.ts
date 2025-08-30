import process from 'node:process';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import dayjs from 'dayjs';
import { defineConfig, loadEnv } from 'vite';
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
  const envValues = loadEnv(mode, process.cwd());

  const envConfig = {
    port: Number(envValues.VITE_PORT),
    mockEnable: envValues.VITE_MOCK_ENABLE === 'true',
    proxyUrl: envValues.VITE_PROXY_URL,
  };

  return {
    base: '/',
    resolve: {
      alias: {
        '@': '/src/',
        '@config': '/config/',
      },
    },
    plugins: [
      react(),
      tailwindcss(),
      svgr(),
      envConfig.mockEnable &&
        mockDevServerPlugin({
          include: [
            'mock/**/*.mock.{js,ts,cjs,mjs,json,json5}',
            'src/pages/**/_mock.{js,ts}',
          ],
        }),
    ],
    server: {
      port: envConfig.port,
      host: true,
      proxy: {
        '/api': {
          target: envConfig.proxyUrl,
          changeOrigin: true,
        },
      },
    },
    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__),
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            react: ['react', 'react-dom', 'react-router'],
            antd: ['antd', '@ant-design/icons'],
          },
        },
      },
    },
  };
});
