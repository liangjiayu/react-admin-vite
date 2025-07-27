import { lazy } from 'react';
import basicFeatures from './basic-features';
import type { AppRouteProps } from '../types';
import { House, Table2, TriangleAlert } from 'lucide-react';

/**
 * 通常放置侧栏布局下的页面
 */
export default [
  {
    path: '/',
    Component: lazy(() => import('@/pages/home')),
    handle: {
      name: '首页',
      icon: <House />,
    },
  },
  {
    path: '/crud-table',
    Component: lazy(() => import('@/pages/crud-table')),
    handle: {
      name: 'CRUD表格',
      icon: <Table2 />,
    },
  },
  ...basicFeatures,
  {
    path: '/exception',
    handle: {
      name: '异常页',
      icon: <TriangleAlert />,
    },
    children: [
      {
        path: '/exception/403',
        Component: lazy(() => import('@/pages/exception/403')),
        handle: {
          name: '403',
        },
      },
      {
        path: '/exception/404',
        Component: lazy(() => import('@/pages/exception/404')),
        handle: {
          name: '404',
        },
      },
      {
        path: '/exception/500',
        Component: lazy(() => import('@/pages/exception/500')),
        handle: {
          name: '500',
        },
      },
    ],
  },
  {
    path: '*',
    Component: lazy(() => import('@/pages/exception/404')),
    handle: {
      hideInMenu: true,
    },
  },
] as AppRouteProps[];
