import { useMatches } from 'react-router';

/**
 * 获取当前路由信息
 */
export function useCurrentRoute() {
  const matches = useMatches();
  return matches[matches.length - 1];
}
