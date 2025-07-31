import type { UIMatch } from 'react-router';
import type { RouteMeta } from '@/router/types';
import type { dependencies, devDependencies } from '../../package.json';

/**
 * 覆盖 useMatches的类型定义，使用项目的 RouteMeta
 */
declare module 'react-router' {
  function useMatches(): UIMatch<unknown, RouteMeta>[];
}

declare global {
  const __APP_INFO__: {
    pkg: {
      name: string;
      version: string;
      license: string;
      author: string;
      dependencies: typeof dependencies;
      devDependencies: typeof devDependencies;
    };
    lastBuildTime: string;
  };
}
