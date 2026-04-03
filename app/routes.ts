import {
  index,
  layout,
  type RouteConfig,
  route,
} from '@react-router/dev/routes';

export default [
  layout('routes/basic-layout.tsx', [
    index('routes/home.tsx'),
    route('crud-table', 'routes/crud-table/index.tsx'),
    route('icon-feature', 'routes/icon-feature/index.tsx'),
    route('admin-manager', 'routes/admin-manager.tsx'),
    route('exception/403', 'routes/exception/403.tsx'),
    route('exception/404', 'routes/exception/404.tsx'),
    route('exception/500', 'routes/exception/500.tsx'),
    route('*', 'routes/catch-all.tsx'),
  ]),
  layout('routes/blank-layout.tsx', [
    route('user/login', 'routes/user/login.tsx'),
  ]),
] satisfies RouteConfig;
