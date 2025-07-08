import { createBrowserRouter, redirect } from 'react-router';
import BasicLayout from '../layout/basic-layout';
import { lazy } from 'react';

const router = createBrowserRouter([
  {
    Component: BasicLayout,
    children: [
      {
        index: true,
        loader: () => redirect('/dashboard/analysis'),
      },
      {
        path: '/dashboard',
        children: [
          {
            path: '/dashboard/analysis',
            Component: lazy(() => import('@/pages/dashboard/analysis')),
          },
          {
            path: '/dashboard/monitor',
            Component: lazy(() => import('@/pages/dashboard/monitor')),
          },
          {
            path: '/dashboard/workplace',
            Component: lazy(() => import('@/pages/dashboard/workplace')),
          },
        ],
      },
      {
        path: '/result',
        children: [
          {
            path: '/result/success',
            Component: lazy(() => import('@/pages/result/success')),
            handle: {
              access: 'isAdmin',
            },
          },
          {
            path: '/result/fail',
            Component: lazy(() => import('@/pages/result/fail')),
          },
        ],
      },
      {
        path: '/form',
        children: [
          {
            path: '/form/basic-form',
            Component: lazy(() => import('@/pages/form/basic-form')),
          },
          {
            path: '/form/step-form',
            Component: lazy(() => import('@/pages/form/step-form')),
          },
          {
            path: '/form/advanced-form',
            Component: lazy(() => import('@/pages/form/advanced-form')),
          },
        ],
      },
      {
        path: '/list',
        children: [
          {
            path: '/list/search',
            Component: lazy(() => import('@/pages/list/search')),
            children: [
              {
                path: '/list/search/articles',
                Component: lazy(() => import('@/pages/list/search/articles')),
              },
              {
                path: '/list/search/projects',
                Component: lazy(() => import('@/pages/list/search/projects')),
              },
              {
                path: '/list/search/applications',
                Component: lazy(() => import('@/pages/list/search/applications')),
              },
            ],
          },
          {
            path: '/list/table-list',
            Component: lazy(() => import('@/pages/list/table-list')),
          },
          {
            path: '/list/basic-list',
            Component: lazy(() => import('@/pages/list/basic-list')),
          },
          {
            path: '/list/card-list',
            Component: lazy(() => import('@/pages/list/card-list')),
          },
        ],
      },
      {
        path: '/exception',
        children: [
          {
            path: '/exception/403',
            Component: lazy(() => import('@/pages/exception/403')),
          },
          {
            path: '/exception/404',
            Component: lazy(() => import('@/pages/exception/404')),
          },
          {
            path: '/exception/500',
            Component: lazy(() => import('@/pages/exception/500')),
          },
        ],
      },
      {
        path: '/profile',
        children: [
          {
            path: '/profile/basic',
            Component: lazy(() => import('@/pages/profile/basic')),
          },
          {
            path: '/profile/advanced',
            Component: lazy(() => import('@/pages/profile/advanced')),
          },
        ],
      },
      {
        path: '/account',
        children: [
          {
            path: '/account/center',
            Component: lazy(() => import('@/pages/account/center')),
          },
          {
            path: '/account/settings',
            Component: lazy(() => import('@/pages/account/settings')),
          },
        ],
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
