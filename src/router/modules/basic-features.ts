import { lazy } from 'react';

export default [
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
    ],
  },
];
