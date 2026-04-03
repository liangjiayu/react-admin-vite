import type { UIMatch } from 'react-router';
import type { dependencies, devDependencies } from '../../package.json';

type RouteMeta = {
  name?: string;
  access?: string;
  hideInMenu?: boolean;
  target?: '_blank' | '_self';
};

/**
 * 覆盖 useMatches的类型定义，使用项目的 RouteMeta
 */
declare module 'react-router' {
  function useMatches(): UIMatch<unknown, RouteMeta>[];
}

declare global {
  const __APP_INFO__: {
    pkg: {
      dependencies: typeof dependencies;
      devDependencies: typeof devDependencies;
    };
  };
}
