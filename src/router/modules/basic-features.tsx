import { PencilRuler } from 'lucide-react';
import { lazy } from 'react';
import type { AppRouteProps } from '../types';

export default [
  {
    path: '/basic-features',
    handle: {
      name: '基础功能',
      icon: <PencilRuler />,
    },
    children: [
      {
        path: '/basic-features/icon-feature',
        Component: lazy(() => import('@/pages/basic-features/icon-feature')),
        handle: {
          name: '图标功能',
        },
      },
      {
        path: '/basic-features/style-feature',
        Component: lazy(() => import('@/pages/basic-features/style-feature')),
        handle: {
          name: '样式功能',
        },
      },
      {
        path: '/basic-features/store-feature',
        Component: lazy(() => import('@/pages/basic-features/store-feature')),
        handle: {
          name: '状态管理',
        },
      },
      {
        path: 'https://www.baidu.com',
        handle: {
          name: '外部链接',
          target: '_blank',
        },
      },
    ],
  },
] as AppRouteProps[];
