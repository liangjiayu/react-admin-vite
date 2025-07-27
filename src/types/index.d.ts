import type { UIMatch } from 'react-router';
import type { RouteMeta } from '@/router/types';

/**
 * 覆盖 useMatches的类型定义，使用项目的 RouteMeta
 */
declare module 'react-router' {
  function useMatches(): UIMatch<unknown, RouteMeta>[];
}
