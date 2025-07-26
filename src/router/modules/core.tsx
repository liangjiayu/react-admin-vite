import { lazy } from 'react';
import basicFeatures from './basic-features';
import { AppRouteProps } from '../types';
import { DashboardOutlined } from '@ant-design/icons';

/**
 * 通常放置侧栏布局下的页面
 */
export default [
  {
    index: true,
    Component: lazy(() => import('@/pages/home')),
    handle: {
      hideInMenu: true,
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
    path: '*',
    Component: lazy(() => import('@/pages/exception/404')),
    handle: {
      hideInMenu: true,
    },
  },
] as AppRouteProps[];
