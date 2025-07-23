import { createBrowserRouter } from 'react-router';
import BasicLayout from '../layout/basic-layout';
import { lazy } from 'react';
import basicFeatures from './modules/basic-features';

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
      ...basicFeatures,
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
    ],
  },
  {
    path: '/aaa',
    children: [
      {
        path: '/aaa/bbb',
        Component: () => {
          return <div>bbb</div>;
        },
      },
      {
        path: '/aaa/ccc',
        Component: () => {
          return <div>ccc</div>;
        },
      },
    ],
  },
]);

export default router;
