import { House, ShieldBan, Table2, TriangleAlert } from 'lucide-react';
import { lazy } from 'react';
import type { AppRouteProps } from '../types';
import basicFeatures from './basic-features';

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
  {
    path: '/admin-manager',
    element: <div className="text-[50px]">只有admin才可以看到123456</div>,
    handle: {
      name: '权限页面',
      icon: <ShieldBan />,
      access: 'isAdmin',
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
