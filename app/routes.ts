import {
  index,
  layout,
  type RouteConfig,
  route,
} from '@react-router/dev/routes';

export default [
  layout('routes/basic-layout.tsx', [
    index('routes/home.tsx'),
    route('crud-table', 'routes/crud-table.tsx'),
    route('admin-manager', 'routes/admin-manager.tsx'),
    route(
      'basic-features/icon-feature',
      'routes/basic-features/icon-feature.tsx',
    ),
    route(
      'basic-features/style-feature',
      'routes/basic-features/style-feature.tsx',
    ),
    route(
      'basic-features/store-feature',
      'routes/basic-features/store-feature.tsx',
    ),
    route(
      'basic-features/access-feature',
      'routes/basic-features/access-feature.tsx',
    ),
    route('exception/403', 'routes/exception/403.tsx'),
    route('exception/404', 'routes/exception/404.tsx'),
    route('exception/500', 'routes/exception/500.tsx'),
    route('*', 'routes/catch-all.tsx'),
  ]),
  layout('routes/blank-layout.tsx', [
    route('user/login', 'routes/user/login.tsx'),
  ]),
] satisfies RouteConfig;
