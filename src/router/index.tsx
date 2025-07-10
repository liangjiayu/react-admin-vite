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
