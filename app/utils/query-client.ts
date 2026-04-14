import { QueryClient, type QueryKey } from '@tanstack/react-query';

/**
 * 全局 QueryClient 单例
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      gcTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
      retry: 1,
    },
    mutations: {
      retry: 0,
    },
  },
});

/**
 * 刷新指定缓存
 */
export function refreshQuery(queryKey: QueryKey) {
  return queryClient.invalidateQueries({ queryKey });
}
