import { createBrowserRouter } from 'react-router';
import BasicLayout from '../layout/basic-layout';
import { lazy } from 'react';

const router = createBrowserRouter([
  {
    Component: BasicLayout,
    children: [
      {
        index: true,
        Component: lazy(() => import('@/pages/home')),
      },
      {
        path: '/crud-table',
        Component: lazy(() => import('@/pages/crud-table')),
      },
      {
        path: '/basic-features',
        children: [
          {
            path: '/basic-features/icon-feature',
            Component: lazy(() => import('@/pages/basic-features/icon-feature')),
          },
          {
            path: '/basic-features/style-feature',
            Component: lazy(() => import('@/pages/basic-features/style-feature')),
          },
          {
            path: '/basic-features/store-feature',
            Component: lazy(() => import('@/pages/basic-features/store-feature')),
          },
          {
            path: '/basic-features/article-demo',
            Component: lazy(() => import('@/pages/basic-features/article-demo')),
          },
        ],
      },
      {
        path: '*',
        Component: lazy(() => import('@/pages/exception/404')),
      },
    ],
  },
  {
    path: '/user',
    children: [
      {
        path: '/user/login',
        Component: lazy(() => import('@/pages/user/login')),
      },
      {
        path: '/user/register',
        Component: lazy(() => import('@/pages/user/register')),
      },
      {
        path: '/user/register-result',
        Component: lazy(() => import('@/pages/user/register-result')),
      },
    ],
  },
]);

export default router;
