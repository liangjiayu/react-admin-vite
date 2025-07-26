import { lazy } from 'react';
import basicFeatures from './basic-features';
import { AppRouteProps } from '../types';
import { DashboardOutlined, WarningOutlined } from '@ant-design/icons';

/**
 * 通常放置侧栏布局下的页面
 */
export default [
  {
    path: '/',
    Component: lazy(() => import('@/pages/home')),
    handle: {
      name: '首页',
    },
  },
  {
    path: '/crud-table',
    Component: lazy(() => import('@/pages/crud-table')),
    handle: {
      name: 'CRUD表格',
      icon: <DashboardOutlined />,
    },
  },
  ...basicFeatures,
  {
    path: '/exception',
    handle: {
      name: '异常页',
      icon: <WarningOutlined />,
    },
    children: [
      {
        path: '/exception/403',
        handle: {
          name: '403',
        },
      },
      {
        path: '/exception/404',
        handle: {
          name: '404',
        },
      },
      {
        path: '/exception/500',
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
