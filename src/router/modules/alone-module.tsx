import { lazy } from 'react';
import type { AppRouteProps } from '../types';

/**
 * 通常放置一些不需要侧栏布局的页面
 */
export default [
  {
    path: '/user',
    children: [
      {
        path: '/user/login',
        Component: lazy(() => import('@/pages/user/login')),
        handle: {
          name: '用户登录',
        },
      },
    ],
  },
] as AppRouteProps[];
